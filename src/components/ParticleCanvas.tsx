import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 40000;
const MOUSE_INFLUENCE_RADIUS = 120;
const MOUSE_ATTRACTION_STRENGTH = 0.8;
const RETURN_STRENGTH = 0.02;
const DAMPING = 0.94;
const NOISE_SPEED = 0.3;

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a0a, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 1, 2000);
    camera.position.z = 500;

    // Create particles
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const originalPositions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const lifespans = new Float32Array(PARTICLE_COUNT);
    const maxLifespans = new Float32Array(PARTICLE_COUNT);

    const spacing = 300;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * spacing * 2;
      const y = (Math.random() - 0.5) * spacing * 1.5;
      const z = (Math.random() - 0.5) * spacing * 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;

      colors[i * 3] = 0.65 + Math.random() * 0.15;
      colors[i * 3 + 1] = 0.75 + Math.random() * 0.15;
      colors[i * 3 + 2] = 0.9 + Math.random() * 0.1;

      sizes[i] = 1.0 + Math.random() * 2.0;
      lifespans[i] = Math.random() * 300 + 100;
      maxLifespans[i] = lifespans[i];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const vertexShader = `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.2, 0.5, d);
        gl_FragColor = vec4(vColor, alpha * 0.7);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    onResize();
    window.addEventListener('resize', onResize);

    // Animation
    let time = 0;
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      time += 0.005 * NOISE_SPEED;

      // Smooth mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const mouseWorldX = mouseRef.current.x * 400;
      const mouseWorldY = mouseRef.current.y * 300;

      const posArray = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;

        // Distance to mouse
        const dx = mouseWorldX - posArray[i3];
        const dy = mouseWorldY - posArray[i3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Mouse attraction
        if (dist < MOUSE_INFLUENCE_RADIUS && dist > 1) {
          const force = (1 - dist / MOUSE_INFLUENCE_RADIUS) * MOUSE_ATTRACTION_STRENGTH;
          velocities[i3] += (dx / dist) * force * 0.5;
          velocities[i3 + 1] += (dy / dist) * force * 0.5;

          // Orbital rotation
          velocities[i3] += -dy * force * 0.003;
          velocities[i3 + 1] += dx * force * 0.003;
        }

        // Return to original position (spring force)
        velocities[i3] += (originalPositions[i3] - posArray[i3]) * RETURN_STRENGTH;
        velocities[i3 + 1] += (originalPositions[i3 + 1] - posArray[i3 + 1]) * RETURN_STRENGTH;
        velocities[i3 + 2] += (originalPositions[i3 + 2] - posArray[i3 + 2]) * RETURN_STRENGTH;

        // Curl noise (simplified)
        const noiseX = Math.sin(posArray[i3 + 1] * 0.01 + time * 10) * 0.1;
        const noiseY = Math.cos(posArray[i3] * 0.01 + time * 10) * 0.1;
        const noiseZ = Math.sin((posArray[i3] + posArray[i3 + 1]) * 0.008 + time * 8) * 0.05;

        velocities[i3] += noiseX;
        velocities[i3 + 1] += noiseY;
        velocities[i3 + 2] += noiseZ;

        // Apply damping
        velocities[i3] *= DAMPING;
        velocities[i3 + 1] *= DAMPING;
        velocities[i3 + 2] *= DAMPING;

        // Update position
        posArray[i3] += velocities[i3];
        posArray[i3 + 1] += velocities[i3 + 1];
        posArray[i3 + 2] += velocities[i3 + 2];

        // Update color based on velocity
        const speed = Math.sqrt(
          velocities[i3] * velocities[i3] +
          velocities[i3 + 1] * velocities[i3 + 1] +
          velocities[i3 + 2] * velocities[i3 + 2]
        );
        const colorShift = Math.min(speed * 0.5, 0.3);
        colors[i3] = 0.65 + colorShift;
        colors[i3 + 1] = 0.75 - colorShift * 0.3;
        colors[i3 + 2] = 0.9 - colorShift * 0.2;
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;

      // Subtle rotation
      points.rotation.y = Math.sin(time * 0.5) * 0.02;
      points.rotation.x = Math.cos(time * 0.3) * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}

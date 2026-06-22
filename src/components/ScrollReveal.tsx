import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  scale?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 40,
  stagger = 0,
  scale,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y,
    };
    if (scale !== undefined) fromVars.scale = scale;

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    };
    if (scale !== undefined) toVars.scale = 1;
    if (stagger > 0) {
      const childElements = el.children;
      if (childElements.length > 0) {
        gsap.fromTo(childElements, fromVars, { ...toVars, stagger });
        return;
      }
    }

    gsap.fromTo(el, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay, duration, y, stagger, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

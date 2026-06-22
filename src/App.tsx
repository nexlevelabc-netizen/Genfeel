import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Portfolio from '@/pages/Portfolio';
import About from '@/pages/About';
import Pricing from '@/pages/Pricing';
import Contact from '@/pages/Contact';
import GetStarted from '@/pages/GetStarted';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navigation />
      <ScrollToTop />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}

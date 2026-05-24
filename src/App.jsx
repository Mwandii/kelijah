/**
 * App.jsx
 * ─────────────────────────────────────────────────────────────
 * Root application component.
 * Handles routing and wraps all pages with shared layout.
 * Add sections here as they are built — one at a time.
 * ─────────────────────────────────────────────────────────────
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TrustMarquee from './components/sections/TrustMarquee';
import About from './components/sections/About';
import BrandsMarquee from './components/sections/BrandsMarquee';
import ServicesGrid from './components/sections/ServicesGrid';
import WhyChooseUs from './components/sections/WhyChooseUs';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import CtaStrip from './components/sections/CtaStrip';
import Location from './components/sections/Location';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Hero/>
    <TrustMarquee/>
    <About/>
    <BrandsMarquee/>
    <ServicesGrid/>
    <WhyChooseUs/>
    <HowItWorks/>
    <Testimonials/>
    <CtaStrip/>
    <Location/>
    {/* ── Add sections below as they are built ── */}
  </BrowserRouter>
);

export default App;
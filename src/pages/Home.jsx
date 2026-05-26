/**
 * Home.jsx
 * src/pages/Home.jsx
 * ─────────────────────────────────────────────────────────────
 * Homepage page component.
 * Assembles all homepage sections in order.
 * Navbar and Footer are rendered by App.jsx (layout level)
 * so they appear on every page without repeating here.
 * ─────────────────────────────────────────────────────────────
 */

import Hero         from '../components/sections/Hero';
import TrustMarquee from '../components/sections/TrustMarquee';
import About        from '../components/sections/About';
import BrandsMarquee from '../components/sections/BrandsMarquee';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs  from '../components/sections/WhyChooseUs';
import HowItWorks   from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import CtaStrip     from '../components/sections/CtaStrip';
import Location     from '../components/sections/Location';

const Home = () => (
  <main id="main-content">
    <Hero />
    <TrustMarquee />
    <About />
    <BrandsMarquee />
    <ServicesGrid />
    <WhyChooseUs />
    <HowItWorks />
    <Testimonials />
    <CtaStrip />
    <Location />
  </main>
);

export default Home;
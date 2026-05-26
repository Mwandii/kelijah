/**
 * App.jsx
 * src/App.jsx
 * ─────────────────────────────────────────────────────────────
 * Root application component.
 * - Sets up BrowserRouter and all routes
 * - Navbar and Footer wrap all routes (appear on every page)
 * - ScrollToTop resets scroll position on every navigation
 * - 404 fallback redirects to home
 * ─────────────────────────────────────────────────────────────
 */

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar  from './components/layout/Navbar';
import Footer  from './components/layout/Footer';

import Home    from './pages/Home';

// ── Pages — uncomment as they are built ──────────────────────
// import Services         from './pages/Services';
// import ServiceDetail    from './pages/ServiceDetail';
// import BookAppointment  from './pages/BookAppointment';

// ── ScrollToTop ───────────────────────────────────────────────
// Resets window scroll to top on every route change.
// Must be inside BrowserRouter to access useLocation.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// ── Layout wrapper ────────────────────────────────────────────
// Navbar and Footer appear on every page.
// <main> content is provided by each page component.
const Layout = ({ children }) => (
  <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[var(--color-red)] focus:text-white focus:rounded focus:font-bold"
    >
      Skip to main content
    </a>
    <Navbar />
    {children}
    <Footer />
  </>
);

// ── App ───────────────────────────────────────────────────────
const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Layout>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Services listing page */}
        <Route
          path="/services"
          element={
            <main id="main-content" className="min-h-screen bg-[var(--color-black)] flex items-center justify-center">
              <p className="text-white/30 font-[family-name:var(--font-display)] text-xl tracking-widest uppercase">
                Services page — coming soon
              </p>
            </main>
          }
        />

        {/* Service detail — dynamic slug */}
        <Route
          path="/services/:slug"
          element={
            <main id="main-content" className="min-h-screen bg-[var(--color-black)] flex items-center justify-center">
              <p className="text-white/30 font-[family-name:var(--font-display)] text-xl tracking-widest uppercase">
                Service detail — coming soon
              </p>
            </main>
          }
        />

        {/* Book appointment */}
        <Route
          path="/book-appointment"
          element={
            <main id="main-content" className="min-h-screen bg-[var(--color-black)] flex items-center justify-center">
              <p className="text-white/30 font-[family-name:var(--font-display)] text-xl tracking-widest uppercase">
                Book appointment — coming soon
              </p>
            </main>
          }
        />

        {/* 404 — redirect anything unknown back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
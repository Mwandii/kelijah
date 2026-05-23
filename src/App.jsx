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

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Hero/>
    {/* ── Add sections below as they are built ── */}
  </BrowserRouter>
);

export default App;
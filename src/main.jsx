/**
 * main.jsx
 * src/main.jsx
 * ─────────────────────────────────────────────────────────────
 * Application entry point.
 * Mounts the React app to the DOM and imports global styles.
 * ─────────────────────────────────────────────────────────────
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
/**
 * PREVIEW: Application entry point configuring React, global routing, and context providers.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { PortfolioProvider } from './context/PortfolioContext.jsx';

/**
 * Initializes the React application and mounts it to the root DOM element.
 * Wraps the application in StrictMode for development checks, BrowserRouter for routing,
 * and PortfolioProvider for global state management.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </BrowserRouter>
  </StrictMode>
);

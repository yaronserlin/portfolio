/**
 * Application Entry Point - Portfolio Application Bootstrap
 * 
 * This is the main entry point for the React application. It initializes the React root,
 * sets up routing with React Router, and wraps the entire application with the PortfolioProvider
 * context to make portfolio data available throughout the component tree.
 * 
 * Component Hierarchy:
 * - React.StrictMode (development mode checks)
 * - BrowserRouter (client-side routing)
 * - PortfolioProvider (global state management)
 * - App (main application component)
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { PortfolioProvider } from './context/PortfolioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </BrowserRouter>
  </StrictMode>,
)

/**
 * Preview: Entry point establishing the central DOM node layout and providing global React contexts.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
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

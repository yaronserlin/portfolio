# 🚀 Developer Portfolio

A modern, responsive, and dynamic personal portfolio website built with React, Vite, and React-Bootstrap to showcase my projects, skills, and background.

## ✨ Features

- **Dynamic GitHub Integration**: Automatically fetches and displays public repositories using the GitHub API, prioritizing projects by stars. Includes smart technology extraction and live preview links.
- **Rich Media Support**: Project cards support lazy-loaded thumbnails and interactive video/GIF viewing modals for demonstrating applications.
- **Responsive Design**: Fluid and mobile-friendly layout utilizing Bootstrap's grid system and CSS Grid/Flexbox.
- **Glassmorphism Aesthetics**: Modern UI with subtle blur effects, hover animations, and a polished dark-theme accent.
- **Form Integration**: Fully functional contact form with EmailJS integration and robust client-side validation.
- **Component-Driven Architecture**: Highly modular React codebase with reusable UI elements (e.g., `LanguageBadge`, `OptimizedImage`, `ProjectCard`).

## 🛠️ Tech Stack

- **Framework**: React 19 (Hooks, Context API, React Router v7)
- **Build Tool**: Vite
- **Styling**: React-Bootstrap, Vanilla Bootstrap 5, SCSS, Custom CSS Modules
- **Icons**: React Icons, SimpleIcons
- **API**: GitHub REST API (Projects module), EmailJS API (Contact form module)

## 📦 Project Structure

```text
src/
├── assets/         # Static images and media files
├── components/     # Reusable UI components
├── context/        # React Context providers (PortfolioContext)
├── data/           # Hardcoded portfolio data and fallback details
├── pages/          # Top-level page components (Home, About, Projects, Contact)
├── services/       # External API services (GitHub, etc)
├── styles/         # Global SCSS and CSS overrides
├── App.jsx         # Main application routing and layout
└── main.jsx        # React application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yaronserlin/portfolio.git
   ```

2. Navigate into the directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure Environment Variables:
   Create a `.env` file in the root directory and add your EmailJS configuration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🚢 Deployment

The project is configured for fast production builds using Vite. To completely prepare the project for a live deployment environment:

1. Build the source:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `dist` folder. You can test the build locally before deployment:
   ```bash
   npm run preview
   ```

> **Note on Render Deployment**: When deploying to platforms like Render, utilize the build command `npm run build` and set the publish directory to `dist`. If utilizing client-side routing, ensure appropriate URL rewrite rules are applied on the static host.

## 📄 License

This project is open-source and available under the terms of the MIT License.

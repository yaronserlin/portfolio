# Yaron Serlin - Full Stack Developer Portfolio

Welcome to the source code for my personal developer portfolio! This project showcases my skills, experience, and the software projects I've built. The application is built using modern web development practices with React, Bootstrap, and Vite.

## 🚀 Live Demo

[Visit My Portfolio](https://yaronserlin.github.io/portfolio) *(Update link to your deployed Render/GitHub Pages URL)*

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.github.io/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, and localized media
│   ├── components/         # Reusable UI components (Nav, Footer, Cards, etc.)
│   ├── context/            # React Context providers (PortfolioContext)
│   ├── data/               # Hardcoded fallback data and configuration
│   ├── hooks/              # Custom React hooks (useContactForm)
│   ├── pages/              # Route-level page components
│   ├── services/           # External API integrations (GitHub Service)
│   ├── utils/              # Helper functions and validators
│   ├── App.jsx             # Main application layout and routing
│   └── main.jsx            # Application entry point
├── .env.example            # Example environment variables required for EmailJS
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite bundler configuration
```

## ⚙️ Installation & Setup

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yaronserlin/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your EmailJS configuration. Use the following template if you wish to test the contact form:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📦 Building for Production

To create a production-ready build, run:
```bash
npm run build
```
The optimized files will be generated in the `dist` folder. You can preview the production build locally using:
```bash
npm run preview
```

## ☁️ Deployment

This project is configured optimally for zero-config deployments on platforms like **Render**, **Vercel**, or **Netlify**.

**Recommended Deployment Settings (Render.com / Vercel):**
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Environment Variables:** Make sure to inject your `VITE_EMAILJS_*` keys into your hosting provider's dashboard so the contact form works in production.

## 📝 Code Quality & Documentation

All components, hooks, and utilities are thoroughly documented using standardized JSDoc comments to ensure long-term maintainability. 

## 👨‍💻 Author

**Yaron Serlin**
- [LinkedIn](https://www.linkedin.com/in/yaron-serlin)
- [GitHub](https://github.com/yaronserlin)

---
*If you find this repository helpful, feel free to give it a ⭐!*

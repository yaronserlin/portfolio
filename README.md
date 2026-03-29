# Yaron Serlin - Personal Developer Portfolio

Welcome to the source code of my personal developer portfolio. This repository serves as both the codebase for my live portfolio website and a practical demonstration of my technical skills, coding standards, and architectural approach to modern web development.

**Note:** This repository is intended for my personal use and as a work example for recruiters, hiring managers, and peers.

## 🛠️ Technology Stack

This project is built using modern, industry-standard web technologies:

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.github.io/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **External Integration**: GitHub REST API (for dynamic project fetching) & EmailJS (for serverless contact forms)

## 🏗️ Architecture & Best Practices

In building this portfolio, I prioritized clean, maintainable, and scalable code. Key highlights of my approach include:

- **Modular Components**: The UI is broken down into small, highly reusable React components (e.g., `ProjectCard`, `SkillCategory`, `OptimizedImage`).
- **Global State Management**: Utilizing the React Context API (`PortfolioContext`) to efficiently manage and distribute application state, including dynamically fetched GitHub repository metadata.
- **Custom Hooks**: Encapsulating complex, stateful logic (such as form validation and EmailJS network requests in `useContactForm.js`) to keep UI components pure and focused strictly on the view layer.
- **Comprehensive Documentation**: The entire codebase adheres strictly to professional commenting standards, including root-level Preview comments, comprehensive JSDoc typings for all functions/components, and intentional inline logic documentation.
- **Robust Error Handling & Fallbacks**: Implementing loading states, safe fallback images, and utilizing a local failover database if the external GitHub API is unreachable or rate-limited.

## 📂 Codebase Navigation

If you are reviewing my code, here is a quick overview of the application's structure:

```text
portfolio/
├── src/
│   ├── components/         # Reusable presentation and layout components
│   ├── context/            # Application-wide React Context providers
│   ├── data/               # Static fallback data configurations
│   ├── hooks/              # Custom React hooks for abstracted logic
│   ├── pages/              # Top-level route definitions (Home, About, Projects, Contact)
│   ├── services/           # External API fetching logic (GitHub endpoints)
│   ├── utils/              # Helper functions, form validators, etc.
│   ├── App.jsx             # Main application layout and router wrapper
│   └── main.jsx            # Application entry point
```

## 👨‍💻 About Me

I'm a Full Stack Developer passionate about solving complex problems through clean architecture and continuous learning. I specialize in building intelligent, interactive web applications and thrive in dynamic team environments. 

- [LinkedIn Profile](https://www.linkedin.com/in/yaron-serlin)
- [GitHub Profile](https://github.com/yaronserlin)

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './styles/index.css';
import './styles/variables.css';
import './styles/themes.css';

import App from './App.jsx'

import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Home from './pages/Home.jsx';
// import AboutMe from './pages/AboutMe.jsx';
// import Projects from './pages/Projects.jsx';
// import Contact from './pages/Contact.jsx';
// import ProjectDetails from './pages/ProjectDetails.jsx';
import { StrictMode } from 'react';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: '/', Component: Home },
      // { path: '/about', Component: AboutMe },
      // { path: '/projects', Component: Projects },
      // { path: '/contact', Component: Contact },
      // { path: '/projects/:projectId', Component: ProjectDetails }

    ]
  },
]);

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
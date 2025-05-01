# Portfolio Single-Page React Application

A modern, responsive, single-page React portfolio site featuring full-screen, stacked sections with overlapping scroll effects. Built using CSS Modules, custom CSS variables, and light-weight sticky positioning for a seamless user experience.

---

## 📂 Project Structure

```
src/
│
├─ assets/                 # Images, icons, fonts
│  └─ profile.jpg          # Main profile image
│
├─ components/             # Reusable UI components
│  ├─ AboutMe/
│  │  ├─ AboutMe.jsx
│  │  └─ AboutMe.module.css
│  ├─ ContactSection/
│  │  ├─ ContactSection.jsx
│  │  └─ ContactSection.module.css
│  ├─ ExperienceAndEducation/
│  │  ├─ ExperienceAndEducation.jsx
│  │  └─ ExperienceAndEducation.module.css
│  ├─ HeroSection/
│  │  ├─ HeroSection.jsx
│  │  └─ HeroSection.module.css
│  ├─ Section/
│  │  ├─ Section.jsx
│  │  └─ Section.module.css
│  ├─ SampleWork/
│  │  ├─ SampleWork.jsx
│  │  └─ SampleWork.module.css
│  ├─ SkillsProficiencies/
│  │  ├─ SkillsProficiencies.jsx
│  │  └─ SkillsProficiencies.module.css
│  └─ StackedSections/
│     ├─ StackedSections.jsx
│     └─ StackedSections.module.css
│
├─ styles/                 # Global CSS variables and resets
│  └─ variables.css        # CSS custom properties
│
├─ pages/                  # Page-level components/routes
│  └─ Home.jsx             # Main landing page
│
├─ data/                   # Static data for props
│  ├─ contactInfo.js       # contactSection props
│  ├─ experience.js        # experience & education arrays
│  ├─ projects.js          # sample work array
│  └─ skills.js            # skills array
│
├─ App.jsx                 # Application root component
├─ index.js                # ReactDOM render entrypoint
└─ README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>=14.x) and npm or Yarn
- A modern browser (Chrome, Firefox, Safari)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/portfolio-react.git
cd portfolio-react
npm install
# or yarn install
```

### Development Server

```bash
npm start
# or yarn start
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
# or yarn build
```

Build artifacts will be output to the `build/` directory.

---

## 🧩 Core Components

| Component                     | Description                                                      |
| ----------------------------- | ---------------------------------------------------------------- |
| **HeroSection**               | Full-screen introduction with profile image and CTA button.
| **AboutMe**                   | Two-column layout with bio text and profile image.
| **ExperienceAndEducation**    | Side-by-side lists of work experience and education.
| **SkillsProficiencies**       | List of skills with progress bars indicating proficiency.
| **SampleWork**                | Uniform project cards grid with hover shadow.
| **ContactSection**            | Image + contact details + dynamic social icons.
| **Section**                   | Wrapper for full-screen sections with background variants.
| **StackedSections**           | Enables sticky, overlapping scroll effect across `<Section>`s.

---

## 🎨 Styling

- **CSS Variables**: Defined in `src/styles/variables.css` for colors, spacing, typography, breakpoints.
- **CSS Modules**: Scoped component styles in `*.module.css` files.
- **Responsive**: Media queries adjust layouts for screens <768px.
- **Sticky Sections**: Pure CSS layering using `position: sticky` and dynamic `z-index` for overlapping.

---

## 🔗 Data Sources

Static data is stored in the `src/data/` folder:

- `contactInfo.js` – Exports props for `ContactSection`.
- `experience.js` – Arrays for `ExperienceAndEducation`.
- `projects.js` – Project list for `SampleWork`.
- `skills.js` – Skills array for `SkillsProficiencies`.

Import these files in `Home.jsx` (or your page) and pass them as props.

---

## 💡 Usage Example (Home.jsx)

```jsx
import React from 'react';
import StackedSections from './components/StackedSections/StackedSections';
import Section from './components/Section/Section';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/AboutMe/AboutMe';
import ExperienceAndEducation from './components/ExperienceAndEducation/ExperienceAndEducation';
import SkillsProficiencies from './components/SkillsProficiencies/SkillsProficiencies';
import SampleWork from './components/SampleWork/SampleWork';
import ContactSection from './components/ContactSection/ContactSection';

import contactInfo from '../data/contactInfo';
import experienceData from '../data/experience';
import projectsData from '../data/projects';
import skillsData from '../data/skills';

export default function Home() {
  return (
    <StackedSections>
      <Section variant="light">
        <HeroSection /* props */ />
      </Section>

      <Section variant="alt">
        <AboutMe /* props */ />
      </Section>

      <Section variant="dark">
        <ExperienceAndEducation {...experienceData} />
      </Section>

      <Section variant="light">
        <SkillsProficiencies skills={skillsData} />
      </Section>

      <Section variant="dark">
        <SampleWork projects={projectsData} />
      </Section>

      <Section variant="alt">
        <ContactSection {...contactInfo} />
      </Section>
    </StackedSections>
  );
}
```

---

## ⚙️ Available Scripts

- `npm start` / `yarn start`: Launch development server
- `npm run build` / `yarn build`: Bundle for production
- `npm test` / `yarn test`: Run tests (if configured)

---

## 📜 License

This project is open-source under the MIT License.


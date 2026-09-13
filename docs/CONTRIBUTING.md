# Contributing Guide

This project is a personal portfolio built with React 19 and Vite. It has no backend — all
dynamic data comes from the public GitHub REST API and EmailJS.

## Development Environment Setup

### Prerequisites

- Node.js (a version compatible with Vite 8 / React 19 — Node 20+ recommended)
- npm

### Install

```bash
git clone <repo-url>
cd portfolio
npm install
```

### Configure environment variables

Create a `.env` file in the project root (it is git-ignored):

<!-- AUTO-GENERATED:ENV -->
| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_EMAILJS_PUBLIC_KEY` | Yes, for the contact form | EmailJS public API key used to initialize the client SDK | `abc123XYZ` |
| `VITE_EMAILJS_SERVICE_ID` | Yes, for the contact form | EmailJS service ID the contact form sends through | `service_xxxxxxx` |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes, for the contact form | EmailJS template ID used to render the outgoing email | `template_xxxxxxx` |
<!-- /AUTO-GENERATED:ENV -->

Without these, the site still runs — the contact form will simply fail to send. The GitHub
project data (`src/services/githubService.js`) needs no configuration; it calls the public,
unauthenticated GitHub REST API for `yaronserlin`'s repos and falls back to an empty project
list if that API is unreachable or rate-limited.

### Run

```bash
npm run dev
```

## Available Scripts

<!-- AUTO-GENERATED:SCRIPTS -->
| Command | Description |
|---------|--------------|
| `npm run dev` | Start the Vite development server with hot module reload |
| `npm run build` | Production build, output to `dist/` |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Serve the production build from `dist/` locally |
| `npm test` | Run the Vitest suite once (jsdom environment) |
<!-- /AUTO-GENERATED:SCRIPTS -->

## Testing

- Test runner: [Vitest](https://vitest.dev/) with a `jsdom` environment (configured in
  [vite.config.js](../vite.config.js)).
- Run the full suite with `npm test`.
- Existing tests live next to the code they cover, e.g.
  [src/services/githubService.test.js](../src/services/githubService.test.js) and
  [src/utils/formValidation.test.js](../src/utils/formValidation.test.js).
- When adding a new hook, service, or utility with non-trivial logic, add a co-located
  `*.test.js`/`*.test.jsx` file following the same pattern.

## Code Style

- Linting is enforced via ESLint ([eslint.config.js](../eslint.config.js)), using the
  recommended JS rules plus `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`.
- Run `npm run lint` before submitting changes — there are no pre-commit hooks configured in
  this repo, so this step is manual.
- No Prettier or other formatter is configured; match the existing formatting style in the
  file you're editing.
- Components use JSDoc-style comments on exported functions/components (see
  [src/services/githubService.js](../src/services/githubService.js) for the convention).

## Pull Request Checklist

- [ ] `npm run lint` passes
- [ ] `npm test` passes
- [ ] New/changed logic has corresponding test coverage
- [ ] `.env`-dependent features (contact form) were manually verified if touched
- [ ] No secrets or `.env` values committed

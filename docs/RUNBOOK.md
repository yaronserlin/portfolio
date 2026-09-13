# Runbook

> **Scope note:** This is a static, client-only React/Vite site with no server, database, CI/CD
> config, or monitoring stack defined in this repository. This runbook reflects that — it does
> not invent infrastructure that doesn't exist. If a hosting platform (Vercel/Netlify/GitHub
> Pages/etc.) or CI pipeline is added later, update the relevant sections below.

## Deployment Procedure

1. Ensure `.env` is configured locally with valid EmailJS credentials (see
   [CONTRIBUTING.md](CONTRIBUTING.md#configure-environment-variables)) if you need to verify the
   contact form before deploying.
2. Install dependencies: `npm install`
3. Run the test suite and linter: `npm test && npm run lint`
4. Build the production bundle:
   ```bash
   npm run build
   ```
   This outputs static assets to `dist/`.
5. Deploy the contents of `dist/` to your static host of choice. There is no host-specific
   deploy script in this repo — upload/sync `dist/` per your hosting provider's process (e.g.
   drag-and-drop, `rsync`, or the provider's CLI/dashboard).
6. Spot-check the deployed site (see Health Checks below).

To verify the build locally before deploying:
```bash
npm run preview
```

## Health Checks / Monitoring

There is no automated health-check endpoint or monitoring configured — this is a static site.
Manual post-deploy checks:

- Home, About, Projects, and Contact routes load without console errors.
- Projects page successfully fetches from the GitHub REST API (`api.github.com/users/yaronserlin/repos`)
  — if it fails (rate limiting, network issues), the app should degrade to an empty project list,
  not crash. See `src/services/githubService.js`.
- Contact form submits successfully via EmailJS (requires valid `.env` values at build time,
  since Vite inlines `VITE_*` variables into the build).

## Common Issues and Fixes

| Symptom | Likely Cause | Fix |
|---|---|---|
| Contact form fails silently or errors on submit | Missing/incorrect `VITE_EMAILJS_*` env vars at build time | Re-check `.env`, rebuild — Vite bakes these in at build time, not runtime |
| No projects shown on Projects page | GitHub API rate limit (unauthenticated requests are capped) or network failure | Wait for the rate limit window to reset, or check the `sessionStorage` cache (`github-projects-cache-v1`, 10 min TTL) is being read correctly |
| Project missing demo image/video/gif | `checkMediaAvailability` in `githubService.js` only looks for `media/demo.{png,jpg,mp4,mov,webm,gif}` on that repo's default branch | Add a matching file under `media/` in the target repo |
| Stale project data after a GitHub change | 10-minute sessionStorage cache in `githubService.js` | Wait for TTL to expire, or clear sessionStorage in the browser |

## Rollback Procedure

Since there is no hosting/CI config in this repo:

1. Identify the last known-good commit: `git log --oneline`
2. Check out that commit (or revert the bad commit) in a clean branch.
3. Rebuild (`npm run build`) and redeploy `dist/` following the Deployment Procedure above.
4. If your static host keeps prior deploy artifacts/versions, use its own rollback/redeploy
   feature instead of rebuilding locally, if faster.

## Alerting and Escalation

None configured — there is no monitoring, uptime checking, or alerting set up for this project.
This is a personal portfolio site; if you add a hosting platform with built-in uptime
monitoring (Vercel/Netlify status, UptimeRobot, etc.), document the alert destination and
escalation contact here.

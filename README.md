# project-l — CV landing page

One-page CV site. Next.js (static export) + Tailwind, dark theme only, deployed to GitHub Pages.

- `npm run dev` — local dev server at http://localhost:3000
- `npm run build` — static site in `out/`
- Content: edit `src/content.ts` (TODO markers = still to fill in)
- Colors: CSS variables in `src/app/globals.css`

## Deploy
1. Push to a GitHub repo (`main` branch).
2. Repo Settings -> Pages -> Source: **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and publishes on every push; base path is set automatically.

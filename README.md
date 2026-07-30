# Productivity apps

Marketing site for Android productivity apps — discover apps and optionally donate.

**Live URL:**  
https://avinash-bitm.github.io/avinashapps/

## Local development

Requires **Node.js 22+** (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Add a new app

1. Add an entry in `src/data/apps.ts`
2. Optional assets under `public/apps/<slug>/`
3. Push to `main` — GitHub Actions rebuilds the site

## PayPal donation link

Set `paypalUrl` in `src/data/site.ts` to your PayPal.me (or donate) URL.

## Enable GitHub Pages

1. Push this repo to GitHub (`main` branch)
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. The `Deploy to GitHub Pages` workflow runs on every push to `main`

Astro is configured with:

- `site`: `https://avinash-bitm.github.io`
- `base`: `/avinashapps`

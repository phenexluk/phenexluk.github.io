# Phenex Luk — Personal Portfolio

A bilingual (English / 中文) personal portfolio for **Phenex Luk**, Lead Mobile Developer.

Live at: **https://phenexluk.github.io**

## Stack

- [Next.js 15](https://nextjs.org/) (static export)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- Deployed via GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en/`.

## Production preview

This project uses Next.js **static export** (`output: export`) for GitHub Pages, so `next start` is not supported.

```bash
npm run build
npm run start
```

Or build and preview in one step:

```bash
npm run preview
```

`start` serves the static `out/` folder at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are output to `out/`.

## Deploy to GitHub Pages

1. Push this repo to `phenexluk/phenexluk.github.io` (or enable GitHub Pages from the `out/` folder via Actions).
2. In repo **Settings → Pages**, set source to **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Customize

- **Content**: edit `src/lib/data.ts` (projects, experience, contact info, translations).
- **Styling**: edit `src/app/globals.css` (colors, animations).
- **LinkedIn URL**: update `siteConfig.linkedin` in `src/lib/data.ts` if needed.

## Structure

```
src/
├── app/
│   ├── [locale]/page.tsx   # Main portfolio page (en / zh)
│   ├── globals.css
│   └── layout.tsx
├── components/             # UI sections
└── lib/
    ├── data.ts             # Content & i18n strings
    └── i18n.ts
```

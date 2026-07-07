# Kosmos website

Marketing website for **Kosmos** — the generative AI operating system.

Standalone Vite + React site (landing page + Arco spec overview). The Kosmos app prototype lives in the [Kosmos](https://github.com/Kosmos-computer/Kosmos) repo.

## Develop

```bash
npm install
npm run dev
```

Runs on **http://localhost:5174**.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Connected to Vercel from the `Kosmos-computer/www` GitHub repo. Pushes to `main` deploy automatically.

## Structure

```
src/
├── brand/          # Kosmos logo mark (vendored from main repo)
├── wallpaper/      # Starfield preview effect
├── content/        # Site copy constants
├── components/     # Landing page sections
└── styles/         # Global tokens + shared utilities
index.html          # Kosmos landing
spec.html           # Arco design system spec overview
```

## Design reference

- [`docs/DESIGN-INSPIRATION.md`](./docs/DESIGN-INSPIRATION.md)
- [`docs/CONTENT-BRIEF.md`](./docs/CONTENT-BRIEF.md)

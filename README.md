# Prodesk IT — Landing Page (Sprint 01)

A fully responsive marketing landing page built with raw HTML, CSS (Flexbox + Grid),
and vanilla JavaScript — no UI frameworks, per Sprint 01 architecture constraints.

**Live URL:** _paste your Vercel/Netlify deployed link here_

![Screenshot of the deployed site](screenshot.png)
<!-- Take a screenshot of your deployed site, save it as screenshot.png in this repo, then this will render -->

## Features implemented

### Phase 1 — Base MVP
- Responsive navbar: logo left, links right, collapses into a hamburger menu on mobile.
- Hero section with headline, sub-headline, and primary "Get Started" CTA.
- Services section: 3 cards (Web Development, SEO Optimization, Digital Marketing) in a CSS Grid, collapsing to 1 column on mobile.
- Footer with copyright text and social icons.

### Phase 2 — UI/UX Enhancements
- Dark / Light mode toggle in the navbar (vanilla JS, toggles a `.dark` class on `<body>`, preference saved in `localStorage`).
- Hover micro-interactions on all CTA buttons (lift + scale).
- Service cards lift on hover (`translateY` + shadow).
- Sticky navbar (`position: sticky`) that stays fixed while scrolling.

### Phase 3 — Stretch (not yet done)
Not implemented in this submission. To attempt: migrate `style.css` to Tailwind utility
classes, run a Lighthouse audit and fix any Performance/Accessibility gaps, and add a
`backdrop-filter: blur()` glass effect to the sticky navbar.

## Tech stack
- HTML5
- CSS3 (Flexbox, Grid, custom properties — no framework)
- Vanilla JavaScript

## Project structure
```
├── index.html
├── style.css
├── script.js
├── README.md
└── Prompts.md
```

## Running locally
Just open `index.html` in a browser, or serve the folder with any static server:
```bash
npx serve .
```

## Deployment
Deployed to Vercel/Netlify (free tier). Drag-and-drop the folder onto Netlify's
dashboard, or run:
```bash
npx vercel
```

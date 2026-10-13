# Sohan Rajput — Portfolio

A responsive, dark-themed developer portfolio built with **React 19**, **Vite**, JSX, HTML and CSS.

## Features

- Light / dark theme toggle (remembers your choice)
- Sticky navigation with active-section highlighting, progress bar and a mobile menu
- Hero, skills marquee, About (stats + focus areas), filterable Skills and Projects, Experience timeline, Education + Certifications, and Contact
- Gentle scroll-reveal animations, back-to-top button, print styles
- Contact form with validation that opens the visitor's email app (no backend required)
- Keyboard-friendly: skip link, visible focus, ARIA labels
- Respects `prefers-reduced-motion`
- All text lives in one file, so updates never touch JSX

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build into /dist
npm run preview   # preview the production build
npm run lint      # check code quality
```

## Project structure

```
my-portfolio/
├── index.html              # page shell, SEO meta tags
├── public/favicon.svg
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # page layout
    ├── App.css             # all component styles
    ├── index.css           # base styles
    ├── data/portfolio.js   # ✏️  EDIT YOUR CONTENT HERE
    ├── hooks/ (useActiveSection, useTheme, useReveal)
    └── components/
        ├── Navbar.jsx  Hero.jsx  Marquee.jsx  About.jsx  Skills.jsx
        ├── Projects.jsx  Projectcard.jsx  Experience.jsx
        ├── Education.jsx  Contact.jsx  ScrollUI.jsx
```

## Customising

Open `src/data/portfolio.js` and update:

- `profile` — name, hero lines, status text, email, `resume` (put the PDF in `public/`)
- `experience`, `certifications` — replace the sample entries (empty list hides the section)
- `profile.socials` — add your GitHub and LinkedIn URLs (empty ones stay hidden)
- `projects[].links` — add `github` / `live` URLs to show buttons on a project card
- `skills`, `education`, `about` — change text freely

Colours and fonts are CSS variables at the top of `src/App.css` (`--accent`, `--background`, ...).

## Deploying

Run `npm run build` and upload the `dist` folder to Netlify, Vercel, GitHub Pages or Cloudflare Pages.

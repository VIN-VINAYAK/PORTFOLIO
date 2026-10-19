# Nainesh Kumar Gajre — 3D Glass Portfolio

React + TypeScript + Vite, with a three.js scene behind a glassmorphism UI.
Scroll flies the camera through a 3D neural-network tunnel; cards tilt in 3D; dark/light theme switcher.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Structure
```
index.html              fonts, favicon, no-flash theme init
public/favicon.svg
src/
  main.tsx              entry
  App.tsx               page composition
  data/content.ts       ALL text, links, projects, skills — edit content here
  components/
    Scene.tsx           three.js background (particles, core, per-section shapes, theme-aware)
    Navbar.tsx  Hero.tsx  Marquee.tsx  About.tsx  Projects.tsx  Skills.tsx  Contact.tsx
    Reveal.tsx          scroll-reveal wrapper      Chip.tsx   skill/tag pill
    Cursor.tsx          custom cursor ring         Chrome.tsx Loader + scroll progress bar
  hooks/
    useTheme.ts         dark/light, persisted in localStorage
    useTypewriter.ts    rotating role text
    usePointerEffects.ts  3D tilt + glare + magnetic buttons
  styles/               theme.css (tokens) · base · glass · ui · hero · sections · responsive
```

## Customize
- Colors / light & dark palettes: `src/styles/theme.css`
- Particle count, shapes, camera path: `src/components/Scene.tsx`
- Add a project or skill: append to `PROJECTS` / `SKILLS` in `src/data/content.ts`

## Deploy
Netlify / Vercel / Cloudflare Pages: build command `npm run build`, output directory `dist`.
For GitHub Pages under a sub-path, set `base` in `vite.config.ts` to `'/<repo-name>/'`.

# datagen-landing

[![Vite](https://img.shields.io/badge/vite-6.x-646cff?logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/typescript-5.7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

The marketing site for the [**datagen**](https://github.com/jircik/DataGen-Cli-Tool) CLI — a schema-driven tool for populating PostgreSQL and MongoDB with realistic fake data.

Static single-page site. Dark, terminal-inspired design. No framework, no SSR, no JavaScript bundle beyond a few KB.

> Live at [**datagen.jircik.dev**](http://datagen.jircik.dev).

---

## Stack

| | |
|---|---|
| Build tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Deploy target | Static host (Cloudflare Pages) |

---

## Local development

**Requires Node.js 18+**

```bash
npm install
npm run dev
```

Opens `http://localhost:5173` with HMR.

### Available scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start Vite dev server on port 5173 |
| `npm run build` | Type-check and build static output to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run `tsc --noEmit` only |

---

## Project Structure

```
datagen-landing/
├── public/
│   └── favicon.svg              # static assets — copied as-is
├── src/
│   ├── main.ts                  # entry — imports styles + initializes scripts
│   ├── styles/
│   │   └── main.css             # Tailwind directives + custom CSS layers
│   └── scripts/
│       ├── clipboard.ts         # data-copy buttons with "copied" feedback
│       └── nav.ts               # smooth anchor scroll with sticky-header offset
├── index.html                   # the page itself
├── tailwind.config.ts           # theme: brand + ink palettes, fonts, shadows
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## How interactivity works

The page is mostly static HTML. Two small TypeScript modules handle the dynamic bits.

### Copy-to-clipboard

Any element with a `data-copy="<text>"` attribute becomes a copy button — no inline JS, no per-button wiring.

```html
<button class="copy-btn" data-copy="npm install -g @jircik/datagen">copy</button>
```

The button flashes **"copied"** for 1.5s after a successful copy. See `src/scripts/clipboard.ts`.

### Smooth anchor scroll

`<a href="#section">` links scroll smoothly **with an 80px offset** so the sticky header doesn't cover the section heading. See `src/scripts/nav.ts`.

---

## Design system

Tailwind theme extensions live in `tailwind.config.ts`.

| Token | Purpose |
|---|---|
| `bg-ink-{500-950}` | Dark backgrounds, surfaces, borders |
| `text-brand-{50-700}` / `bg-brand-{50-700}` | Cyan accent color (CTAs, highlights) |
| `font-sans` → Inter | Body text and headings |
| `font-mono` → JetBrains Mono | Code, terminal output, metadata |
| `shadow-glow` | Soft cyan glow on primary CTAs |

Custom CSS components in `src/styles/main.css`:

| Class | What it does |
|---|---|
| `.grid-bg` | Radial cyan glow + faint 44px grid (hero background) |
| `.gradient-text` | Cyan gradient applied to heading words |
| `.terminal-window` | Terminal-style container (gradient + border) |
| `.glow-ring` | Cyan ring + soft shadow for emphasis |
| `.scrollbar-thin` | Slim horizontal scrollbar for code blocks |
| `.blink`, `.fade-in` | Hero cursor + section reveal (respects `prefers-reduced-motion`) |

---

## Deploy

### Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output | `dist` |
| Node version | `20` (set `NODE_VERSION=20` env var) |

Connect the GitHub repo in **Workers & Pages → Create → Pages → Connect to Git**. Every push to `main` deploys to production; PRs get preview URLs.

### Direct upload

```bash
npm run build
npx wrangler pages deploy dist --project-name=datagen-landing
```

### Anywhere else

The `dist/` output is fully static — drop it on any host (GitHub Pages, Vercel, Netlify, S3 + CloudFront, ...).

For project-page deploys served from a subpath (e.g. `user.github.io/datagen-landing/`), change `base: '/'` to `base: './'` in `vite.config.ts`.

---

## Sections

The page is a single `index.html` divided into these sections:

| Anchor | Content |
|---|---|
| Hero | Headline, CTA, install pill, animated terminal preview |
| Features | 6-card grid of datagen's core capabilities |
| `#install` | npm / pnpm / yarn install commands with copy buttons |
| `#how` | 3-step "Connect → Describe → Populate" walkthrough |
| `#commands` | Reference grid for every CLI command |
| `#schema` | Example YAML schemas (Postgres + MongoDB + inline) |
| `#claude` | Claude Code plugin showcase |
| `#faq` | 5 expandable questions |
| CTA | Final install block |
| Footer | Brand · copyright · links |

---

## License

MIT

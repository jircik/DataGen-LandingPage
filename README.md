# datagen-landing

Landing page for the [datagen](https://www.npmjs.com/package/@jircik/datagen) CLI.

Built with **Vite + TypeScript + Tailwind CSS**.

## Develop

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

Static output lands in `dist/`.

## Project structure

```
datagen-landing/
├── public/
│   └── favicon.svg              # static assets copied as-is
├── src/
│   ├── main.ts                  # entry — imports styles + initializes scripts
│   ├── styles/
│   │   └── main.css             # Tailwind directives + custom CSS layers
│   └── scripts/
│       ├── clipboard.ts         # [data-copy] copy-to-clipboard handlers
│       └── nav.ts               # smooth-scroll with sticky header offset
├── index.html                   # single-page markup
├── tailwind.config.ts           # Tailwind theme (brand + ink colors, fonts)
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## How interactivity works

- **Copy buttons** — any element with `data-copy="<text>"` becomes a clipboard button.
  See `src/scripts/clipboard.ts`.
- **Smooth anchor scrolling** — `<a href="#section">` links offset by the sticky header height.
  See `src/scripts/nav.ts`.

## Deploy

The build output in `dist/` is fully static — drop it on any host (GitHub Pages, Vercel,
Netlify, Cloudflare Pages, S3, ...).

For GitHub Pages on a project page (e.g. `user.github.io/datagen-landing/`), the relative
`base: './'` in `vite.config.ts` already handles asset paths correctly.

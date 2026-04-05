# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Project Overview

A personal portfolio/resume single-page application for Pranchai H, showcasing IT experience and work history. Deployed to GitHub Pages at `/myprofile`.

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS

## Development Commands

```bash
npm run dev       # Start local dev server with HMR (http://localhost:5173)
npm run build     # TypeScript type-check + Vite production build → dist/
npm run lint      # ESLint with zero-warnings policy (all warnings = errors)
npm run preview   # Preview the production build locally
```

Always run `npm run lint` and `npm run build` before committing — the CI pipeline runs both.

## Repository Structure

```
myprofile/
├── src/
│   ├── components/
│   │   ├── Avatar.tsx      # Profile image, name, and job title
│   │   ├── Personal.tsx    # "About Me" section
│   │   ├── Timeline.tsx    # Work experience list (data + rendering)
│   │   └── Task.tsx        # Unused stub component
│   ├── App.tsx             # Root layout — composes Avatar, Personal, Timeline
│   ├── App.css             # Gradient background animation + image sizing
│   ├── index.css           # Tailwind directives + global font (Sukhumvit Set)
│   ├── main.tsx            # React DOM entry point
│   └── vite-env.d.ts       # Vite client type shims
├── public/
│   └── vite.svg
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions: build → deploy to GitHub Pages
├── index.html              # HTML shell
├── vite.config.ts          # Vite config — base: "/myprofile"
├── tailwind.config.js      # Custom breakpoints (see below)
├── tsconfig.json           # Strict TypeScript config
├── tsconfig.node.json      # TypeScript config for Vite config file
├── .eslintrc.cjs           # ESLint config
└── postcss.config.js       # PostCSS (tailwindcss + autoprefixer)
```

## Key Conventions

### TypeScript

- **Strict mode is on.** `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true` — fix all type errors before committing.
- Target: ES2020, module resolution: bundler (via Vite).
- No `any` unless absolutely necessary.

### Styling

- **Tailwind CSS only** — avoid writing raw CSS unless it cannot be expressed in Tailwind (animations, custom fonts).
- Custom breakpoints replace Tailwind defaults entirely:

  | Name    | Min Width |
  |---------|-----------|
  | mobile  | 375px     |
  | tablet  | 640px     |
  | laptop  | 1024px    |
  | desktop | 1280px    |

  Use `mobile:`, `tablet:`, `laptop:`, `desktop:` — do **not** use the standard Tailwind `sm:`, `md:`, `lg:`, `xl:` prefixes as they are not configured.
- Global font: `Sukhumvit Set` with system font fallback.
- Gradient background animation is defined in `App.css` as `.gradient_bg` and applied at the root `<div>` in `App.tsx`.

### Components

- All components are functional React components with named exports (default export at the bottom).
- `Timeline.tsx` co-locates its data (`jobs_name` array) with the rendering logic — follow this pattern for simple data-driven components.
- `Task.tsx` is currently unused — do not reference or extend it until there is an explicit use case.

### Linting

- ESLint config: `eslint:recommended` + `@typescript-eslint/recommended` + `react-hooks/recommended`.
- `--max-warnings 0` means zero tolerance for warnings. All lint issues must be fixed before merging.

## CI/CD Pipeline

`.github/workflows/deploy.yml` — triggers on push to `main`:

1. **Build job**: Checkout → Node 16 → `npm install` → `npm run build` → upload `dist/` artifact.
2. **Deploy job**: Download artifact → deploy to GitHub Pages via `peaceiris/actions-gh-pages@v3`.

**Important:** `vite.config.ts` sets `base: "/myprofile"` so all asset paths are relative to that sub-path. Do not remove this setting — it is required for GitHub Pages to serve assets correctly.

## Branching Strategy

- `main` — production branch, triggers automatic deployment to GitHub Pages on push.
- `dev` — development integration branch (merge features here first).
- Feature/fix work should be done on separate branches and merged into `dev`, then `dev` into `main`.

## No Tests

There is no test framework installed. If adding tests, Vitest is the natural choice given the Vite setup (`npm install -D vitest @testing-library/react @testing-library/user-event`).

## Adding Work Experience

Work experience entries live as a plain array at the top of `src/components/Timeline.tsx`. Each entry has:

```ts
{
  name: string;      // Company name and location
  jobdetail: string; // Role description
  position: string;  // Job title
  year: string;      // e.g. "2023 – Present"
}
```

Add new entries to the `jobs_name` array — no other changes required.

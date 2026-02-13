# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a promotional/marketing website for [Kickoff](https://github.com/cleaniquecoders/kickoff) — a Composer package that bootstraps Laravel projects with production-ready tooling (Livewire, Pest, PHPStan, Rector, GitHub Actions, admin dashboard, roles/permissions, and more).

The site is built on the **Oatmeal** Tailwind Plus SaaS Marketing Kit using **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint (core-web-vitals + typescript)
```

## Architecture

### Project structure

```
├── src/
│   ├── app/             # Next.js app router pages and layout
│   └── components/      # Reusable UI components
│       ├── elements/    # Primitive UI components (Button, Link, Container, etc.)
│       ├── icons/       # SVG icon components (100+)
│       └── sections/    # Full page sections (Hero, Pricing, FAQs, etc.)
├── public/              # Static assets (images)
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── postcss.config.mjs
```

### Component patterns

- **Elements** (`src/components/elements/`): Primitive UI components — Button, Link, Container, Heading, Text, Screenshot, EmailSignupForm, InstallCommand, etc. Each exports typed React components using `ComponentProps<>` patterns.
- **Sections** (`src/components/sections/`): Full page sections — Hero variants, Features, Pricing, FAQs, Testimonials, Stats, Footer, Navbar, CTA, Team, Document. Each section accepts content via props (headline, subheadline, cta, etc.) as ReactNode.
- **Icons** (`src/components/icons/`): ~100+ SVG icon components. Social icons live in `icons/social/`.

### Key conventions

- Components use `clsx/lite` for conditional class merging
- Dark mode support via `dark:` / `not-dark:` Tailwind variants throughout
- Custom color palette: `mist-50` through `mist-950` (defined in `src/app/globals.css`)
- Fonts: Mona Sans (display) and Inter (sans) loaded from Google Fonts
- `@/*` path alias resolves to `./src/*` (configured in tsconfig.json)
- Prettier configured with `prettier-plugin-organize-imports` and `prettier-plugin-tailwindcss`

### App structure

- `src/app/layout.tsx` — Root layout with shared Navbar and Footer
- `src/app/page.tsx` — Home page (sections only, no navbar/footer)
- `src/app/{about,pricing,privacy-policy,404}/page.tsx` — Additional pages
- `src/app/globals.css` — Tailwind imports + custom theme

## Adapting for Kickoff promotion

When modifying content, replace the "Oatmeal" placeholder branding with Kickoff-specific content:
- Product name: **Kickoff**
- Tagline: Focus on Laravel project bootstrapping / rapid setup
- Key features: Livewire + Pest setup, PHPStan/Rector, GitHub Actions CI, admin dashboard, roles & permissions, deployment scripts
- Install command: `composer global require cleaniquecoders/kickoff` then `kickoff start <owner> <project-name>`
- GitHub: https://github.com/cleaniquecoders/kickoff

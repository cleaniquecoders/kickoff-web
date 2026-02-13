# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a promotional/marketing website for [Kickoff](https://github.com/cleaniquecoders/kickoff) — a Composer package that bootstraps Laravel projects with production-ready tooling (Livewire, Pest, PHPStan, Rector, GitHub Actions, admin dashboard, roles/permissions, and more).

The site is built on the **Oatmeal** Tailwind Plus SaaS Marketing Kit using **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

## Development (demo app)

The runnable Next.js app lives in `demo/`:

```bash
cd demo
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint (core-web-vitals + typescript)
```

## Architecture

### Two-layer structure

- **`components/`** — The reusable component library (template source). Contains `elements/`, `icons/`, and `sections/` subdirectories. These are framework-agnostic React components using `clsx` and `@tailwindplus/elements`.
- **`demo/`** — A full Next.js app that imports from `components/` via the `@/*` path alias (resolves to `demo/src/*`). The demo app has its own copy of all components under `demo/src/components/`.
- **`pages/`** — Standalone full-page examples (home-01..03, about-01..03, pricing-01..03, 404-01..02, privacy-policy-01..02). These are complete page compositions showing different layout variants. They include navbar, main content, and footer inline.

### Component patterns

- **Elements** (`components/elements/`): Primitive UI components — Button, Link, Container, Heading, Text, Screenshot, EmailSignupForm, InstallCommand, etc. Each exports typed React components using `ComponentProps<>` patterns.
- **Sections** (`components/sections/`): Full page sections — Hero variants, Features, Pricing, FAQs, Testimonials, Stats, Footer, Navbar, CTA, Team, Document. Each section accepts content via props (headline, subheadline, cta, etc.) as ReactNode.
- **Icons** (`components/icons/`): ~100+ SVG icon components. Social icons live in `icons/social/`.

### Key conventions

- Components use `clsx/lite` for conditional class merging
- Dark mode support via `dark:` / `not-dark:` Tailwind variants throughout
- Custom color palette: `mist-50` through `mist-950` (defined in `tailwind.css`)
- Fonts: Mona Sans (display) and Inter (sans) loaded from Google Fonts
- All link components use `<a>` tags — replace with Next.js `Link` or framework equivalent for SPA navigation
- `pages/` files are self-contained (include Navbar + Main + Footer); `demo/src/app/page.tsx` pages rely on layout for shared chrome

### Demo app structure

- `demo/src/app/layout.tsx` — Root layout with shared Navbar and Footer
- `demo/src/app/page.tsx` — Home page (sections only, no navbar/footer)
- `demo/src/app/{about,pricing,privacy-policy,404}/page.tsx` — Additional pages
- `demo/src/app/globals.css` — Tailwind imports + custom theme
- Prettier configured with `prettier-plugin-organize-imports` and `prettier-plugin-tailwindcss`

## Adapting for Kickoff promotion

When modifying content, replace the "Oatmeal" placeholder branding with Kickoff-specific content:
- Product name: **Kickoff**
- Tagline: Focus on Laravel project bootstrapping / rapid setup
- Key features: Livewire + Pest setup, PHPStan/Rector, GitHub Actions CI, admin dashboard, roles & permissions, deployment scripts
- Install command: `composer global require cleaniquecoders/kickoff` then `kickoff start <owner> <project-name>`
- GitHub: https://github.com/cleaniquecoders/kickoff

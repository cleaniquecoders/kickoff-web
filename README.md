# Kickoff — Marketing Website

Marketing and promotional website for [Kickoff](https://github.com/cleaniquecoders/kickoff), a Composer package that bootstraps Laravel projects with production-ready tooling.

Built with [Next.js](https://nextjs.org) 16, [React](https://react.dev) 19, [Tailwind CSS](https://tailwindcss.com) v4, and [Tailwind Plus Elements](https://tailwindcss.com/plus/ui-blocks/documentation/elements).

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── src/
│   ├── app/             # Next.js app router pages and layout
│   └── components/      # Reusable UI components
│       ├── elements/    # Primitive UI components (Button, Link, Container, etc.)
│       ├── icons/       # SVG icon components (100+)
│       └── sections/    # Full page sections (Hero, Pricing, FAQs, etc.)
├── public/              # Static assets (images, etc.)
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── postcss.config.mjs
```

## About Kickoff

Kickoff automates the setup of new Laravel projects with:

- **Livewire, Pest & Git** — Fresh Laravel install with essential integrations
- **Code Quality** — PHPStan, Rector, and Laravel Debugbar pre-configured
- **CI/CD** — GitHub Actions workflows for automated testing and analysis
- **Admin Dashboard** — User stats, role/permission management, app settings
- **Deployment Scripts** — Executable bin scripts for deploy, backup, and database ops
- **Community Files** — Contributing guidelines, security policy, changelog templates

### Install Kickoff

```bash
composer global require cleaniquecoders/kickoff
composer global require laravel/installer
kickoff start <owner> <project-name>
```

Learn more at [github.com/cleaniquecoders/kickoff](https://github.com/cleaniquecoders/kickoff).

## License

This site template is based on the Oatmeal SaaS Marketing Kit, a commercial product licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

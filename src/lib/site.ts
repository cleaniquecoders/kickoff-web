/** Central site configuration — override via environment variables. */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kickoff.cleaniquecoders.com',
  name: 'Kickoff',
  title: 'Kickoff — Zero to production-ready Laravel',
  description:
    'Kickoff bootstraps Laravel projects with Livewire, Pest, PHPStan, Rector, GitHub Actions, admin dashboard, roles & permissions, and deployment scripts.',
  github: 'https://github.com/cleaniquecoders/kickoff',
  packagist: 'https://packagist.org/packages/cleaniquecoders/kickoff',
}

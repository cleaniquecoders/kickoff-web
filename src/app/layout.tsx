import { ButtonLink } from '@/components/elements/button'
import { GoogleAnalytics } from '@/components/elements/google-analytics'
import { Main } from '@/components/elements/main'
import { ThemeToggle } from '@/components/elements/theme-toggle'
import { site } from '@/lib/site'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
  SocialLink,
} from '@/components/sections/footer-with-links-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndLeftAlignedLinks,
} from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: '%s · Kickoff',
  },
  description: site.description,
  keywords: [
    'Laravel',
    'Laravel starter kit',
    'Laravel boilerplate',
    'Laravel scaffolding',
    'Livewire',
    'Pest',
    'PHPStan',
    'Rector',
    'admin dashboard',
    'CleaniqueCoders',
  ],
  authors: [{ name: 'CleaniqueCoders', url: 'https://github.com/cleaniquecoders' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#d92616',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: site.name,
  description: site.description,
  url: site.url,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Cross-platform',
  license: 'https://opensource.org/licenses/MIT',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'CleaniqueCoders', url: 'https://github.com/cleaniquecoders' },
  sameAs: [site.github, site.packagist],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Restore the persisted theme before first paint (default: light)
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('kickoff-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@300..800&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <GoogleAnalytics />
        <>
          <NavbarWithLogoActionsAndLeftAlignedLinks
            id="navbar"
            links={
              <>
                <NavbarLink href="#features">features</NavbarLink>
                <NavbarLink href="#screenshots">screenshots</NavbarLink>
                <NavbarLink href="#install">install</NavbarLink>
                <NavbarLink href="#faq">faq</NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/" className="items-center gap-2">
                <span
                  className="flex size-6 items-center justify-center rounded-sm bg-flame-600 font-mono text-sm font-bold text-white select-none"
                  aria-hidden="true"
                >
                  K
                </span>
                <span className="font-mono text-base/7 font-semibold tracking-tight text-ink-900 dark:text-bone-100">
                  kickoff
                  <span className="term-caret text-flame-600 dark:text-flame-400" aria-hidden="true">
                    _
                  </span>
                </span>
              </NavbarLogo>
            }
            actions={
              <>
                <ThemeToggle />
                <ButtonLink href="https://github.com/cleaniquecoders/kickoff">
                  <GitHubIcon className="size-4" />
                  GitHub
                </ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithLinksAndSocialIcons
            id="footer"
            links={
              <>
                <FooterLink href="https://github.com/cleaniquecoders/kickoff">GitHub</FooterLink>
                <FooterLink href="https://github.com/cleaniquecoders/kickoff#readme">Documentation</FooterLink>
                <FooterLink href="https://packagist.org/packages/cleaniquecoders/kickoff">Packagist</FooterLink>
              </>
            }
            socialLinks={
              <SocialLink href="https://github.com/cleaniquecoders/kickoff" name="GitHub">
                <GitHubIcon />
              </SocialLink>
            }
            fineprint="© 2025 CleaniqueCoders · Kickoff is open-source software · MIT license"
          />
        </>
      </body>
    </html>
  )
}

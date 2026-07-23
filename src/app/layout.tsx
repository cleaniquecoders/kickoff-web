import { ButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { ThemeToggle } from '@/components/elements/theme-toggle'
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
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kickoff — Zero to production-ready Laravel',
  description:
    'Kickoff bootstraps Laravel projects with Livewire, Pest, PHPStan, Rector, GitHub Actions, admin dashboard, roles & permissions, and deployment scripts.',
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

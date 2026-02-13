import { ButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
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
  title: 'Kickoff — Bootstrap Laravel Projects',
  description:
    'Kickoff bootstraps Laravel projects with Livewire, Pest, PHPStan, Rector, GitHub Actions, admin dashboard, roles & permissions, and deployment scripts.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wdth,wght@0,112.5,200..900;1,112.5,200..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <NavbarWithLogoActionsAndLeftAlignedLinks
            id="navbar"
            links={
              <>
                <NavbarLink href="#features">Features</NavbarLink>
                <NavbarLink href="#screenshots">Screenshots</NavbarLink>
                <NavbarLink href="#faq">FAQ</NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <span className="text-xl font-bold tracking-tight text-mist-950 dark:text-white">Kickoff</span>
              </NavbarLogo>
            }
            actions={
              <ButtonLink href="https://github.com/cleaniquecoders/kickoff">
                <GitHubIcon className="size-4" />
                GitHub
              </ButtonLink>
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
            fineprint="© 2025 CleaniqueCoders. Kickoff is open-source software."
          />
        </>
      </body>
    </html>
  )
}

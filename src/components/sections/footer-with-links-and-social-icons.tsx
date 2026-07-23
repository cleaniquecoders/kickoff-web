import Link from 'next/link'

import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function FooterLink({ href, className, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <li
      className={clsx(
        'font-mono text-ink-600 hover:text-flame-600 dark:text-bone-500 dark:hover:text-flame-400',
        className,
      )}
    >
      <Link href={href} {...props} />
    </li>
  )
}

export function SocialLink({
  href,
  name,
  className,
  ...props
}: {
  href: string
  name: string
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={name}
      className={clsx(
        'text-ink-900 *:size-6 hover:text-flame-600 dark:text-bone-100 dark:hover:text-flame-400',
        className,
      )}
      {...props}
    />
  )
}

export function FooterWithLinksAndSocialIcons({
  links,
  socialLinks,
  fineprint,
  className,
  ...props
}: {
  links: ReactNode
  socialLinks?: ReactNode
  fineprint: ReactNode
} & ComponentProps<'footer'>) {
  return (
    <footer className={clsx('pt-16', className)} {...props}>
      <div className="border-t border-bone-200 bg-white/40 py-16 text-ink-900 dark:border-ink-800 dark:bg-ink-900/40 dark:text-bone-100">
        <Container className="flex flex-col gap-10 text-center text-sm/7">
          <div className="flex flex-col gap-6">
            <nav>
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">{links}</ul>
            </nav>
            {socialLinks && <div className="flex items-center justify-center gap-10">{socialLinks}</div>}
          </div>
          <div className="font-mono text-xs/6 text-ink-500 dark:text-bone-500">{fineprint}</div>
        </Container>
      </div>
    </footer>
  )
}

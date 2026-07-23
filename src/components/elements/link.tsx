import NextLink from 'next/link'

import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Link({
  href,
  className,
  ...props
}: {
  href: string
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <NextLink
      href={href}
      className={clsx(
        'inline-flex items-center gap-2 font-mono text-sm/7 font-medium text-ink-900 hover:text-flame-600 dark:text-bone-100 dark:hover:text-flame-400',
        className,
      )}
      {...props}
    />
  )
}

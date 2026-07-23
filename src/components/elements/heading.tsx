import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Heading({
  children,
  color = 'dark/light',
  className,
  ...props
}: { color?: 'dark/light' | 'light' } & ComponentProps<'h1'>) {
  return (
    <h1
      className={clsx(
        'font-display text-[1.75rem]/9 font-semibold tracking-tight text-balance sm:text-4xl/12 lg:text-[2.5rem]/13',
        color === 'dark/light' && 'text-ink-900 dark:text-bone-100',
        color === 'light' && 'text-white',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

import { clsx } from 'clsx/lite'
import { type ComponentProps } from 'react'

export function Subheading({ children, className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={clsx(
        'font-display text-xl/8 font-semibold tracking-tight text-pretty text-ink-900 sm:text-2xl/9 dark:text-bone-100',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

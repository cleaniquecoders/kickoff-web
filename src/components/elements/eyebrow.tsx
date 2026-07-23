import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Eyebrow({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={clsx('font-mono text-sm/7 text-flame-600 dark:text-flame-400', className)} {...props}>
      {children}
    </div>
  )
}

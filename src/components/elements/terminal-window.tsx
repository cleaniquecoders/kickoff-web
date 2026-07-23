import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'

/**
 * A terminal window chrome: traffic-light dots, a mono title bar, and a dark
 * body. Terminals stay dark in both color schemes — like code blocks do.
 */
export function TerminalWindow({
  title,
  glow = false,
  children,
  className,
  bodyClassName,
  ...props
}: {
  title?: ReactNode
  glow?: boolean
  bodyClassName?: string
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-lg border border-ink-700 bg-ink-950 shadow-lg shadow-ink-900/10 dark:shadow-none',
        glow && 'dark:shadow-[0_0_60px_-12px] dark:shadow-flame-500/25',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 border-b border-ink-700/60 bg-ink-900 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#f5655b]/80" />
          <span className="size-2.5 rounded-full bg-[#f6bd3b]/80" />
          <span className="size-2.5 rounded-full bg-[#43c645]/80" />
        </div>
        {title && (
          <div className="flex-1 text-center font-mono text-xs/5 text-bone-500 select-none">{title}</div>
        )}
        {/* Balance the dots so the title stays centered */}
        {title && <div className="w-[46px]" aria-hidden="true" />}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  )
}

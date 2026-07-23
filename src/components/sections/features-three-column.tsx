import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'

export function Feature({
  icon,
  headline,
  subheadline,
  className,
  ...props
}: {
  icon?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2 rounded-md border border-bone-200 bg-white/60 p-5 text-sm/7 transition-colors hover:border-flame-500/50 dark:border-ink-800 dark:bg-ink-900/50 dark:hover:border-flame-400/40',
        className,
      )}
      {...props}
    >
      <div className="flex items-start gap-2.5 text-ink-900 dark:text-bone-100">
        <span className="font-mono text-flame-600 select-none dark:text-flame-400" aria-hidden="true">
          ✓
        </span>
        {icon && <div className="flex size-3.25 h-lh items-center">{icon}</div>}
        <h3 className="font-mono font-semibold">{headline}</h3>
      </div>
      <div className="flex flex-col gap-4 text-ink-600 dark:text-bone-500">{subheadline}</div>
    </div>
  )
}

export function FeaturesThreeColumn({
  features,
  ...props
}: {
  demo?: ReactNode
  features: ReactNode
} & Omit<ComponentProps<typeof Section>, 'children'>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{features}</div>
    </Section>
  )
}

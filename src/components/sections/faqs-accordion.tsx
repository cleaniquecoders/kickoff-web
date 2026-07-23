import { clsx } from 'clsx/lite'
import { type ComponentProps, type ReactNode, useId } from 'react'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'

export function Faq({
  id,
  question,
  answer,
  ...props
}: { question: ReactNode; answer: ReactNode } & Omit<ComponentProps<'details'>, 'children'>) {
  const autoId = useId()
  id = id || autoId

  return (
    <details id={id} className="faq-item group" {...props}>
      <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-6 py-4 text-left text-base/7 font-medium text-ink-900 select-none hover:text-flame-600 [&::-webkit-details-marker]:hidden dark:text-bone-100 dark:hover:text-flame-400">
        {question}
        <span
          className="shrink-0 font-mono text-lg/7 font-bold text-flame-600 dark:text-flame-400"
          aria-hidden="true"
        >
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      {/* Expand/collapse animation lives in globals.css (details.faq-item) */}
      <div className="flex flex-col gap-2 pr-12 pb-4 text-sm/7 text-ink-600 dark:text-bone-500">{answer}</div>
    </details>
  )
}

export function FAQsAccordion({
  headline,
  subheadline,
  eyebrow,
  className,
  children,
  ...props
}: {
  headline?: ReactNode
  subheadline?: ReactNode
  eyebrow?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 lg:max-w-5xl lg:px-10">
        <div className="flex flex-col gap-2">
          {eyebrow}
          <Subheading>{headline}</Subheading>
          {subheadline && <Text className="flex flex-col gap-4 text-pretty">{subheadline}</Text>}
        </div>
        <div className="divide-y divide-bone-200 border-y border-bone-200 dark:divide-ink-800 dark:border-ink-800">
          {children}
        </div>
      </div>
    </section>
  )
}

import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Heading } from '../elements/heading'
import { TerminalWindow } from '../elements/terminal-window'
import { Text } from '../elements/text'

function SessionLine({ delay, children }: { delay: number; children: ReactNode }) {
  return (
    <div className="term-line" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

/**
 * The signature element: a terminal session that types out a `kickoff start`
 * run on page load. Respects prefers-reduced-motion (renders complete).
 */
function TerminalSession() {
  const output = [
    'Laravel 13 installed',
    'Livewire 4 + Flux wired',
    'Pest + arch tests configured',
    'PHPStan · Rector · Pint ready',
    'Admin dashboard, roles & permissions',
    'GitHub Actions CI configured',
  ]

  return (
    <TerminalWindow glow title="~/projects" bodyClassName="p-4 sm:p-6">
      <div className="flex flex-col gap-1.5 font-mono text-xs/6 text-bone-300 sm:text-sm/7">
        <div>
          <span className="text-flame-400 select-none">~ $ </span>
          <span className="term-typed">kickoff start cleaniquecoders my-app</span>
        </div>
        {output.map((line, i) => (
          <SessionLine key={line} delay={2.5 + i * 0.25}>
            <span className="pl-4 text-term-green select-none">✓ </span>
            {line}
          </SessionLine>
        ))}
        <SessionLine delay={4.2}>
          <span className="text-flame-400">→ my-app is ready. Start building.</span>
          <span className="term-caret text-flame-400" aria-hidden="true">
            ▊
          </span>
        </SessionLine>
      </div>
    </TerminalWindow>
  )
}

export function HeroTerminal({
  eyebrow,
  headline,
  subheadline,
  cta,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline?: ReactNode
  cta?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className="py-16 sm:py-24" {...props}>
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading>{headline}</Heading>
          {subheadline && <Text size="lg">{subheadline}</Text>}
          {cta}
        </div>
        <TerminalSession />
      </Container>
    </section>
  )
}

import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'

export function CallToActionSimpleCentered({
  eyebrow,
  headline,
  subheadline,
  cta,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline?: ReactNode
  cta?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          {eyebrow && <Eyebrow className="text-center">{eyebrow}</Eyebrow>}
          <Subheading className="max-w-4xl text-center">{headline}</Subheading>
          {subheadline && (
            <Text className="mt-4 flex max-w-3xl flex-col gap-4 text-center text-pretty">{subheadline}</Text>
          )}
        </div>
        {cta}
      </Container>
    </section>
  )
}

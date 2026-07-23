import Link from 'next/link'

import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

const sizes = {
  md: 'px-3 py-1',
  lg: 'px-4 py-2',
}

const base = 'inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-mono text-sm/7 font-medium'

const colors = {
  'dark/light': 'bg-flame-600 text-white hover:bg-flame-500',
  light: 'bg-white text-ink-950 hover:bg-bone-50',
}

export function Button({
  size = 'md',
  type = 'button',
  color = 'dark/light',
  className,
  ...props
}: {
  size?: keyof typeof sizes
  color?: keyof typeof colors
} & ComponentProps<'button'>) {
  return <button type={type} className={clsx(base, colors[color], sizes[size], className)} {...props} />
}

export function ButtonLink({
  size = 'md',
  color = 'dark/light',
  className,
  href,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
  color?: keyof typeof colors
} & Omit<ComponentProps<'a'>, 'href'>) {
  return <Link href={href} className={clsx(base, colors[color], sizes[size], className)} {...props} />
}

const soft =
  'border border-bone-200 bg-white/60 text-ink-900 hover:bg-white dark:border-ink-700 dark:bg-ink-900/60 dark:text-bone-100 dark:hover:border-ink-600 dark:hover:bg-ink-800'

export function SoftButton({
  size = 'md',
  type = 'button',
  className,
  ...props
}: {
  size?: keyof typeof sizes
} & ComponentProps<'button'>) {
  return <button type={type} className={clsx(base, soft, sizes[size], className)} {...props} />
}

export function SoftButtonLink({
  size = 'md',
  href,
  className,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
} & Omit<ComponentProps<'a'>, 'href'>) {
  return <Link href={href} className={clsx(base, soft, sizes[size], className)} {...props} />
}

const plainColors = {
  'dark/light':
    'text-ink-900 hover:bg-ink-900/5 hover:text-flame-600 dark:text-bone-100 dark:hover:bg-bone-100/10 dark:hover:text-flame-400',
  light: 'text-white hover:bg-white/15',
}

export function PlainButton({
  size = 'md',
  color = 'dark/light',
  type = 'button',
  className,
  ...props
}: {
  size?: keyof typeof sizes
  color?: keyof typeof plainColors
} & ComponentProps<'button'>) {
  return <button type={type} className={clsx(base, plainColors[color], sizes[size], className)} {...props} />
}

export function PlainButtonLink({
  size = 'md',
  color = 'dark/light',
  href,
  className,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
  color?: keyof typeof plainColors
} & Omit<ComponentProps<'a'>, 'href'>) {
  return <Link href={href} className={clsx(base, plainColors[color], sizes[size], className)} {...props} />
}

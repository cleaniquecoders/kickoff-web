import { ElCopyable } from '@tailwindplus/elements/react'
import { clsx } from 'clsx/lite'
import { useId, type ComponentProps, type ReactNode } from 'react'
import { CheckmarkIcon } from '../icons/checkmark-icon'
import { Squares2StackedIcon } from '../icons/squares-2-stacked-icon'

export function InstallCommand({
  snippet,
  variant = 'normal',
  className,
  ...props
}: {
  snippet: ReactNode
  variant?: 'normal' | 'terminal'
} & ComponentProps<'div'>) {
  const id = useId()

  return (
    <div
      className={clsx(
        'flex items-center justify-between gap-6 font-mono text-sm/7',
        variant === 'normal' &&
          'rounded-md border border-bone-200 bg-white p-1 text-ink-600 dark:border-ink-700 dark:bg-ink-900 dark:text-bone-300',
        // The terminal variant sits inside an always-dark TerminalWindow
        variant === 'terminal' && 'text-bone-300',
        className,
      )}
      {...props}
    >
      <div className="flex min-w-0 items-center gap-2 pl-3">
        <div
          className={clsx(
            'select-none',
            variant === 'normal' && 'text-flame-600 dark:text-flame-400',
            variant === 'terminal' && 'text-flame-400',
          )}
        >
          $
        </div>
        <ElCopyable id={id} className="truncate">
          {snippet}
        </ElCopyable>
      </div>
      <button
        command="--copy"
        commandfor={id}
        type="button"
        aria-label="Copy command"
        className={clsx(
          'group relative flex size-9 shrink-0 items-center justify-center rounded-md after:absolute after:-inset-1 after:pointer-fine:hidden',
          variant === 'normal' &&
            'hover:bg-ink-900/5 hover:text-flame-600 dark:hover:bg-bone-100/10 dark:hover:text-flame-400',
          variant === 'terminal' && 'hover:bg-bone-100/10 hover:text-flame-400',
        )}
      >
        <Squares2StackedIcon className="group-data-copied:hidden" />
        <CheckmarkIcon className="text-term-green not-group-data-copied:hidden" />
      </button>
    </div>
  )
}

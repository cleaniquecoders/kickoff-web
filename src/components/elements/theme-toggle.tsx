'use client'

/**
 * Light/dark toggle. Light is the default; the choice persists in
 * localStorage and is restored before paint by an inline script in layout.tsx.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement
    const isDark = root.classList.toggle('dark')
    try {
      localStorage.setItem('kickoff-theme', isDark ? 'dark' : 'light')
    } catch {
      // localStorage unavailable (private mode) — theme still toggles for this page
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex rounded-md p-1.5 text-ink-700 hover:bg-ink-900/5 hover:text-flame-600 dark:text-bone-300 dark:hover:bg-bone-100/10 dark:hover:text-flame-400"
    >
      {/* Moon — shown in light mode */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 dark:hidden"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
      {/* Sun — shown in dark mode */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className="hidden size-5 dark:block"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    </button>
  )
}

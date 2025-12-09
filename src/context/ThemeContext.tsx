import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const readStoredTheme = (): Theme | null => {
  try {
    const raw = localStorage.getItem('theme')
    if (raw === 'light' || raw === 'dark') return raw
    return null
  } catch {
    return null
  }
}

const systemPrefersDark = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Apply 'dark' class to document.documentElement.
 * Keep this small and synchronous for responsiveness.
 */
const applyHtmlClass = (theme: Theme) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // initial state: stored theme -> system preference -> light
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = readStoredTheme()
    if (stored) return stored
    return systemPrefersDark() ? 'dark' : 'light'
  })

  // apply immediately on mount (in case initial state was wrong in SSR)
  useEffect(() => {
    applyHtmlClass(theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    // apply immediately (optimistic)
    applyHtmlClass(t)
    try {
      localStorage.setItem('theme', t)
    } catch {}
  }

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return ctx
}

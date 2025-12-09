import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/Logo.png'
import ThemeToggle from './ThemeToggle'

type NavItem = {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Benefits', to: '/benefits' },
  { label: 'Our Classes', to: '/our-classes' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Sticky navbar shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'shadow-xl bg-white/70 dark:bg-black/40' : 'bg-white/40 dark:bg-'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-700 flex items-center justify-center text-white text-lg font-bold shadow-[0_0_15px_4px_rgba(255,178,36,0.6)]  shadow-amber-500/40">
              EG
            </div>
            <span className="hidden sm:block text-lg tracking-wider text-amber-600 dark:text-amber-400">EVO GYM</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Glow Sign In */}
            <NavLink
              to="/login"
              className="relative inline-flex items-center px-4 py-2  font-semibold rounded-lg border-2 border-amber-500 text-amber-600   dark:text-amber-500 hover:shadow-[0_0_15px_4px_rgba(255,178,36,0.6)] transition-all"
            >
              Sign In
            </NavLink>

            {/* Theme Toggle */}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {open ? <XMarkIcon className="h-6 w-6 dark:text-gray-200" /> : <Bars3Icon className="h-6 w-6 dark:text-gray-200" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-3 pb-4 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {/* Mobile Sign In Button */}
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block mt-2 px-3 py-2 rounded-md text-base font-semibold border border-amber-500 text-amber-600 dark:text-amber-400 hover:shadow-[0_0_12px_3px_rgba(255,178,36,0.5)] transition-all"
                >
                  Sign In
                </NavLink>

                {/* Mobile Theme Toggle */}
                {/* <div className="px-3 pt-3">
                  <ThemeToggle />
                </div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

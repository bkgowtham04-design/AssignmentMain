import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Dashboard', to: '/' },
  { name: 'Assignments', to: '/task' },
  { name: 'Profile', to: '/profile' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-zinc-100 sticky top-0 z-50">
      <div className="w-full px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <span className="text-lg font-bold tracking-tight text-zinc-900">Gowtham.B</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-1 py-5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`
                }
              >
                {l.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-500 hover:text-zinc-900 focus:outline-none"
            >
              {open ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-100">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-zinc-50 text-zinc-900 font-semibold' : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                  }`
                }
              >
                {l.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
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
    <header className="bg-white/80 backdrop-blur-md border-b border-violet-100 sticky top-0 z-50 shadow-sm shadow-violet-500/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-violet-500/25">
                GB
              </span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent tracking-tight">
                Gowtham.B
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md shadow-indigo-500/20'
                      : 'text-zinc-600 hover:text-violet-600 hover:bg-violet-50'
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
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-500 hover:text-violet-600 hover:bg-violet-50 focus:outline-none"
            >
              {open ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-violet-100">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-base font-semibold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md' 
                      : 'text-zinc-700 hover:bg-violet-50 hover:text-violet-600'
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
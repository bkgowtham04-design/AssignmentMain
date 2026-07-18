import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
      <Link to="/day24" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
        Home
      </Link>
      <Link to="/day24/about" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
        About
      </Link>
      <Link to="/day24/contact" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
        Contact
      </Link>
      <Link to="/day24/profile" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
        Profile
      </Link>
    </nav>
  )
}

export default Navbar
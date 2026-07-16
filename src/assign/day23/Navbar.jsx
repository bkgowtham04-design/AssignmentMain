import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counterre from './Counterre'
import Todora from './Todora'

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day23/counter" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>

        <Link to="/day23/todo" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>
      </nav>

      <Routes>
        <Route path="" element={<Counterre />} />
        <Route path="counter" element={<Counterre />} />
        <Route path="todo" element={<Todora />} />
      </Routes>
    </>
  )
}

export default Navbar

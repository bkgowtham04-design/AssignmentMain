import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './Register'


const Navbart = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link 
          to="/day10/red" 
          className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
        >
          TASK 1
        </Link>
      </nav>

      <Routes>
        <Route path="red" element={<Register/>} />
      </Routes>
    </>
  )
}

export default Navbart
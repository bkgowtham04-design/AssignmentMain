import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Usememo from './Usememo'
import Shoping from './Shoping'

const Navbarmemo = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day21/usememo" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>
         <Link to="/day21/shop" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>
      </nav>

      <Routes>
        <Route path="" element={<Usememo />} />
        <Route path="usememo" element={<Usememo />} />
         <Route path="shop" element={<Shoping />} />
      </Routes>
    </>
  )
}

export default Navbarmemo

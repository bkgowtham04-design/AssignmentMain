import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './customdata/Counter'
import Toggle from './customdata/Toggle'
import Apiprocess from './customdata/Apiprocess'

const Navbarg = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day20/counter" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>

        <Link to="/day20/toggle" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>

        <Link to="/day20/apiprocess" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 3
        </Link>
      </nav>

      <Routes>
        <Route path="" element={<Counter />} />
        <Route path="counter" element={<Counter />} />
        <Route path="toggle" element={<Toggle />} />
        <Route path="apiprocess" element={<Apiprocess />} />
      </Routes>
    </>
  )
}

export default Navbarg
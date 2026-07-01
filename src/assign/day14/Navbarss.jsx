import React from 'react'
import Stundentsea from './Stundentsea'
import { Link, Route, Routes } from 'react-router-dom'

const Navbarss = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day14/searchst" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>

          {/* <Link to="/day13/cou" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>

           <Link to="/day13/tab" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 3
        </Link>

          <Link to="/day13/api" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 4
        </Link>
        
          <Link to="/day13/tim" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 5
        </Link> */}
      </nav>

      <Routes>
        <Route path="" element={<Stundentsea />} />
        <Route path="searchst" element={<Stundentsea/>} />
         {/* <Route path="cou" element={<Countup/>} />
         <Route path="tab" element={<Tabshow/>} />

          <Route path="api" element={<Apiprocess/>} />
            <Route path="tim" element={<Timer/>} /> */}
      </Routes>
    
    </>
  )
}

export default Navbarss
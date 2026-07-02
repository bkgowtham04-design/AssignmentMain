import React from 'react'
import Stundentsea from './Stundentsea'
import { Link, Route, Routes } from 'react-router-dom'
import Productla from './Productla'
import Empsearch from './Empsearch'
import Coursesser from './Coursesser'

const Navbarss = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day14/searchst" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>

           <Link to="/day14/prodi" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>

           <Link to="/day14/empies" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 3
        </Link>

          <Link to="/day14/cou" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 4
        </Link>
        
          
      </nav>

      <Routes>
        <Route path="" element={<Stundentsea />} />
        <Route path="searchst" element={<Stundentsea/>} />
          <Route path="prodi" element={<Productla/>} />
          <Route path="empies" element={<Empsearch/>} />

          <Route path="cou" element={<Coursesser/>} />
            
      </Routes>
    
    </>
  )
}

export default Navbarss
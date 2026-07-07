import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Showingdata from './Showingdata'
import Scroll from './Scroll'

const Navbarref = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day17/proapi" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>

        <Link to="/day17/Scrolldata" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>

           
        
          
      </nav>

       <Routes>
        <Route path="" element={<Showingdata/>} />
        <Route path="proapi" element={<Showingdata/>} />
         <Route path="Scrolldata" element={<Scroll/>} />
         
            
      </Routes>
    
    </>
  )
}

export default Navbarref
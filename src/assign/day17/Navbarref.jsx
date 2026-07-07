import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Showingdata from './Showingdata'

const Navbarref = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day16/proapi" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>

           
        
          
      </nav>

       <Routes>
        <Route path="" element={<Showingdata/>} />
        <Route path="proapi" element={<Showingdata/>} />
         
            
      </Routes>
    
    </>
  )
}

export default Navbarref
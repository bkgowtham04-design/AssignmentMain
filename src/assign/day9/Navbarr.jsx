import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'


import Task01 from './componets/tas1/Task01'
import Task02 from './componets/tas2/Task02'
import Task03 from './componets/tas3/Task03'

const Navbarr = () => {
  return (
    <>
     
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day9/task1" className="text-gray-500 hover:text-gray-900">
          TASK 1
        </Link>
        <Link to="/day9/task2" className="text-gray-500 hover:text-gray-900">
          TASK 2
        </Link>
        <Link to="/day9/task3" className="text-gray-500 hover:text-gray-900">
          TASK 3
        </Link>
        
      </nav>

      
      <Routes>
        <Route path="task1" element={<Task01 />} />
        <Route path="task2" element={<Task02 />} />
        <Route path="task3" element={<Task03 />} />
      
      </Routes>
    </>
  )
}

export default Navbarr
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import StudentForm from './StudentForm'
import Employes from './Employes'
import Productf from './Productf'
import School from './School'
import Userf from './Userf'

const Navbark = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day11/studentf" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>
        <Link to="/day11/employeesf" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>
        <Link to="/day11/productsf" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 3
        </Link>
        <Link to="/day11/schoolf" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 4
        </Link>
        <Link to="/day11/usersf" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 5
        </Link>
      </nav>

      <Routes>
        <Route path="studentf" element={<StudentForm />} />
        <Route path="employeesf" element={<Employes />} />
        <Route path="productsf" element={<Productf />} />
        <Route path="schoolf" element={<School />} />
        <Route path="usersf" element={<Userf />} />
      </Routes>
    </>
  )
}

export default Navbark
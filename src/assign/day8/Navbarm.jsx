
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Student from './pages/Student'
import Employee from './pages/Employee'
import Age from './pages/Age'

import Email from './pages/Email'
import Mobilenum from './pages/Mobilenum'



const Navbarm = () => {
  return (
    <>
     <nav className="bg-gray-900 text-white p-4 flex justify-center gap-8 shadow-md">
  <Link to="/day8/stu" className="hover:text-blue-400 transition">
    TASK 1
  </Link>

  <Link to="/day8/Employee" className="hover:text-blue-400 transition">
    TASK 2
  </Link>

  <Link to="/day8/age" className="hover:text-blue-400 transition">
    TASK 3
  </Link>

   <Link to="/day8/email" className="hover:text-blue-400 transition">
    TASK 4
  </Link>

    <Link to="/day8/mob" className="hover:text-blue-400 transition">
    TASK 5
  </Link>

 
</nav>


<Routes>
<Route path="stu" element={<Student/>} />

<Route path="Employee" element={<Employee/>} />

<Route path="age" element={<Age/>} />

<Route path="email" element={<Email/>} />

<Route path="mob" element={<Mobilenum/>} />
{/* 
<Route path="paragraph" element={<Paragraph />} /> */}

{/* <Route path="userdata" element={<Userdata />} />

<Route path="product" element={<Product />} />

<Route path="mobile" element={<Mobile />} />

<Route path="salary" element={<Salary />} />  */}

</Routes>

      
    </>
  )
}

export default Navbarm
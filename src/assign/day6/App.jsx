import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Counter from './Counter'
import Student from './Student'
import AgeIncrement from './AgeIncrement'
import Login from './Login'
import Modechange from './Modechange'
import Paragraph from './Paragraph'
import Userdata from './Userdata'
import Product from './Product'
import Mobile from './Mobile'
import Salary from './Salary'

const App = () => {
  return (
    <>
     <nav className="bg-gray-900 text-white p-4 flex justify-center gap-8 shadow-md">
  <Link to="/day6/count" className="hover:text-blue-400 transition">
    TASK 1
  </Link>

  <Link to="/day6/student" className="hover:text-blue-400 transition">
    TASK 2
  </Link>

  <Link to="/day6/ageincrement" className="hover:text-blue-400 transition">
    TASK 3
  </Link>

  <Link to="/day6/login" className="hover:text-blue-400 transition">
    TASK 4
  </Link>

  <Link to="/day6/modechange" className="hover:text-blue-400 transition">
    TASK 5
  </Link>

  <Link to="/day6/paragraph" className="hover:text-blue-400 transition">
    TASK 6
  </Link>

  <Link to="/day6/userdata" className="hover:text-blue-400 transition">
    TASK 7
  </Link>

  <Link to="/day6/product" className="hover:text-blue-400 transition">
    TASK 8
  </Link>

  <Link to="/day6/mobile" className="hover:text-blue-400 transition">
    TASK 9
  </Link>

  <Link to="/day6/salary" className="hover:text-blue-400 transition">
    TASK 10
  </Link>
</nav>


<Routes>
<Route path="count" element={<Counter />} />

<Route path="student" element={<Student />} />

<Route path="ageincrement" element={<AgeIncrement />} />

<Route path="login" element={<Login />} />

<Route path="modechange" element={<Modechange />} />

<Route path="paragraph" element={<Paragraph />} />

<Route path="userdata" element={<Userdata />} />

<Route path="product" element={<Product />} />

<Route path="mobile" element={<Mobile />} />

<Route path="salary" element={<Salary />} />

</Routes>

      
    </>
  )
}

export default App
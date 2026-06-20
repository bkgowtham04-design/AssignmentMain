import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Student from './pages/Student'
import Employee from './pages/Employee'
import Age from './pages/Age'
import Email from './pages/Email'
import Mobilenum from './pages/Mobilenum'
import City from './pages/City'
import Coures from './pages/Coures'
import Character from './pages/Character'
import Uppercase from './pages/Uppercase'
import Lowercase from './pages/Lowercase'
import Form from './pages/Form'
import Login from './pages/Login'
import Feedback from './pages/Feedback'
import Search from './pages/Search'
import Registration from './pages/Registration'
import User from './pages/User'
import ProductList from './pages/ProductList'
import EmployeeList from './pages/EmployeeList'
import Todo from './pages/Todo'
import ContactForm from './pages/ContactForm'

const Navbarm = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day8/stu" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>
        <Link to="/day8/Employee" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>
        <Link to="/day8/age" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 3
        </Link>
        <Link to="/day8/email" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 4
        </Link>
        <Link to="/day8/mob" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 5
        </Link>
        <Link to="/day8/cit" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 6
        </Link>
        <Link to="/day8/cou" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 7
        </Link>
        <Link to="/day8/cha" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 8
        </Link>
        <Link to="/day8/upp" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 9
        </Link>
        <Link to="/day8/low" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 10
        </Link>
        <Link to="/day8/form" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 11
        </Link>
        <Link to="/day8/login" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 12
        </Link>
        <Link to="/day8/feed" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 13
        </Link>
        <Link to="/day8/search" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 14
        </Link>
        <Link to="/day8/reg" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 15
        </Link>
        <Link to="/day8/user" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 16
        </Link>
        <Link to="/day8/plist" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 17
        </Link>
        <Link to="/day8/elist" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 18
        </Link>
        <Link to="/day8/todo" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 19
        </Link>
        <Link to="/day8/clist" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 20
        </Link>
      </nav>

      <Routes>
        <Route path="stu" element={<Student />} />
        <Route path="Employee" element={<Employee />} />
        <Route path="age" element={<Age />} />
        <Route path="email" element={<Email />} />
        <Route path="mob" element={<Mobilenum />} />
        <Route path="cit" element={<City />} />
        <Route path="cou" element={<Coures />} />
        <Route path="cha" element={<Character />} />
        <Route path="upp" element={<Uppercase />} />
        <Route path="low" element={<Lowercase />} />
        <Route path="form" element={<Form />} />
        <Route path="login" element={<Login />} />
        <Route path="feed" element={<Feedback />} />
        <Route path="search" element={<Search />} />
        <Route path="reg" element={<Registration />} />
        <Route path="user" element={<User />} />
        <Route path="plist" element={<ProductList />} />
        <Route path="elist" element={<EmployeeList />} />
        <Route path="todo" element={<Todo />} />
        <Route path="clist" element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default Navbarm
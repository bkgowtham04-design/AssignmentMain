import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Inputshow from './component/Inputshow'
import Themeshow from './component/Themeshow'
import Productdata from './component/Productdata'
import Inputprovider from './provider/Inputprovider'
import ThemeProvider from './provider/ThemeProvider'
import Productprovider from './provider/Productprovider'

const Navbarchi = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-center gap-6 text-sm">
        <Link to="/day18/inputshow" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 1
        </Link>

        <Link to="/day18/themeshow" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 2
        </Link>

        <Link to="/day18/productdata" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
          TASK 3
        </Link>
      </nav>

      <Routes>
        <Route 
          path="" 
          element={
            <Inputprovider>
              <Inputshow />
            </Inputprovider>
          } 
        />
        <Route 
          path="inputshow" 
          element={
            <Inputprovider>
              <Inputshow />
            </Inputprovider>
          } 
        />
        <Route 
          path="themeshow" 
          element={
            <ThemeProvider>
              <Themeshow />
            </ThemeProvider>
          } 
        />
        <Route 
          path="productdata" 
          element={
            <Productprovider>
              <Productdata />
            </Productprovider>
          } 
        />
      </Routes>
    </>
  )
}

export default Navbarchi
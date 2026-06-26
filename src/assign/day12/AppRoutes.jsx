import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './componets/Dashboard'
import Register1 from './componets/Register1'
import Login1 from './componets/Login1'

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="" element={<Register1 />} />
      <Route path="register" element={<Register1 />} />
      <Route path="login" element={<Login1 />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default AppRoutes
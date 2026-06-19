import { Route, Routes } from "react-router-dom"
import Navbar from "../Navbar"
import Home from "../pages/Home"
import Object from "../pages/Object"

import ArrayRendering from "../pages/ArrayRendering"
import ArrayOfObj from "../pages/ArrayOfObj"

const AppRoute = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>} />
       
        <Route path="object" element={<Object/>} />
        <Route path="array" element={<ArrayRendering/>} />
        <Route path="arrobj" element={<ArrayOfObj/>} />
      </Routes>
    </>
  )
}

export default AppRoute
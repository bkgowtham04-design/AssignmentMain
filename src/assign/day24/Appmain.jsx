import React, { Suspense, useEffect, useState } from 'react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Profile = lazy(() => import('./pages/Profile'))

const Appmain = () => {


      const [showing,setShowing] = useState([])
    
      const allapi = import.meta.env.VITE_API_URL


     const getdata =async()=>{
    
        const takedata = await fetch(allapi)
    
        const res = await takedata.json()
    
        setShowing(res.products)
    
      }
    
      useEffect(()=>{
    
        getdata()
    
      },[])
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center py-12"><h1 className="text-lg font-semibold text-gray-500">Loading...</h1></div>}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Suspense>


        {showing.map((e,i)=>(
      <div key={i+1}>
        <p>{e.title}</p>
        <p>{e.description}</p>
      </div>
    ))}


      
    </>
  )
}

export default Appmain
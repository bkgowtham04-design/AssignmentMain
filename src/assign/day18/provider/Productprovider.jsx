import React, { useState } from 'react'
import Productcontext from '../context/Productcontext'

const Productprovider = ({ children }) => {

    const [productshow,setProductshow] = useState([])

    const handlechange =()=>{

        setProductshow([{   id:1,   title:"Laptop",   price:50000 }, {   id:2,   title:"Mobile",   price:20000 }])

    }
  return (
    <>
    <Productcontext.Provider value={{productshow,setProductshow,handlechange}}>

{children}

    </Productcontext.Provider>
    
    
    </>
  )
}

export default Productprovider
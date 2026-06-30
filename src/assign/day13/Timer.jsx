import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [showing,setShowing] = useState(0)

    const timers =()=>{
        setInterval(()=>{
            setShowing((prev) => (prev+1))
        },1000)
    }

    useEffect(()=>{
        timers()

          return () => clearInterval(interval)
    },[])

  
  return (
    <>
    <h1>Timer : {showing}</h1>
    
    </>
  )
}

export default Timer
import React, { useEffect, useState } from 'react'

const Apiprocess = () => {

    const [showing,setShowing] = useState([])

    const feaching =async()=>{

        const datas = await fetch("https://jsonplaceholder.typicode.com/users")

        const wait = await datas.json()

        setShowing(wait)
    }

    useEffect(()=>{
        feaching()
    },[])
  return (
    <>
    {showing.map((e,i)=>(
        <div key={i}>
            <p>{e.name}</p>
        </div>
    ))}
    
    </>
  )
}

export default Apiprocess
import React, { useState } from 'react'

const Coursesser = () => {

    const [showing,setShowing] = useState("")

    const courses = ["Full Stack","React","React Native","Devops","Javascript","Node","MangoDB"]

    const handlechange =(e)=>{
        setShowing(e.target.value)
    }

    const datas = courses.filter((e)=>e.toLowerCase().includes(showing.toLowerCase()))

    //console.log(datas);
    
  return (
    <>
    <input type="text" placeholder='Enter Your Courses' onChange={handlechange} />

    {datas.map((e,i)=>(
        <div key={i}>
            <p>{e}</p>
        </div>
    ))}
    </>
  )
}

export default Coursesser
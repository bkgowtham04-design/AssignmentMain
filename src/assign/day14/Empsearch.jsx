import React, { useState } from 'react'

const Empsearch = () => {

    const [showing,setShowing] = useState("")

    const empolyee = ["Gowtham","Ramesh","Ravi","Virat","Dharani","Deepak","Anbu","Shakthi"]

    const handlechange =(e)=>{
   
       setShowing(e.target.value)
    }

    const datas = empolyee.filter((e)=>e.toLowerCase().includes(showing.toLowerCase()))

    //console.log(datas);
    


  return (
    <>
    <input type="text" placeholder='Search The Empolyee' onChange={handlechange}/>

    {datas.map((e,i)=>(
        <div key={i}>
            <p>{e}</p>
        </div>
    ))}
    
    </>
  )
}

export default Empsearch
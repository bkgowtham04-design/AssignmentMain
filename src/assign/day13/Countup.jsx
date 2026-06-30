import React, { useEffect, useState } from 'react'

const Countup = () => {

    const [stateing,setStateing] = useState(0)

    const handleclick =()=>{

              setStateing(stateing + 1)

     }

       useEffect(()=>{
    

          console.log("Count Updated");
          
    },[stateing])

  
 
 
    return (
    <>
   <h1>Counting</h1>

   <p>{stateing}</p>

   <button onClick={handleclick}>Click</button>
    
    </>
  )
}

export default Countup
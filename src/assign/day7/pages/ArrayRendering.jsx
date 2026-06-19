import { useState } from "react"


const ArrayRendering = () => {

 const [arr,setArr] = useState(["Virat","Dhoni","Rohit","Raina","Padidhar","Gowtham"])

 const handleClick = (index)=>{

    
  let edit = [...arr]


  edit[index] = "Virat Kolhi"


  setArr(edit)
  
 }



  return (
    <>
     <div className="bg-green-500 p-10 h-100">
        <div className="flex justify-items-start gap-5 items-center">
          <h1 className="mb-5 text-center bg-white w-25 rounded p-2">Array</h1>
           <button className=" bg-white p-2 rounded mb-5" onClick={handleClick}>Click to Update</button>
        </div>


        <div className="bg-white flex gap-3 justify-center p-5">
            {arr.map((e,i)=>(
              <p className="bg-black p-1 text-white w-25 text-center" key={i+1} onClick={()=>handleClick(i)}>{e}</p>
            ))}
        </div>


        
        
     </div>
    </>
  )
}




export default ArrayRendering
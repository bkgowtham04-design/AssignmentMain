import { useState } from 'react'

const Home = ({datas}) => {


  const [newdata,setData] = useState(datas || { name: "", year: "", cat: "", plan: "", course: { name: "" } })




const handleClick = ()=>{

  setData({...newdata,year:2020})

}
   
  
  return (
    <>
    <div className="bg-blue-500 text-white p-10 h-100 flex flex-col gap-2 justify-center items-center">
        <h1>Home</h1>
        <button onClick={handleClick}>Read More</button>

        <div className="bg-white p-10">
          <div className="bg-black p-3 text-white w-50 h-50 rounded-2xl">
           
              <h1>{newdata.name}</h1>
              <p>{newdata.year}</p>
              <p>{newdata.cat}</p>
              <p className="mb-5">{newdata.plan} <span className="bg-amber-300 text-black my-2 p-1 rounded ">{newdata.course.name}</span></p>
               <button className="bg-white w-25 text-center rounded p-1 text-black">More</button>
          </div>
        </div>
    </div>
    </>
  )
}



export default Home
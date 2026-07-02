import React, { useEffect, useState } from 'react'

const Productsapi = () => {

  const [alldata,setAlldata] = useState([])
  const [forcat,setForcat] = useState([])
  const [Search,setSearch] = useState("")
  const [catdisplay,setCatdisplay] = useState("")
  const [sortdata,setSortdata] = useState("")

  const showingdata = async () => {
    const show = await fetch("https://dummyjson.com/products") 
    const showtake = await show.json()

    setAlldata(showtake.products)

    const making = showtake.products.map((e) => e.category)
    const takedata = [...new Set(making)]

    setForcat(takedata)
  } 

const handlechange =(e)=>{
     setSearch(e.target.value) 
    
    }
  const handlecat =(e)=> {
    setCatdisplay(e.target.value)
  }
  const handlesorting =(e)=> {
    setSortdata(e.target.value)
  }



  
  let display = [...alldata]

  if(Search){
    display = display.filter((e)=>e.title.toLowerCase().includes(Search.toLowerCase())) 
  }

  if(catdisplay){
    display = display.filter((e)=>e.category == catdisplay )
  }

  if(sortdata === "des"){
    display = display.sort((a,b)=>a.price -b.price)
  }

  if(sortdata === "ase"){
    display = display.sort((a,b)=>b.price - a.price)
  }

  useEffect(()=>{
    showingdata()
  },[])

  return (
    <div className="p-5 bg-gray-100 min-h-screen">

      {/* 🔹 Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input 
          type="text" 
          placeholder='Search'  
          onChange={handlechange}
          className="p-2 border rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select 
          onChange={handlecat}
          className="p-2 border rounded-lg w-full md:w-1/4"
        >
          <option value="" >All category </option>

          {forcat.map((e)=>(
            <option value={e} key={e}>{e}</option>
          ))}
        </select>

        <select 
          onChange={handlesorting}
          className="p-2 border rounded-lg w-full md:w-1/4"
        > 
          <option value="">Price</option>
          <option value="des">Low to High</option>
          <option value="ase">High to Low</option>
        </select>

      </div>

      {/* 🔹 Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {display.map((e)=>(
          <div 
            key={e.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg mb-2">{e.title}</h2>

            <p className="text-gray-500 text-sm mb-2">
              {e.description}
            </p>

            <p className="text-blue-500 text-sm">{e.category}</p>

            <p className="font-bold text-lg mt-2">₹ {e.price}</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Productsapi
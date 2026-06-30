import React, { useState } from 'react'

const Proman = () => {
  const [state, setState] = useState({ proname: "", proprice: "", procategory: "", prosalary: "" })
  const [showing, setShowing] = useState([])

  const handlechange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    const datas = JSON.parse(localStorage.getItem("Userdetials")) || []
    datas.push(state)

    localStorage.setItem("Userdetials", JSON.stringify(datas))
    alert("Submitted Successfully")

    setState({ proname: "", proprice: "", procategory: "", prosalary: "" })

    const mean = JSON.parse(localStorage.getItem("Userdetials"))
    setShowing(mean)
  }

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Product Management System</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Product Name</label>
            <input 
              type="text" 
              placeholder="Enter Product Name" 
              name="proname" 
              value={state.proname} 
              onChange={handlechange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Price</label>
            <input  
              type="text"  
              placeholder="Enter Price"  
              name="proprice"   
              value={state.proprice} 
              onChange={handlechange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
            <input  
              type="text"  
              placeholder="Enter Category"  
              name="procategory"  
              value={state.procategory} 
              onChange={handlechange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Brand</label>
            <input  
              type="text"  
              placeholder="Enter Brand"  
              name="prosalary"  
              value={state.prosalary} 
              onChange={handlechange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Register Product
        </button>
      </form>

      {showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Registered Products</h2>
          <div className="space-y-2">
            {showing.map((pro, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-xs text-gray-700 font-semibold mb-0.5">Product: {pro.proname}</p>
                <p className="text-xs text-gray-600">Price: {pro.proprice} | Category: {pro.procategory} | Brand: {pro.prosalary}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Proman
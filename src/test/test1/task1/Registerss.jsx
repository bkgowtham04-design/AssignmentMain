import React, { useState, useEffect } from 'react'

const Registerss = () => {
  const [state, setState] = useState({ username: "", userage: "", usercourse: "", usercity: "" })
  const [showing, setShowing] = useState([])



  const handlechange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

  
    if (!state.username || !state.userage || !state.usercourse || !state.usercity) {
      alert("Please fill in all fields")
      return
    }

    const datas = JSON.parse(localStorage.getItem("UserDetails")) || []
    const updatedDatas = [...datas, state]

    localStorage.setItem("UserDetails", JSON.stringify(updatedDatas))
    alert("Submitted Successfully")

    setShowing(updatedDatas)

  
    setState({ username: "", userage: "", usercourse: "", usercity: "" })
  }

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Form Register</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Name</label>
            <input 
              type="text" 
              placeholder="Enter The Name" 
              name="username" 
              value={state.username}
              onChange={handlechange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Age</label>
            <input 
              type="text" 
              placeholder="Enter The Age" 
              name="userage" 
              value={state.userage}
              onChange={handlechange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Course</label>
            <input 
              type="text" 
              placeholder="Enter The Course" 
              name="usercourse" 
              value={state.usercourse}
              onChange={handlechange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">City</label>
            <input 
              type="text" 
              placeholder="Enter Your City" 
              name="usercity" 
              value={state.usercity}
              onChange={handlechange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Register
        </button>
      </form>

      {/* Showing Registered Users */}
      {showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Registered Users</h2>
          <div className="space-y-2">
            {showing.map((user, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-xs text-gray-700 font-semibold mb-0.5">Name: {user.username}</p>
                <p className="text-xs text-gray-600">Age: {user.userage} | Course: {user.usercourse} | City: {user.usercity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Registerss
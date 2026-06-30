import React, { useState } from 'react'

const Regform = () => {
  const [state, setState] = useState({ username: "", email: "", password: "" })
  const [showing, setShowing] = useState([])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    
    if (e && e.preventDefault) e.preventDefault()

    const datas = JSON.parse(localStorage.getItem("RegisterDetials")) || []
    datas.push(state)

    localStorage.setItem("RegisterDetials", JSON.stringify(datas))
    alert("Submitted Successfully")

    setState({ username: "", email: "", password: "" })

    const mean = JSON.parse(localStorage.getItem("RegisterDetials"))
    setShowing(mean)
  }

  const form = state;

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4"> 
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Registration Form</h1>
        
        <div className="space-y-3">
          <input 
            type="text" 
            name="username" 
            placeholder="Enter Username" 
            value={form.username} 
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
          />

          <input 
            type="email"  
            name="email"  
            placeholder="Enter Email"  
            value={form.email}  
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
          />

          <input  
            type="password"  
            name="password"  
            placeholder="Enter Password"  
            value={form.password}  
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Register
        </button>
      </form>

      {showing && showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Registered Users</h2>
          <div className="space-y-2">
            {showing.map((e, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-xs text-gray-700 font-semibold mb-0.5">Username: {e.username}</p>
                <p className="text-xs text-gray-600">Email: {e.email}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Regform
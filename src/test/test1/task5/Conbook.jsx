import React, { useState, useEffect } from 'react'

const Conbook = () => {
  const [state, setState] = useState({ name: "", mobile: "", email: "" })
  const [showing, setShowing] = useState([])

  // Load existing details from localStorage on component mount
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("ContactDetails")) || []
    setShowing(savedDetails)
  }, [])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    const datas = JSON.parse(localStorage.getItem("ContactDetails")) || []
    datas.push(state)

    localStorage.setItem("ContactDetails", JSON.stringify(datas))
    alert("Submitted Successfully")

    setState({ name: "", mobile: "", email: "" })

    const mean = JSON.parse(localStorage.getItem("ContactDetails"))
    setShowing(mean)
  }

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Contact Book Application</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter Name" 
              value={state.name} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Mobile Number</label>
            <input 
              type="text" 
              name="mobile" 
              placeholder="Enter Mobile Number" 
              value={state.mobile} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter Email" 
              value={state.email} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Save Contact
        </button>
      </form>

      {showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Contact List</h2>
          <div className="space-y-2">
            {showing.map((e, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-xs text-gray-700 font-semibold mb-0.5">Name: {e.name}</p>
                <p className="text-xs text-gray-600">Mobile: {e.mobile} | Email: {e.email}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Conbook

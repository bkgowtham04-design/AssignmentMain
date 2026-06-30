import React, { useState, useEffect } from 'react'

const Vehiclereg = () => {
  const [state, setState] = useState({ vehNum: "", ownerName: "", vehType: "" })
  const [showing, setShowing] = useState([])

  // Load existing details from localStorage on component mount
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("VehicleDetails")) || []
    setShowing(savedDetails)
  }, [])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    const datas = JSON.parse(localStorage.getItem("VehicleDetails")) || []
    datas.push(state)

    localStorage.setItem("VehicleDetails", JSON.stringify(datas))
    alert("Submitted Successfully")

    setState({ vehNum: "", ownerName: "", vehType: "" })

    const mean = JSON.parse(localStorage.getItem("VehicleDetails"))
    setShowing(mean)
  }

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Registration System</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Vehicle Number</label>
            <input 
              type="text" 
              name="vehNum" 
              placeholder="Enter Vehicle Number" 
              value={state.vehNum} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Owner Name</label>
            <input 
              type="text" 
              name="ownerName" 
              placeholder="Enter Owner Name" 
              value={state.ownerName} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Vehicle Type</label>
            <input 
              type="text" 
              name="vehType" 
              placeholder="Enter Vehicle Type" 
              value={state.vehType} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Register Vehicle
        </button>
      </form>

      {showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Registered Vehicles</h2>
          <div className="space-y-2">
            {showing.map((e, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-xs text-gray-700 font-semibold mb-0.5">Vehicle Number: {e.vehNum}</p>
                <p className="text-xs text-gray-600">Owner Name: {e.ownerName} | Type: {e.vehType}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Vehiclereg

import React, { useState, useEffect } from 'react'

const Patientreg = () => {
  const [state, setState] = useState({ patName: "", patAge: "", patDisease: "", docName: "" })
  const [showing, setShowing] = useState([])

  // Load existing details from localStorage on component mount
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("PatientDetails")) || []
    setShowing(savedDetails)
  }, [])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    const datas = JSON.parse(localStorage.getItem("PatientDetails")) || []
    datas.push(state)

    localStorage.setItem("PatientDetails", JSON.stringify(datas))
    alert("Submitted Successfully")

    setState({ patName: "", patAge: "", patDisease: "", docName: "" })

    const mean = JSON.parse(localStorage.getItem("PatientDetails"))
    setShowing(mean)
  }

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Hospital Patient Registration</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Patient Name</label>
            <input 
              type="text" 
              name="patName" 
              placeholder="Enter Patient Name" 
              value={state.patName} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Age</label>
            <input 
              type="text" 
              name="patAge" 
              placeholder="Enter Age" 
              value={state.patAge} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Disease</label>
            <input 
              type="text" 
              name="patDisease" 
              placeholder="Enter Disease" 
              value={state.patDisease} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Doctor Name</label>
            <input 
              type="text" 
              name="docName" 
              placeholder="Enter Doctor Name" 
              value={state.docName} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Register Patient
        </button>
      </form>

      {showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Patient Records</h2>
          <div className="space-y-2">
            {showing.map((e, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-xs text-gray-700 font-semibold mb-0.5">Patient: {e.patName}</p>
                <p className="text-xs text-gray-600">Age: {e.patAge} | Disease: {e.patDisease} | Doctor: {e.docName}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Patientreg

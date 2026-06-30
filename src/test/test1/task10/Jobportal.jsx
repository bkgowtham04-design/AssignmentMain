import React, { useState, useEffect } from 'react'

const Jobportal = () => {
  const [state, setState] = useState({ candName: "", candEmail: "", candSkill: "", candExp: "" })
  const [showing, setShowing] = useState([])

  // Load existing details from localStorage on component mount
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("JobApplications")) || []
    setShowing(savedDetails)
  }, [])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    const datas = JSON.parse(localStorage.getItem("JobApplications")) || []
    datas.push(state)

    localStorage.setItem("JobApplications", JSON.stringify(datas))
    alert("Submitted Successfully")

    setState({ candName: "", candEmail: "", candSkill: "", candExp: "" })

    const mean = JSON.parse(localStorage.getItem("JobApplications"))
    setShowing(mean)
  }

  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Job Application Portal</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Candidate Name</label>
            <input 
              type="text" 
              name="candName" 
              placeholder="Enter Candidate Name" 
              value={state.candName} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
            <input 
              type="email" 
              name="candEmail" 
              placeholder="Enter Email" 
              value={state.candEmail} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Skill</label>
            <input 
              type="text" 
              name="candSkill" 
              placeholder="Enter Skill" 
              value={state.candSkill} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Experience (Years)</label>
            <input 
              type="text" 
              name="candExp" 
              placeholder="Enter Experience" 
              value={state.candExp} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Submit Application
        </button>
      </form>

      {showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Applicants List</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-gray-500">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase">Candidate Name</th>
                  <th className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase">Email</th>
                  <th className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase">Skill</th>
                  <th className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase">Experience</th>
                </tr>
              </thead>
              <tbody>
                {showing.map((app, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50/50">
                    <td className="px-4 py-2 font-medium text-gray-900">{app.candName}</td>
                    <td className="px-4 py-2 text-gray-900">{app.candEmail}</td>
                    <td className="px-4 py-2 text-gray-900">{app.candSkill}</td>
                    <td className="px-4 py-2 text-gray-900">{app.candExp} years</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Jobportal

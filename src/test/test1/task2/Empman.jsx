import React, { useState, useEffect } from 'react'

const Empman = () => {
  const [state, setState] = useState({ empName: "", empId: "", empDept: "", empSalary: "" })
  const [showing, setShowing] = useState([])

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("EmployeeDetails")) || []
    setShowing(savedDetails)
  }, [])

  const handlechange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    if (!state.empName || !state.empId || !state.empDept || !state.empSalary) {
      alert("Please fill in all fields")
      return
    }

    const datas = JSON.parse(localStorage.getItem("EmployeeDetails")) || []
    const updatedDatas = [...datas, state]

    localStorage.setItem("EmployeeDetails", JSON.stringify(updatedDatas))
    alert("Submitted Successfully")

    
    setShowing(updatedDatas)

   
    setState({ empName: "", empId: "", empDept: "", empSalary: "" })
  }

  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Employee Management System</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Employee Name</label>
            <input 
              type="text" 
              placeholder="Enter Employee Name" 
              name="empName" 
              value={state.empName}
              onChange={handlechange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Employee ID</label>
            <input 
              type="text" 
              placeholder="Enter Employee ID" 
              name="empId" 
              value={state.empId}
              onChange={handlechange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Department</label>
            <input 
              type="text" 
              placeholder="Enter Department" 
              name="empDept" 
              value={state.empDept}
              onChange={handlechange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Salary</label>
            <input 
              type="number" 
              placeholder="Enter Salary" 
              name="empSalary" 
              value={state.empSalary}
              onChange={handlechange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Register Employee
        </button>
      </form>

     
      {showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Employee List</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-gray-500">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase">Employee ID</th>
                  <th className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase">Employee Name</th>
                  <th className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase">Department</th>
                  <th className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase">Salary</th>
                </tr>
              </thead>
              <tbody>
                {showing.map((emp, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50/50">
                    <td className="px-4 py-2 font-medium text-gray-900">{emp.empId}</td>
                    <td className="px-4 py-2 text-gray-900">{emp.empName}</td>
                    <td className="px-4 py-2 text-gray-900">{emp.empDept}</td>
                    <td className="px-4 py-2 text-gray-900">${emp.empSalary}</td>
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

export default Empman
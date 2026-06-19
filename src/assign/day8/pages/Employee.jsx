import React, { useState } from 'react'

const Employee = () => {

  const [empName, setEmpName] = useState("")

  const handleChange = (e) => {
    setEmpName(e.target.value)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        
        <label 
          htmlFor="emp" 
          className="block text-gray-700 font-semibold mb-2"
        >
          Enter Employee Name
        </label>

        <input 
          type="text"
          id="emp"
          value={empName}
          onChange={handleChange}
          placeholder="Type employee name..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <p className="mt-4 text-lg font-medium text-green-600">
          {empName ? empName : "No name entered"}
        </p>

      </div>

    </div>
  )
}

export default Employee
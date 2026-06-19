import React, { useState } from 'react'

const Student = () => {

  const [stuname, setStuname] = useState("")

  const handlechange = (e) => {
    setStuname(e.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        
        <label 
          htmlFor="name" 
          className="block text-gray-700 font-semibold mb-2"
        >
          Enter The Name
        </label>

        <input 
          type="text" 
          id="name" 
          onChange={handlechange}
          placeholder="Type here..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="mt-4 text-lg font-medium text-blue-600">
          {stuname}
        </p>

      </div>

    </div>
  )
}

export default Student
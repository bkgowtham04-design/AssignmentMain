import React, { useState } from 'react'

const Email = () => {

  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        
        <label 
          htmlFor="email" 
          className="block text-gray-700 font-semibold mb-2"
        >
          Enter Email
        </label>

        <input 
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="Type your email..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <p className="mt-4 text-lg font-medium text-red-600">
          {email ? email : "No email entered"}
        </p>

      </div>

    </div>
  )
}

export default Email
import React, { useState } from 'react'

const Age = () => {
    const [userAge,setUserAge] = useState()

      const handleChange = (e) => {
    setUserAge(e.target.value)
  }
  return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        
        <label 
          htmlFor="age" 
          className="block text-gray-700 font-semibold mb-2"
        >
          Enter Your Age
        </label>

        <input 
          type="number"
          id="age"
          value={userAge}
          onChange={handleChange}
          placeholder="Type your age..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <p className="mt-4 text-lg font-medium text-purple-600">
          {userAge ? `Your Age: ${userAge}` : "No age entered"}
        </p>

      </div>

    </div>
    
    
    </>
  )
}

export default Age
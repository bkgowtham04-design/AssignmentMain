import React, { useState } from 'react'

const City = () => {

  const [city, setCity] = useState("")
  const [showCity, setShowCity] = useState("")

  const handlechange = (e) => {
    setCity(e.target.value)
  }

  const handleclick = () => {
    setShowCity(city)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          City Name
        </h1>

        <label 
          htmlFor="mma" 
          className="block text-gray-700 font-semibold mb-2"
        >
          Enter Your City
        </label>

        <input 
          type="text" 
          id="mma"
          value={city}      
          onChange={handlechange}
          placeholder="Type city..."
          className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button 
          onClick={handleclick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        >
          Click To Show
        </button>

        <p className="mt-4 text-lg text-blue-600 text-center">
          {showCity ? showCity : "No city selected"}
        </p>

      </div>

    </div>
  )
}

export default City
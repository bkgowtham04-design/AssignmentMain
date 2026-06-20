import React, { useState } from 'react'

const Coures = () => {

  const [course, setCourse] = useState("")
  const [showCourse, setShowCourse] = useState("")

  const handlechange = (e) => {
    setCourse(e.target.value)
  }

  const handleclick = () => {
    setShowCourse(course)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          Course Registration
        </h1>

        <label 
          htmlFor="mma" 
          className="block text-gray-700 font-semibold mb-2"
        >
          Enter Your Course
        </label>

        <input 
          type="text"
          id="mma"
          value={course}  
          onChange={handlechange}
          placeholder="Type course..."
          className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button 
          onClick={handleclick}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          Register
        </button>

        <p className="mt-4 text-lg text-green-600 text-center">
          {showCourse ? showCourse : "No course selected"}
        </p>

      </div>

    </div>
  )
}

export default Coures
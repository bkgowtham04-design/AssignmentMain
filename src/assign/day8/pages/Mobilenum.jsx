import React, { useState } from 'react'

const Mobilenum = () => {

  const [mobile, setMobile] = useState("")

  const handlechange = (e) => {
    // allow only numbers
    const value = e.target.value.replace(/[^0-9]/g, "")
    setMobile(value)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        
        <h1 className="text-xl font-bold mb-4 text-center">Mobile</h1>

        <label htmlFor="mmm" className="block mb-2 font-medium text-gray-700">
          Enter Your Number
        </label>

        <input
          type="tel"
          id="mmm"
          value={mobile}
          onChange={handlechange}
          maxLength={10}
          placeholder="Enter 10-digit number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <h2 className="mt-4 text-lg text-indigo-600 text-center">
          {mobile ? mobile : "No number entered"}
        </h2>

      </div>

    </div>
  )
}

export default Mobilenum
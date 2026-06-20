import React, { useState } from 'react'

const Form = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fullName, setFullName] = useState("")

  const handleFirstChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastChange = (e) => {
    setLastName(e.target.value)
  }

  const handleClick = () => {
    setFullName(firstName + " " + lastName)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          Full Name Form
        </h1>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstChange}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastChange}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <button
          onClick={handleClick}
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Show Full Name
        </button>

        <p className="mt-4 text-lg text-center font-medium">
          {fullName ? fullName : "No name entered"}
        </p>

      </div>

    </div>
  )
}

export default Form
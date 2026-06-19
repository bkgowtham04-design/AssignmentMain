import React, { useState } from 'react'

const Student = () => {

  const [username, setUsername] = useState("Sudhan")

  const handlechange = () => {
    setUsername("Ravi")
  }

  return (
    <div className="text-center space-y-4">
      <p className="text-lg font-medium text-slate-700">Changing Name</p>
      <h2 className="text-3xl font-bold text-blue-500">{username}</h2>
      <button
        onClick={handlechange}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        Click To Change
      </button>
    </div>
  )
}

export default Student
import React, { useState } from 'react'

const Login = () => {

  const [userlog, setUserlog] = useState(false)

  const handlechange = () => {
    setUserlog(!userlog)
  }

  return (
    <div className="text-center space-y-4">
      <h1 className="text-lg font-semibold text-slate-700">Toggle Login</h1>
      <h2 className="text-xl font-semibold text-slate-900">{userlog ? "Logged In" : "Logged Out"}</h2>
      <button
        onClick={handlechange}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Change
      </button>
    </div>
  )
}

export default Login
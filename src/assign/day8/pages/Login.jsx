import React, { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [showUser, setShowUser] = useState("")
  const [showPass, setShowPass] = useState("")

  const handleUserChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  const handleClick = () => {
    setShowUser(username)
    setShowPass(password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          Login Form
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUserChange}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassChange}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <button
          onClick={handleClick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        >
          Submit
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Username: {showUser ? showUser : "Not entered"}
          </p>
          <p className="text-gray-700">
            Password: {showPass ? showPass : "Not entered"}
          </p>
        </div>

      </div>

    </div>
  )
}

export default Login
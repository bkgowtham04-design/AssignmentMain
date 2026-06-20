import React, { useState } from 'react'

const Uppercase = () => {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    setResult(text.toUpperCase())
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter text"
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <button 
          onClick={handleClick}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg"
        >
          Convert
        </button>

        <p className="mt-4">{result}</p>

      </div>
    </div>
  )
}

export default Uppercase
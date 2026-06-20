import { useState } from "react"

const Character = () => {

  const [text, setText] = useState("")
  const [count, setCount] = useState(0)

  const handlechange =(e)=>{
 setText(e.target.value)
  }

  const handleClick = () => {
    setCount(text.length)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <input
          type="text"
          value={text}
          onChange={handlechange}
          placeholder="Type text"
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <button 
          onClick={handleClick}
          className="w-full bg-purple-500 text-white py-2 rounded-lg"
        >
          Count
        </button>

        <p className="mt-4">Characters: {count}</p>

      </div>
    </div>
  )
}

export default Character
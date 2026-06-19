import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)
  const handlede = () => setCount(count - 1)
  const handlereset = () => setCount(0)

  return (
    <div className="text-center space-y-4">
      <p className="text-sm text-slate-500">Starting Count</p>
      <h1 className="text-5xl font-bold text-slate-900">{count}</h1>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Increase
        </button>
        <button
          onClick={handlede}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Decrease
        </button>
        <button
          onClick={handlereset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
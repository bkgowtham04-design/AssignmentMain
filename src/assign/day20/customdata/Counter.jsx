import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
  const {counting,handleincre,handledecre,handlereset} = useCounter(0)

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
      <h1 className="text-4xl font-bold text-zinc-900 mb-6">{counting}</h1>
      <div className="flex justify-center gap-4">
        <button onClick={handleincre} className="px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer">Increase</button>
        <button onClick={handledecre} className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md text-sm font-medium transition-colors cursor-pointer">Decrease</button>
        <button onClick={handlereset} className="px-4 py-2 bg-red-650 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors cursor-pointer">Reset</button>
      </div>
    </div>
  )
}

export default Counter

import React from 'react'
import useToggle from '../hooks/useToggle'

const Toggle = () => {
  const {toggle,handleclick}  = useToggle(false)

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm space-y-4">
      <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">Password Toggle</h2>
      <input type="text" placeholder='Enter The Name' className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500" />
      <div className="flex gap-2">
        <input type={toggle ? "text" : "password"} placeholder='Password' className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500" />
        <button onClick={handleclick} className="px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer min-w-[70px]">
          {toggle?"Hide":"Show"}
        </button>
      </div>
    </div>
  )
}

export default Toggle
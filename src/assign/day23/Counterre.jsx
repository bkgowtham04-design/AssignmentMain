import React, { useReducer } from 'react'

const innitialvalue = 0

const process =(reduprocess,action)=>{
  switch (action.type) {
    case "Inc":
      return reduprocess+1
    case "Dec":
      return reduprocess-1
    case "Reset":
      return innitialvalue
    default:
      return innitialvalue
  }
}

const Counterre = () => {
  const [reduprocess,dispatch] = useReducer(process,innitialvalue)
  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
      <h1 className="text-4xl font-bold text-zinc-900 mb-6">{reduprocess}</h1>
      
      <div className="flex justify-center gap-4">
        <button onClick={()=>dispatch({type : "Inc"})} className="px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer">Increment</button>
        <button onClick={()=>dispatch({type : "Dec"})} className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md text-sm font-medium transition-colors cursor-pointer">Decrement</button>
        <button onClick={()=>dispatch({type : "Reset"})} className="px-4 py-2 bg-red-650 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors cursor-pointer">Reset</button>
      </div>
    </div>
  )
}

export default Counterre
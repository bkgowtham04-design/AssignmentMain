import React, { useReducer, useState } from 'react'

const datas =[]

const reducer = (state,action)=>{
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "Add":
      return [...state,action.payload]
    case "Del":
      console.log("Del");
      return state.filter((e)=>e.userid!==action.payload)
    case "Updated":
      return state.map((e)=>e.userid===action.payload.userid?action.payload:e)
    default:
      return state
  }
}

const Todora = () => {
  const [state,dispatch] = useReducer(reducer,datas)
  const [username,setUsername] = useState("")
  const [editid,setEditid] = useState(null)

  const handlechange =(e)=>{
    setUsername(e.target.value)
  }

  const handleadd =(e)=>{
    if (!username.trim()) return;
    const newdata = {
      userid:Date.now(),
      username:username
    }
    dispatch({
      type:"Add",
      payload:newdata
    })
    setUsername("")
  }

  const handleedit =(user)=>{
    setEditid(user.userid);
    setUsername(user.username);
  }

  const handledelete =(id)=>{
    dispatch({
      type:"Del",
      payload:id
    })
  }

  const handleupdate =()=>{
    if (!username.trim()) return;
    dispatch({
      type:"Updated",
      payload:{userid:editid, username:username}
    })
    setUsername("")
    setEditid(null)
  }

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">Todo with useReducer</h2>
      
      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder='Enter the Name ' 
          value={username} 
          onChange={handlechange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
        />
        {editid ? (
          <button onClick={handleupdate} className="px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer min-w-[70px]">Update</button>
        ) : (
          <button onClick={handleadd} className="px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer min-w-[70px]">Add</button>
        )}
      </div>

      <div className="space-y-2">
        {state.map((e)=>(
          <div key={e.userid} className="p-3 bg-gray-50 border border-gray-100 rounded-md flex justify-between items-center">
            <span className="text-sm font-medium text-gray-800">{e.username}</span>
            <div className="flex gap-2">
              <button onClick={()=>handleedit(e)} className="text-xs text-zinc-650 hover:text-zinc-900 font-medium">Edit</button>
              <span className="text-gray-300 text-xs">|</span>
              <button onClick={()=>handledelete(e.userid)} className="text-xs text-red-650 hover:text-red-800 font-medium">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todora
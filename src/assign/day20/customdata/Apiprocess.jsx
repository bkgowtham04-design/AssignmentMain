import React from 'react'
import useFeaching from '../hooks/useFeaching'

const Apiprocess = () => {
  const {showing,loading,setLoading,setShowing,search,setsearch,handlechange,searchshow,setSearchshow} = useFeaching("https://dummyjson.com/users")

  if (loading) {
    return <div className="text-center py-12"><h1 className="text-lg font-semibold text-gray-500">Loading...</h1></div>
  }

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-4 text-center font-semibold">User Search</h2>
      <input type="text" placeholder='Search The Name ' onChange={handlechange} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 mb-6" />

      <div className="space-y-3">
        {searchshow.map((e)=>(
          <div key={e.id} className="p-3 bg-gray-50 border border-gray-100 rounded-md">
            <p className="text-sm font-semibold text-gray-800">{e.firstName}</p>
            <p className="text-xs text-gray-500">Age: {e.age}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Apiprocess
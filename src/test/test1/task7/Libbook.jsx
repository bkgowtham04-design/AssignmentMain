import React, { useState, useEffect } from 'react'

const Libbook = () => {
  const [state, setState] = useState({ bookName: "", authorName: "", price: "" })
  const [showing, setShowing] = useState([])

  // Load existing details from localStorage on component mount
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("BookDetails")) || []
    setShowing(savedDetails)
  }, [])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    const datas = JSON.parse(localStorage.getItem("BookDetails")) || []
    datas.push(state)

    localStorage.setItem("BookDetails", JSON.stringify(datas))
    alert("Submitted Successfully")

    setState({ bookName: "", authorName: "", price: "" })

    const mean = JSON.parse(localStorage.getItem("BookDetails"))
    setShowing(mean)
  }

  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handlesummit} className="space-y-4">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">Library Book Management</h1>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Book Name</label>
            <input 
              type="text" 
              name="bookName" 
              placeholder="Enter Book Name" 
              value={state.bookName} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Author Name</label>
            <input 
              type="text" 
              name="authorName" 
              placeholder="Enter Author Name" 
              value={state.authorName} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Price</label>
            <input 
              type="text" 
              name="price" 
              placeholder="Enter Price" 
              value={state.price} 
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Save Book
        </button>
      </form>

      {showing.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-150">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Books List</h2>
          <div className="space-y-2">
            {showing.map((e, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-xs text-gray-700 font-semibold mb-0.5">Book Name: {e.bookName}</p>
                <p className="text-xs text-gray-600">Author: {e.authorName} | Price: {e.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Libbook

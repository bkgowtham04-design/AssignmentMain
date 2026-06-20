import React, { useState } from 'react'

const Search = () => {

  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          Search Box
        </h1>

        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search here..."
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <p className="text-gray-700 text-center">
          {search ? search : "Type to search..."}
        </p>

      </div>

    </div>
  )
}

export default Search
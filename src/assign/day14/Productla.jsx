import React, { useState } from 'react'

const Productla = () => {

  const [productee, setProductee] = useState("")

  const products = ["Laptop", "Laptop Stand", "Mouse", "Keyboard", "Mobile"];

  const handlechange = (e) => {
    setProductee(e.target.value)
  }

  const filterdata = products.filter((e) =>
    e.toLowerCase().includes(productee.toLowerCase())
  )

  return (
    <div className="flex flex-col items-center mt-10">

      {/* Input Box */}
      <input
        type="text"
        placeholder="Search Here..."
        onChange={handlechange}
        className="border border-gray-300 rounded-md px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Results */}
      <div className="mt-4 w-64">
        {filterdata.length > 0 ? (
          filterdata.map((e, i) => (
            <p
              key={i}
              className="bg-gray-100 p-2 rounded-md mb-2 hover:bg-gray-200 cursor-pointer"
            >
              {e}
            </p>
          ))
        ) : (
          <p className="text-gray-400 text-sm mt-2">No results found</p>
        )}
      </div>

    </div>
  )
}

export default Productla
import React, { useState } from 'react'

const ProductList = () => {

  const [product, setProduct] = useState("")
  const [products, setProducts] = useState([])

  const handleChange = (e) => {
    setProduct(e.target.value)
  }

  const handleAdd = () => {
    if (product.trim() === "") return

    setProducts([...products, product]) // add to array
    setProduct("") // clear input
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          Product List
        </h1>

        <input
          type="text"
          value={product}
          onChange={handleChange}
          placeholder="Enter product name"
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <button
          onClick={handleAdd}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        >
          Add Product
        </button>

        <ul className="mt-4">
          {products.length > 0 ? (
            products.map((item, index) => (
              <li 
                key={index}
                className="bg-gray-100 p-2 rounded-lg mb-2 text-center"
              >
                {item}
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No products added
            </p>
          )}
        </ul>

      </div>

    </div>
  )
}

export default ProductList
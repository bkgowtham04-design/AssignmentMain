import React, { useState } from 'react'

const Product = () => {
  const [product, setProduct] = useState(undefined)

  const handleClick = () => {
    setProduct({ name: "Laptop", price: 50000 })
  }

  return (
    <div className="text-center space-y-4">
      <button
        onClick={handleClick}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Load Product
      </button>
      {product ? (
        <div className="space-y-2">
          <p className="font-semibold text-slate-900">Product: {product.name}</p>
          <p className="text-slate-600">Price: ₹{product.price}</p>
        </div>
      ) : (
        <p className="text-slate-500">Click to load a product.</p>
      )}
    </div>
  )
}

export default Product
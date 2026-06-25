import React, { useState } from "react";

const Productf = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => [...prev, product]);
    setProduct({ name: "", price: "", category: "", brand: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      
     
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Product Form</h2>

        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="brand"
          value={product.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>

   
      <div className="mt-6 w-full max-w-md space-y-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-4 border"
          >
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600">Price: ₹{p.price}</p>
            <p className="text-gray-500">
              {p.category} • {p.brand}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Productf;
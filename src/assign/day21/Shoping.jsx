import React, { useMemo, useState } from "react";

const Shoping = () => {
  console.log("Component Rendered");

  const [theme, setTheme] = useState(false);

  const [cart, setCart] = useState([
    { id: 1, name: "Shirt", price: 500, quantity: 2 },
    { id: 2, name: "Shoes", price: 1500, quantity: 1 },
    { id: 3, name: "Watch", price: 1000, quantity: 3 },
  ]);

  
  const totalAmount = useMemo(() => {
    console.log("Calculating Total...");
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cart]); 

  
  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
     
    >
      <h1> Shopping Cart</h1>

      <button onClick={handleTheme}>
        Switch to {theme ? "Light" : "Dark"} Theme
      </button>

      <hr />

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}

      <hr />

      <h2>Grand Total: ₹{totalAmount}</h2>
    </div>
  );
};

export default Shoping;
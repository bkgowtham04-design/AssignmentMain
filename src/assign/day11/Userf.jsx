import React, { useState } from "react";

const Userf = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, user]);
    setUser({ name: "", email: "", mobile: "", address: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">

      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">User Form</h2>

        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="mobile"
          value={user.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="address"
          value={user.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Add User
        </button>
      </form>

     
      <div className="mt-6 w-full max-w-md space-y-4">
        <h3 className="text-lg font-semibold">All Users</h3>

        {users.map((u, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow border">
            <p className="font-semibold">{u.name}</p>
            <p className="text-gray-600">{u.email}</p>
            <p className="text-gray-500">{u.mobile}</p>
            <p className="text-gray-500">{u.address}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Userf;
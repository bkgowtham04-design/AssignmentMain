import React, { useState } from "react";

const Employes = () => {
  const [emp, setEmp] = useState({
    name: "",
    id: "",
    dept: "",
    salary: "",
  });

  const [emps, setEmps] = useState([]);

  const handleChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmps((prev) => [...prev, emp]);
    setEmp({ name: "", id: "", dept: "", salary: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Employee Form</h2>

        <input
          name="name"
          value={emp.name}
          onChange={handleChange}
          placeholder="Employee Name"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="id"
          value={emp.id}
          onChange={handleChange}
          placeholder="Employee ID"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="dept"
          value={emp.dept}
          onChange={handleChange}
          placeholder="Department"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="salary"
          value={emp.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Employee
        </button>
      </form>

      
      <div className="mt-6 w-full max-w-md space-y-4">
        {emps.map((e, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-4 border"
          >
            <h3 className="font-semibold text-lg">
              {e.name} ({e.id})
            </h3>
            <p className="text-gray-600">Department: {e.dept}</p>
            <p className="text-gray-500">Salary: ₹{e.salary}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Employes;
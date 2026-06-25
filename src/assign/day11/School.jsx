import React, { useState } from "react";

const School = () => {
  const [school, setSchool] = useState({
    name: "",
    principal: "",
    city: "",
    totalStudents: "",
  });

  const [schools, setSchools] = useState([]);

  const handleChange = (e) => {
    setSchool({ ...school, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSchools((prev) => [...prev, school]);
    setSchool({ name: "", principal: "", city: "", totalStudents: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">

     
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">School Form</h2>

        <input
          name="name"
          value={school.name}
          onChange={handleChange}
          placeholder="School Name"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="principal"
          value={school.principal}
          onChange={handleChange}
          placeholder="Principal Name"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="city"
          value={school.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="totalStudents"
          value={school.totalStudents}
          onChange={handleChange}
          placeholder="Total Students"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add School
        </button>
      </form>

    
      <div className="mt-6 w-full max-w-md space-y-4">
        {schools.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-4 border"
          >
            <h3 className="font-semibold text-lg">{s.name}</h3>
            <p className="text-gray-600">Principal: {s.principal}</p>
            <p className="text-gray-500">City: {s.city}</p>
            <p className="text-gray-500">
              Students: {s.totalStudents}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default School;
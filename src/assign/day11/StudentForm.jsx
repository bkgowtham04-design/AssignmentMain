import React, { useState } from "react";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    city: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prev) => [...prev, student]);
    setStudent({ name: "", age: "", course: "", city: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">

    
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Student Form</h2>

        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Course"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="city"
          value={student.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Student
        </button>
      </form>

    
      <div className="mt-6 w-full max-w-md space-y-4">
        <h3 className="text-lg font-semibold">All Students</h3>

        {students.map((s, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 border"
          >
            <p className="font-semibold">{s.name}</p>
            <p className="text-gray-600">Age: {s.age}</p>
            <p className="text-gray-500">Course: {s.course}</p>
            <p className="text-gray-500">City: {s.city}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default StudentForm;
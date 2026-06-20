import React, { useState } from 'react'

const StudentForm = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [course, setCourse] = useState("")
  const [city, setCity] = useState("")

  const [student, setStudent] = useState(null)

  const handleClick = () => {
    setStudent({
      name,
      age,
      course,
      city
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          Student Registration
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <button
          onClick={handleClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          Register
        </button>

        {student && (
          <div className="mt-4 text-center">
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <p>City: {student.city}</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default StudentForm
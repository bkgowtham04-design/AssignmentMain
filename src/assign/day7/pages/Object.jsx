import { useState } from "react"
import course from '../../../assets/profile.jpg'

const Object = () => {
  const [obj, setObj] = useState({
    image: course,
    name: "Gowtham",
    year: 2004,
    Age: "18",
    Email: "bkgowtham04@gmail.com",
    course: { name: "FullStack" }
  })

  const updateObj = () => {
    setObj({ ...obj, year: 2005 })
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
          <button 
            onClick={updateObj}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Year
          </button>
        </div>

        {/* User Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={obj.image} 
              alt={obj.name}
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />
            <h2 className="text-xl font-bold">{obj.name}</h2>
          </div>

          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium">Year:</span> {obj.year}</p>
            <p><span className="font-medium">Age:</span> {obj.Age}</p>
            <p><span className="font-medium">Email:</span> {obj.Email}</p>
            <p>
              <span className="font-medium">Course:</span> 
              <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {obj.course.name}
              </span>
            </p>
          </div>

          <button className="mt-4 bg-gray-200 text-gray-800 px-4 py-1 rounded hover:bg-gray-300">
            More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Object
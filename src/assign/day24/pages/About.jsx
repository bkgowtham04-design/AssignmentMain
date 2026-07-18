import React from 'react'

const About = () => {
  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">About Page ℹ️</h1>
      <p className="text-sm text-gray-500">This view was loaded dynamically using React.lazy() and Suspense.</p>
    </div>
  )
}

export default About
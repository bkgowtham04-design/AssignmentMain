import React, { useState } from 'react'

const Feedback = () => {

  const [feedback, setFeedback] = useState("")
  const [showFeedback, setShowFeedback] = useState("")

  const handleChange = (e) => {
    setFeedback(e.target.value)
  }

  const handleClick = () => {
    setShowFeedback(feedback)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          Feedback Form
        </h1>

        <textarea
          value={feedback}
          onChange={handleChange}
          placeholder="Enter your feedback..."
          rows="4"
          className="w-full px-4 py-2 border rounded-lg mb-3 resize-none"
        />

        <button
          onClick={handleClick}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg"
        >
          Submit Feedback
        </button>

        <p className="mt-4 text-gray-700 text-center">
          {showFeedback ? showFeedback : "No feedback submitted"}
        </p>

      </div>

    </div>
  )
}

export default Feedback
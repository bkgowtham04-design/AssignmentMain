import React, { useState } from 'react'

const ContactForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [message, setMessage] = useState("")

  const [data, setData] = useState(null)

  const handleSubmit = () => {
    setData({
      name,
      email,
      mobile,
      message
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-md w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          Contact Form
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <input
          type="number"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="3"
          className="w-full px-4 py-2 border rounded-lg mb-3"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg"
        >
          Submit
        </button>

        {data && (
          <div className="mt-4 text-center">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Mobile:</strong> {data.mobile}</p>
            <p><strong>Message:</strong> {data.message}</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default ContactForm
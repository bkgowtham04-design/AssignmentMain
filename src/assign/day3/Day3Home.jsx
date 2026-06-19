import React from 'react'
import Student from './Student'
import App from './App'

const Day3Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-8 shadow">
          <h1 className="text-3xl font-semibold text-slate-900">Assignment 3 — Day 3</h1>
          <p className="mt-2 text-slate-600">Rendered using the Day3 App data/components below.</p>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <App />
        </div>
      </div>
    </div>
  )
}

export default Day3Home

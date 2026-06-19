import React from 'react'
import Student from './Student'
import Product from './Product'
import Counter from './Counter'
import Login from './Login'
import Mobile from './Mobile'
import Salary from './Salary'
import Userdata from './Userdata'
import Paragraph from './Paragraph'
import AgeIncrement from './AgeIncrement'
import Modechange from './Modechange'

const Day6Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-4xl font-semibold text-slate-900">Assignment 6 — Day 6</h1>
          <p className="mt-3 text-slate-600">A polished preview of Day 6 state and interaction examples.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Student Name Toggle</h2>
            <Student name="Gowtham" age={22} course="MERN" city="Chennai" />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Product Loader</h2>
            <Product />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Counter</h2>
            <Counter />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Login Toggle</h2>
            <Login />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Mobile Show</h2>
            <Mobile />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Salary Increase</h2>
            <Salary />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">User Data</h2>
            <Userdata />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Paragraph Toggle</h2>
            <Paragraph />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Age Increment</h2>
            <AgeIncrement />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Mode Toggle</h2>
            <Modechange />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Day6Home

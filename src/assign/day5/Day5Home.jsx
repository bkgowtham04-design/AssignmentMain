import React from 'react'
import Welcome from './Welcome'
import LifecycleDemo from './LifecycleDemo'
import UseStateDemo from './hooks/UseStateDemo'
import ObjectState from './hooks/ObjectState'
import Change from './hooks/Change'

const Day5Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-8 shadow">
          <h1 className="text-3xl font-semibold text-slate-900">Assignment 5 — Hooks & Effects</h1>
          <p className="mt-2 text-slate-600">Interactive hook demos and lifecycle examples.</p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <Welcome />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <LifecycleDemo />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <UseStateDemo />
          </div>
          
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <ObjectState />
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <Change />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Day5Home

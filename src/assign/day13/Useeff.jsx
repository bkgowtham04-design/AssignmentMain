import React, { useEffect } from 'react'

const Useeff = () => {
  useEffect(() => {
    console.log("Component Loaded");
  }, [])

  return (
    <>
      <h1 className="text-center my-8 text-zinc-900 font-semibold text-lg">To Console</h1>
    </>
  )
}

export default Useeff
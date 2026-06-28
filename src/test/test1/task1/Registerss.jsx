import React, { useState, useEffect } from 'react'

const Registerss = () => {
  const [state, setState] = useState({ username: "", userage: "", usercourse: "", usercity: "" })
  const [showing, setShowing] = useState([])

  // Load existing details from localStorage on component mount
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("UserDetails")) || []
    setShowing(savedDetails)
  }, [])

  const handlechange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    // Validate inputs
    if (!state.username || !state.userage || !state.usercourse || !state.usercity) {
      alert("Please fill in all fields")
      return
    }

    const datas = JSON.parse(localStorage.getItem("UserDetails")) || []
    const updatedDatas = [...datas, state]

    localStorage.setItem("UserDetails", JSON.stringify(updatedDatas))
    alert("Submitted Successfully")

    // Update list display
    setShowing(updatedDatas)

    // Reset form inputs
    setState({ username: "", userage: "", usercourse: "", usercity: "" })
  }

  return (
    <div>
      <form onSubmit={handlesummit}>
        <h1>Form Register</h1>
        
        <div>
          <div>
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Enter The Name" 
              name="username" 
              value={state.username}
              onChange={handlechange} 
            />
          </div>

          <div>
            <label>Age</label>
            <input 
              type="text" 
              placeholder="Enter The Age" 
              name="userage" 
              value={state.userage}
              onChange={handlechange} 
            />
          </div>

          <div>
            <label>Course</label>
            <input 
              type="text" 
              placeholder="Enter The Course" 
              name="usercourse" 
              value={state.usercourse}
              onChange={handlechange} 
            />
          </div>

          <div>
            <label>City</label>
            <input 
              type="text" 
              placeholder="Enter Your City" 
              name="usercity" 
              value={state.usercity}
              onChange={handlechange} 
            />
          </div>
        </div>

        <button type="submit">
          Register
        </button>
      </form>

      {/* Showing Registered Users */}
      {showing.length > 0 && (
        <div>
          <h2>Registered Users</h2>
          <div>
            {showing.map((user, index) => (
              <div key={index}>
                <div>
                  <span>{user.username}</span>
                  <span>Age: {user.userage}</span>
                </div>
                <div>
                  <span>Course: {user.usercourse}</span>
                  <span>City: {user.usercity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Registerss
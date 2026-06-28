import React, { useState, useEffect } from 'react'

const Empman = () => {
  const [state, setState] = useState({ empName: "", empId: "", empDept: "", empSalary: "" })
  const [showing, setShowing] = useState([])

  // Load existing details from localStorage on component mount
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("EmployeeDetails")) || []
    setShowing(savedDetails)
  }, [])

  const handlechange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesummit = (e) => {
    e.preventDefault()

    // Validate inputs
    if (!state.empName || !state.empId || !state.empDept || !state.empSalary) {
      alert("Please fill in all fields")
      return
    }

    const datas = JSON.parse(localStorage.getItem("EmployeeDetails")) || []
    const updatedDatas = [...datas, state]

    localStorage.setItem("EmployeeDetails", JSON.stringify(updatedDatas))
    alert("Submitted Successfully")

    // Update list display
    setShowing(updatedDatas)

    // Reset form inputs
    setState({ empName: "", empId: "", empDept: "", empSalary: "" })
  }

  return (
    <>
      <div>
        <form onSubmit={handlesummit}>
          <h1>Employee Management System</h1>
          
          <div>
            <div>
              <label>Employee Name</label>
              <input 
                type="text" 
                placeholder="Enter Employee Name" 
                name="empName" 
                value={state.empName}
                onChange={handlechange} 
              />
            </div>

            <div>
              <label>Employee ID</label>
              <input 
                type="text" 
                placeholder="Enter Employee ID" 
                name="empId" 
                value={state.empId}
                onChange={handlechange} 
              />
            </div>

            <div>
              <label>Department</label>
              <input 
                type="text" 
                placeholder="Enter Department" 
                name="empDept" 
                value={state.empDept}
                onChange={handlechange} 
              />
            </div>

            <div>
              <label>Salary</label>
              <input 
                type="number" 
                placeholder="Enter Salary" 
                name="empSalary" 
                value={state.empSalary}
                onChange={handlechange} 
              />
            </div>
          </div>

          <button type="submit">
            Register Employee
          </button>
        </form>

        {/* List of employees in a table */}
        {showing.length > 0 && (
          <div>
            <h2>Employee List</h2>
            <table border="1" cellPadding="5" cellSpacing="0">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Department</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {showing.map((emp, index) => (
                  <tr key={index}>
                    <td>{emp.empId}</td>
                    <td>{emp.empName}</td>
                    <td>{emp.empDept}</td>
                    <td>{emp.empSalary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default Empman
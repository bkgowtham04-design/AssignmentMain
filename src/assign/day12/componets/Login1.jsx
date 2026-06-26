import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login1 = () => {

    const navigate = useNavigate()

    const [login, setLogin] = useState({ useremail: "", userpassword: ""})
    const [showing1, setShowing1] = useState([])

    const handlechange = (e) => {
       setLogin({...login, [e.target.name]: e.target.value})
    }

    const handlesummit = (e) => {
        e.preventDefault()

        if (login.useremail === "" || login.userpassword === "") {
            alert("Fill the Empty input")
            return
        } 

        const datas = JSON.parse(localStorage.getItem("userdetails")) || []

        const checkauth = datas.find((e) => e.useremail === login.useremail && e.userpassword === login.userpassword)

        if (!checkauth) {
            alert('User Not a register Users')
            return
        }

        localStorage.setItem("auth", JSON.stringify(checkauth))
        

        setShowing1([])
        navigate("/day12/dashboard")
    }

  return (
    <>
    <div>
        <h1>Login Form</h1>
        <form onSubmit={handlesummit}>
           
            <input type="text" name='useremail' placeholder='Enter Your Email' onChange={handlechange} value={login.useremail}  />
            <input type="text" name='userpassword' placeholder='Enter Your Password' onChange={handlechange} value={login.userpassword}  />
            <input type="submit" value={"Login"}/>
        </form>
    </div>
    </>
  )
}

export default Login1
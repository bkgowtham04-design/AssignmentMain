import React, { useState } from 'react'

const Todoser = () => {

  const [showing,setShowing] = useState({username : "",usermobile : "", userpass : ""})

  const [formdata,setFormdata] = useState([])

  const [useredit,SetUseredit] =useState(null)

  const [search,setSearch] = useState("")

  const handlechange =(e)=>{
    setShowing({...showing,[e.target.name] : e.target.value})
  }

  const handlesubmit =(e)=>{
    e.preventDefault()

    const datas = {id : Date.now(),...showing}

    console.log(datas);

    setFormdata((prev)=>[...prev ,datas])

    setShowing({username : "",usermobile : "", userpass : ""})
  }

  const handleedit =(userid)=>{
    const dataedit = formdata.find((e)=>e.id === userid)

    setShowing({ 
      username:dataedit.username,
      usermobile:dataedit.usermobile,
      userpass:dataedit.userpass
    })

    SetUseredit(userid)
  }

  const deletedata =(userid)=>{
    const dataremove = formdata.filter((e)=>e.id !== userid)
    setFormdata(dataremove)
  }

  const handleupdate =(e)=>{
    e.preventDefault()

    const updatedata = formdata.map((e) =>
      e.id === useredit ? { ...e, ...showing } : e
    )

    setFormdata(updatedata)

    SetUseredit(null)

    setShowing({username : "",usermobile : "", userpass : ""})
  }

  return (
    <>

      {/* ✅ FIXED SEARCH */}
      <input 
        type="text" 
        placeholder='Search The Name' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)} 
      />

      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter The Name' onChange={handlechange} value={showing.username} name='username' />
        <input type="text" placeholder='Enter The mobile' onChange={handlechange} value={showing.usermobile} name='usermobile' />
        <input type="text" placeholder='Enter The Password' onChange={handlechange} value={showing.userpass} name='userpass' />

        {useredit === null
          ? <button type='submit'>Add</button>
          : <button onClick={handleupdate}>Update</button>
        }
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {formdata
            .filter((e)=>e.username.toLowerCase().includes(search.toLowerCase()))
            .map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.username}</td>
                <td>{e.usermobile}</td>
                <td>{e.userpass}</td>
                <td>
                  <button onClick={()=>handleedit(e.id)} >Edit</button>
                  <button onClick={()=>deletedata(e.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default Todoser
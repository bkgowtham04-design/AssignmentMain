import React, { useState } from 'react'

const Proman = () => {

      const [state, setState] = useState({ proname: "", proprice: "", procategory: "", prosalary: "" })
      const [showing, setShowing] = useState([])


      const handlechange =(e)=>{
        setState({...state , [e.target.name] : e.target.value})


      }

      const handlesummit =(e)=>{

          e.preventDefault()

        const datas = JSON.parse(localStorage.getItem("productdetials")) || []

        datas.push(state)

        console.log(datas);
        

        localStorage.setItem("productdetials" , JSON.stringify(datas))

        alert("Summited Sucessfully")

        setShowing({ proname: "", proprice: "", procategory: "", prosalary: "" })

            const mean =  JSON.parse(localStorage.getItem("productdetials")) 

         setShowing(mean)



      }
  return (
   <>
   <form onSubmit={handlesummit}>
          <h1>Product Management System</h1>
          
   <div>
            <div>
              <label>Product Name</label>
              <input type="text"  placeholder="Enter Product Name"  name="proname"   value={state.proname} onChange={handlechange} />
            </div>

            <div>
              <label>Price</label>
              <input  type="text"  placeholder="Enter Price"  name="proprice"   value={state.proprice} onChange={handlechange}  />
            </div>

            <div>
              <label>Category</label>
              <input  type="text"  placeholder="Enter Category"  name="procategory"  value={state.procategory} onChange={handlechange}  />
            </div>

            <div>
              <label>Brand</label>
              <input  type="text"  placeholder="Enter Brand"  name="prosalary"  value={state.prosalary} onChange={handlechange}   />
            </div>

    </div>

          <button type="submit"> Product </button>
        </form>


       <div>
         {showing.map((e,i) => (

            <div key={i}>

                <p>{e.proname}</p>
                <p>{e.proprice}</p>
                <p>{e.procategory}</p>
                <p>{e.prosalary}</p>

            </div>

        ))}
       </div>

       
   
   </>
  )
}

export default Proman
import React, { useContext } from 'react'
import Productcontext from '../context/Productcontext'

const Productdata = () => {

const { productshow, handlechange } = useContext(Productcontext)

return (
<> <div> <div>
{productshow.map((e) => ( 
    <div key={e.id}>
         <p>{e.id}</p> 
         
         <p>{e.title}</p> 
         <p>{e.price}</p> 
         </div>
))} </div>


    <div>
      <button onClick={handlechange}>Click For Product</button>
    </div>
  </div>
</>


)
}

export default Productdata

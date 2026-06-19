import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
<div className="bg-blue-400 p-4">
    <Logo/>
    <Links/>
    
    
   
</div>

<div>
  
</div>
    
    </>
  )
}

export default Navbar


const Logo =()=>{

   return(<>
    <div className="w-15 mx-20 ">


        <img src="./logo.jpg" alt="image" />

       
    </div>
   
   
   </>)
}

const Links =()=>{
      return(<>
  <div className="flex gap-4">
    <Link to="/day1" className="text-white">Home</Link>
    <Link to="/day1/profile" className="text-white">Profile</Link>
    <Link to="/day1/company" className="text-white">Company</Link>
    <Link to="/day1/employee" className="text-white">Employee</Link>
    <Link to="/day1/movie" className="text-white">Movie</Link>
    <Link to="/day1/product" className="text-white">Product</Link>
  </div>

  
  </>)
}
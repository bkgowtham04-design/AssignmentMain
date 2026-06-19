import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white flex p-3 gap-10 shadow-xl">
      <div className="mx-10 bg-white p-1 rounded w-25 text-black text-center">
        Logo
      </div>
      <div className="mx-10 flex gap-10">
        <Link to="/day7/home">Home</Link>
        
        <Link to="/day7/object">Object</Link>
        <Link to="/day7/array">Array</Link>
        <Link to="/day7/arrobj">Array of Object</Link>
      </div>
    </div>
  )
}

export default Navbar
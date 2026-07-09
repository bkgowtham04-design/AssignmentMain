import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/day19");
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Home Page 🎉</h1>
      <p className="text-sm text-gray-600 mb-6">You are successfully authenticated using AuthContext!</p>
      
      <div className="flex justify-center gap-4">
        <Link 
          to="/day19/profile" 
          className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          View Profile
        </Link>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
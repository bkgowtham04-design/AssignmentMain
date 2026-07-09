import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/day19");
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-4">User Profile</h2>
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Email Address</p>
        <p className="text-sm text-gray-800 font-medium">{user?.email}</p>
      </div>
      
      <div className="flex justify-center gap-4">
        <Link 
          to="/day19/home" 
          className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Back Home
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

export default Profile;

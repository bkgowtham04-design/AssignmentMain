import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login(form.email, form.password)) {
      alert("Login Success");
      navigate("/day19/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md text-sm font-medium transition-colors cursor-pointer"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-gray-600">
        Don't have account?{" "}
        <Link to="/day19/register" className="text-zinc-950 font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
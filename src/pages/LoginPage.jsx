import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function LoginPage() {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      Navigate("/todolist");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-500">
      <div className="bg-slate-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-80">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg  bg-slate-700 text-white focus:outline-none focus:right-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg  bg-slate-700 text-white focus:outline-none focus:right-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-slate-600 hover:bf-slate-500 text-white py-3 rounded-lg font-semibold transition"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

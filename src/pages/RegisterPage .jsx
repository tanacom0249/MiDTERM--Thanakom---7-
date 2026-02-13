import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password === form.confirm && form.username) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="bg-slate-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-80">
        <h1 className="text-3xl font-bold text-white mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            className="w-full p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="confirm password"
            className="w-full p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-slate-600 hover:bf-slate-500 text-white py-3 rounded-lg font-semibold transition"
            onClick={handleSubmit}
          >
            SiGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

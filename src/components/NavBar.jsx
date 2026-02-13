import React from "react";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <div className="bg-blue-400 h-20 px-8 flex justify-center items-center shadow-md">
      <div className="flex gap-6 font-semibold">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/todolist">Todolist</NavLink>
      </div>
    </div>
  );
}

export default NavBar;

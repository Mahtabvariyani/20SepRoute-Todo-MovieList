// src/components/Navbar.jsx

import { Link, NavLink } from "react-router-dom";  


function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink to="/home" className={({ isActive }) => isActive ? "selected" : ""}>
          Home
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          About
        </NavLink>
        
        <NavLink 
          to="/project" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          Projects
        </NavLink>


        <NavLink 
          to="/todolist" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          ToDoList
        </NavLink>


        <NavLink 
          to="/card" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          card
        </NavLink>


        <NavLink 
          to="/movielist" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          movielist
        </NavLink>
        
        
      </ul>
      
    </nav>
  );
}

export default Navbar;

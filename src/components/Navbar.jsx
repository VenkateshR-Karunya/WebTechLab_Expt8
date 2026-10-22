import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/register", label: "Register" },
  { to: "/login", label: "Login" },
  { to: "/students", label: "Students" }
];

// Reusable navigation bar - NavLink changes the page without reloading it
function Navbar() {
  return (
    <header>
      <h1>🌿 The Green Thumb Journal</h1>
      <nav>
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;

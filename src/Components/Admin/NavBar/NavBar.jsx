import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

// ICONS

import { FaTable } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";

function NavBar({ title, children }) {
  return (
    <nav className="admin-nav">
      <div className="nav-left">
        <h3>{title}</h3>
      </div>
      <div className="nav-right">
        <ul>{children}</ul>
        <button>Update</button>
      </div>
    </nav>
  );
}

export default NavBar;

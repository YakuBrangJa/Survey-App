import React, { useRef, useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

// ICONS
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaTable } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

// CUSTOM HOOKS
import useOnClickOutside from "../../../hooks/useOnClickOutside";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const sidebarRef = useRef();

  const sidebarToggleHandler = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };

  // CLOSE SIDEBAR ON CLICKED OUTSIDE
  // useOnClickOutside(sidebarRef, () => setSidebarOpen(false), sidebarOpen);

  const selectedTab = ({ isActive }) => {
    return {
      backgroundColor: isActive && "#555555",
      color: isActive && "#0a8ff5",
    };
  };

  return (
    <nav
      className={`admin-sidebar ${!sidebarOpen && "collapse"}`}
      ref={sidebarRef}
    >
      <div className="sidebar-top">
        <div className="admin-profile">
          <BsPersonCircle className="icon" />
          <div>Admin</div>
        </div>
      </div>

      <ul className="sidebar-mid">
        <li>
          <NavLink to="/admin/summary" style={selectedTab}>
            <BsFillGrid1X2Fill className="icon" />
            <span>Respondent Summary</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/table" style={selectedTab}>
            <FaTable className="icon" />
            <span>Table</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/analyse" style={selectedTab}>
            <BsBarChartLineFill className="icon" />
            <span>Analyse</span>
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-bottom">
        <div className="sidebar-toggle" onClick={sidebarToggleHandler}>
          <IoIosArrowForward className="icon" />
          <span>Hide</span>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;

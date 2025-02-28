import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  FaSignOutAlt,
  FaTachometerAlt,
  FaCogs,
  FaUsers,
  FaBars,
  FaClipboardList,
} from "react-icons/fa";
import "../styles/Admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Firstclusive Admin");
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <h3 className={`${isSidebarCollapsed ? "hidden" : ""}`}>
            Admin Panel
          </h3>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink to="/admin/dashboard">
                <FaTachometerAlt /> {isSidebarCollapsed ? "" : "Dashboard"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/content-management">
                <FaClipboardList />{" "}
                {isSidebarCollapsed ? "" : "Content Management"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/user-management">
                <FaUsers /> {isSidebarCollapsed ? "" : "User Management"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings">
                <FaCogs /> {isSidebarCollapsed ? "" : "Settings"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="dashboard-container">
        <div className="admin-navbar">
          <h1>Welcome, {username}</h1>
          <button className="logout-btn" onClick={handleSignOut}>
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
        <div className="content-section">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;

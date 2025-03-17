import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/admin");
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-header">
        <h1>Admin Dashboard</h1>
      </div>
      <button className="sign-out-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default AdminNavbar;

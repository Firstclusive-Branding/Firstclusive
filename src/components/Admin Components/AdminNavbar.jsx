import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin Styles/AdminNavbar.css";
import { toast } from "react-toastify";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("admin-auth");
    toast.success("Signed out successfully!");

    navigate("/admin", { replace: true });
  };

  return (
    <nav className="admin-navbar">
      <h1 className="admin-navbar-welcome">Welcome, Admin</h1>
      <button className="admin-navbar-signout" onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default AdminNavbar;

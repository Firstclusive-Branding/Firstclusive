import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin Styles/AdminNavbar.css";
import { toast } from "react-toastify";
import { FaPowerOff } from "react-icons/fa6";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("admin-token");
    localStorage.removeItem("public-token");

    toast.clearWaitingQueue();
    toast.success("Signed out successfully!");

    navigate("/admin", { replace: true });
  };

  return (
    <nav className="admin-navbar">
      <h1 className="admin-navbar-welcome">Welcome, Admin</h1>
      <button className="admin-navbar-signout" onClick={handleSignOut}>
        <FaPowerOff size={20} /> Log Out
      </button>
    </nav>
  );
};

export default AdminNavbar;

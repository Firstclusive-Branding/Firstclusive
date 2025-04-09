import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/Admin Styles/AdminSidebar.css";
import FBLogo from "../../assets/FBLogo3A.svg";

// Import icons
import { MdDashboard, MdWork } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        <img src={FBLogo} alt="firstclusive logo" />
      </div>
      <ul className="admin-sidebar-menu">
        <li
          className={isActive("/admin/dashboard") ? "active" : ""}
          onClick={() => navigate("/admin/dashboard")}
        >
          <MdDashboard className="admin-sidebar-icon" /> Dashboard
        </li>
        <li
          className={isActive("/admin/manage-jobs") ? "active" : ""}
          onClick={() => navigate("/admin/manage-jobs")}
        >
          <MdWork className="admin-sidebar-icon" /> Jobs
        </li>
        <li
          className={isActive("/admin/manage-team") ? "active" : ""}
          onClick={() => navigate("/admin/manage-team")}
        >
          <IoIosPeople className="admin-sidebar-icon" /> Team
        </li>
        <li
          className={isActive("/admin/manage-blogs") ? "active" : ""}
          onClick={() => navigate("/admin/manage-blogs")}
        >
          <FaBlogger className="admin-sidebar-icon" /> Blogs
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;

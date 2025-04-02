import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin Styles/AdminSidebar.css";
import FBLogo from "../../assets/FBLogo3A.svg";

// Import icons
import {
  MdDashboard,
  MdPeople,
  MdWork,
  MdAssignment,
  MdSettings,
} from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        <img src={FBLogo} alt="firstclusive logo" />
      </div>
      <ul className="admin-sidebar-menu">
        <li onClick={() => navigate("/admin/dashboard")}>
          <MdDashboard className="admin-sidebar-icon" /> Dashboard
        </li>
        <li>
          <MdPeople className="admin-sidebar-icon" /> Users
        </li>
        <li onClick={() => navigate("/admin/manage-jobs")}>
          <MdWork className="admin-sidebar-icon" /> Jobs
        </li>{" "}
        <li onClick={() => navigate("/admin/manage-team")}>
          <IoIosPeople className="admin-sidebar-icon" /> Team
        </li>
        <li>
          <MdAssignment className="admin-sidebar-icon" /> Applications
        </li>
        <li>
          <MdSettings className="admin-sidebar-icon" /> Settings
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;

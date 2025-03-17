import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  FileText,
  UserCog,
  Settings,
  Users,
} from "lucide-react";
import "../styles/AdminSidebar.css";
import LogoWide from "../assets/FBLogo3A.png";
import LogoSquare from "../assets/FBLogo3.png";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`admin-sidebar ${isOpen ? "open" : "collapsed"}`}
    >
      {/* Logo */}
      <div className="admin-sidebar-logo">
        <img
          src={isOpen ? LogoWide : LogoSquare}
          alt="Company Logo"
          className={`admin-sidebar-logo-img ${
            isOpen ? "rectangle" : "square"
          }`}
        />
      </div>

      {/* Navigation Links */}
      <nav className="admin-sidebar-nav">
        <a className="admin-sidebar-item" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
          {isOpen && <span>Close</span>}
        </a>
        <Link to="/admin/dashboard" className="admin-sidebar-item">
          <LayoutDashboard size={28} />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link to="/admin/content-management" className="admin-sidebar-item">
          <FileText size={28} />
          {isOpen && <span>Content Management</span>}
        </Link>
        <Link to="/admin/user-management" className="admin-sidebar-item">
          <UserCog size={28} />
          {isOpen && <span>Users</span>}
        </Link>
        <Link to="/admin/team" className="admin-sidebar-item">
          <Users size={28} />
          {isOpen && <span>Team</span>}
        </Link>
        <Link to="/admin/settings" className="admin-sidebar-item">
          <Settings size={28} />
          {isOpen && <span>Settings</span>}
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;

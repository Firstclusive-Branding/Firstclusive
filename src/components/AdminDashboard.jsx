import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUsers, FaClipboardList, FaEnvelope, FaCog } from "react-icons/fa";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 1200,
    posts: 350,
    messages: 45,
  });

  const [recentActivities, setRecentActivities] = useState([
    "New user registered: John Doe",
    "Admin updated site settings",
    "New message received from a client",
    "5 new content posts added",
  ]);

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>Welcome, Firstclusive Admin</h2>
      </div>

      {/* Stats Section */}
      <div className="stats-grid">
        <div className="stat-card">
          <FaUsers size={30} color="#0E0E0E" />
          <div>
            <h3>{stats.users}</h3>
            <p>Total Users</p>
          </div>
        </div>
        <div className="stat-card">
          <FaClipboardList size={30} color="#0E0E0E" />
          <div>
            <h3>{stats.posts}</h3>
            <p>Content Posts</p>
          </div>
        </div>
        <div className="stat-card">
          <FaEnvelope size={30} color="#0E0E0E" />
          <div>
            <h3>{stats.messages}</h3>
            <p>Messages</p>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul className="activities-list">
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <NavLink to="/admin/user-management">
          <button>Manage Users</button>
        </NavLink>
        <NavLink to="/admin/content-management">
          <button>Manage Content</button>
        </NavLink>
        <NavLink to="/admin/settings">
          <button>Settings</button>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminDashboard;

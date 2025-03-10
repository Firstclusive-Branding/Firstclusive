import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/ContentManagement.css";

const ContentManagement = () => {
  const location = useLocation();

  return (
    <div className="content-management-container">
      <h2>Content Management</h2>
      <p>Manage website content such as text, images, etc.</p>

      <nav className="content-management-nav">
        <ul>
          <li className={location.pathname.includes("team") ? "active" : ""}>
            <Link to="team">Team Members</Link>
          </li>
          <li className={location.pathname.includes("careers") ? "active" : ""}>
            <Link to="careers">Careers</Link>
          </li>
          <li
            className={
              location.pathname.includes("job-applicants") ? "active" : ""
            }
          >
            <Link to="job-applicants">Job Applicants</Link>
          </li>
        </ul>
      </nav>

      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default ContentManagement;

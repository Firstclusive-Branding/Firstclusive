import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
// import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import NotFound from "./components/NotFound";
import AdminDashboard from "./components/AdminDashboard";
import ContentManagement from "./components/ContentManagement";
import UserManagement from "./components/UserManagement";
import Settings from "./components/Settings";
import ContactUs from "./components/ContactUs";
import OurServices from "./components/OurServices";
import Careers from "./components/Careers";
import JobApply from "./components/JobApply";
import OurLocation from "./components/OurLocation";
import OurTeam from "./components/OurTeam";
import CompanyHistory from "./components/CompanyHistory";
import OurPortfolio from "./components/OurPortfolio";
import MissionandVision from "./components/MissionandVision";
import ManageTeamMembers from "./components/ManageTeamMembers";
import ManageCareers from "./components/ManageCareers";
import ManageJobApplicants from "./components/ManageJobApplicants";
import FloatingIcons from "./components/FloatingIcons";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/AdminNavbar";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingIcons />
    </div>
  );
};

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <AdminSidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

// 🔹 Updated AdminRoute for localStorage-based authentication
const AdminRoute = ({ element }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    console.log("AdminRoute Check:", { token, role });

    if (!token || role !== "admin") {
      console.log(
        "Redirecting to /admin login due to missing or incorrect role"
      );
      navigate("/admin", { replace: true });
    }
  }, [navigate, token, role]);

  return token && role === "admin" ? element : null;
};

// 🔹 Updated Router Configuration
const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/our-services", element: <OurServices /> },
      { path: "/careers", element: <Careers /> },
      { path: "/careers/apply", element: <JobApply /> },
      { path: "/our-location", element: <OurLocation /> },
      { path: "/our-team", element: <OurTeam /> },
      { path: "/company-history", element: <CompanyHistory /> },
      { path: "/our-portfolio", element: <OurPortfolio /> },
      { path: "/mission-and-vision", element: <MissionandVision /> },
    ],
  },
  {
    path: "/admin",
    children: [
      { index: true, element: <AdminLogin /> },
      {
        path: "*",
        element: <Navigate to="/admin" replace />,
      },
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },
          {
            path: "dashboard",
            element: <AdminRoute element={<AdminDashboard />} />,
          },
          {
            path: "content-management",
            element: <AdminRoute element={<ContentManagement />} />,
            children: [
              { path: "careers", element: <ManageCareers /> },
              { path: "job-applicants", element: <ManageJobApplicants /> },
            ],
          },
          {
            path: "user-management",
            element: <AdminRoute element={<UserManagement />} />,
          },
          {
            path: "team",
            element: <AdminRoute element={<ManageTeamMembers />} />,
          },
          { path: "settings", element: <AdminRoute element={<Settings />} /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={myRoutes} />
    </div>
  );
}

export default App;

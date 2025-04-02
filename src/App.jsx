import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Mainpage Components/Navbar";
import Footer from "./components/Mainpage Components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomCursor from "./components/Mainpage Components/CustomCursor";

// Main Website Components
import Homepage from "./components/Mainpage Components/Homepage";
import AboutUs from "./components/Mainpage Components/AboutUs";
import NotFound from "./components/Mainpage Components/NotFound";
import ContactUs from "./components/Mainpage Components/ContactUs";
import OurServices from "./components/Mainpage Components/OurServices";
import Careers from "./components/Mainpage Components/Careers";
import JobApply from "./components/Mainpage Components/JobApply";
import OurLocation from "./components/Mainpage Components/OurLocation";
import OurTeam from "./components/Mainpage Components/OurTeam";
import CompanyHistory from "./components/Mainpage Components/CompanyHistory";
import OurPortfolio from "./components/Mainpage Components/OurPortfolio";
import MissionandVision from "./components/Mainpage Components/MissionandVision";
import FloatingIcons from "./components/Mainpage Components/FloatingIcons";
import Blogs from "./components/Mainpage Components/Blogs";
import BlogDetails from "./components/Mainpage Components/BlogDetail";

// Admin Components
import AdminLayout from "./components/Admin Components/AdminLayout";
import AdminLogin from "./components/Admin Components/AdminLogin";
import AdminSignup from "./components/Admin Components/AdminSignup";
import AdminResetPassword from "./components/Admin Components/AdminResetPassword";
import AdminDashboard from "./components/Admin Components/AdminDashboard";
import ManageJobs from "./components/Admin Components/ManageJobs";
import ManageTeam from "./components/Admin Components/ManageTeam";

// Layout for main website pages
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
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignup />,
  },
  {
    path: "/admin/reset-password",
    element: <AdminResetPassword />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "manage-jobs", element: <ManageJobs /> },
      { path: "manage-team", element: <ManageTeam /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={myRoutes} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        toastStyle={{
          background: "#1e1e1e",
          color: "#ffffff",
          borderLeft: "6px solid #aef507",
          borderRadius: "8px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 0 10px rgba(0,0,0,0.4)",
        }}
        progressStyle={{
          background: "#aef507",
        }}
      />
      {/* <CustomCursor /> */}
    </div>
  );
}

export default App;

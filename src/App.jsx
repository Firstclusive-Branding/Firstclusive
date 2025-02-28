import React, { useEffect, useState } from "react";
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
import { onAuthStateChanged } from "firebase/auth";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import NotFound from "./components/NotFound";
import { auth } from "./firebase";
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
    </div>
  );
};

const AdminLayout = () => {
  return (
    <Admin>
      <Outlet />
    </Admin>
  );
};

const AdminRoute = ({ element }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        navigate("/admin");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return user ? element : null;
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
          },
          {
            path: "user-management",
            element: <AdminRoute element={<UserManagement />} />,
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

import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import ContactUs from "./components/ContactUs";
import OurServices from "./components/OurServices";
import Careers from "./components/Careers";
import JobApply from "./components/JobApply";
import OurLocation from "./components/OurLocation";
import OurTeam from "./components/OurTeam";
import CompanyHistory from "./components/CompanyHistory";
import OurPortfolio from "./components/OurPortfolio";
import MissionandVision from "./components/MissionandVision";
import FloatingIcons from "./components/FloatingIcons";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetail";

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
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={myRoutes} />
    </div>
  );
}

export default App;

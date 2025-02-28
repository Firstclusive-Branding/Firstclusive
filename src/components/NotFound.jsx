import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import NotFoundImage from "../assets/404Image.png";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <img src={NotFoundImage} alt="404 Not Found" />
      <p className="notfound-text">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="notfound-button">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

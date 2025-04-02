import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../styles/Admin Styles/AdminSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

const AdminSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const { confirmPassword, ...submittedData } = formData;
    console.log("Sign Up Data:", JSON.stringify(submittedData, null, 2));

    toast.success("Signup successful! Redirecting to login...");

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setTimeout(() => {
      navigate("/admin");
    }, 3000);
  };

  return (
    <div className="admin-signup-container">
      <form onSubmit={handleSubmit} className="admin-signup-form">
        <h2 className="admin-signup-title">Admin Sign Up</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="admin-signup-input"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="admin-signup-input"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="admin-signup-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="admin-signup-input"
          required
        />

        <div className="admin-password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="admin-signup-input"
            required
          />
          <span
            className="admin-password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="admin-password-wrapper">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="admin-signup-input"
            required
          />
          <span
            className="admin-password-toggle"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          type="submit"
          className="admin-signup-button"
          disabled={formData.password !== formData.confirmPassword}
        >
          Sign Up
        </button>

        <p className="back-to-login">
          Back to{" "}
          <Link to="/admin" className="back-to-login-link">
            Login <FaArrowRight />
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AdminSignUp;

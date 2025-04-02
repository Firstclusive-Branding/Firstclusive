import React, { useState } from "react";
import "../../styles/Admin Styles/AdminResetPassword.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

const AdminResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
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
    console.log("Reset Data:", JSON.stringify(submittedData, null, 2));

    toast.success("Password reset successful! Redirecting to Login...");

    setFormData({
      email: "",
      otp: "",
      password: "",
      confirmPassword: "",
    });

    setTimeout(() => {
      navigate("/admin");
    }, 3000);
  };

  return (
    <div className="admin-reset-container">
      <form onSubmit={handleSubmit} className="admin-reset-form">
        <h2 className="admin-reset-title">Reset Password</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="admin-reset-input"
          required
        />

        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={formData.otp}
          onChange={handleChange}
          className="admin-reset-input"
          required
        />

        <div className="admin-reset-password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            className="admin-reset-input"
            required
          />
          <span
            className="admin-reset-password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="admin-reset-password-wrapper">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="admin-reset-input"
            required
          />
          <span
            className="admin-reset-password-toggle"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          type="submit"
          className="admin-reset-button"
          disabled={formData.password !== formData.confirmPassword}
        >
          Reset Password
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

export default AdminResetPassword;

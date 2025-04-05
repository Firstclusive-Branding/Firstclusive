import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Admin Styles/AdminLogin.css";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdHome } from "react-icons/md";

const baseURL = import.meta.env.VITE_API_URL;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      const { encoded_token, public_token } = result.data;

      localStorage.setItem("adminAuthenticated", "true");
      localStorage.setItem("token", encoded_token);
      localStorage.setItem("public-token", public_token);

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please check credentials or server.");
    }
  };

  return (
    <div className="admin-login-container">
      <button className="admin-home-button">
        <Link to="/" className="admin-home-link">
          <MdHome size={25} /> Home
        </Link>
      </button>
      <form onSubmit={handleLogin} className="admin-login-form">
        <h2 className="admin-login-title">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="admin-login-input"
          required
        />

        <div className="login-password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-login-input"
            required
          />
          <span
            className="login-password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="admin-login-button">
          Sign In
        </button>

        <div className="admin-login-links">
          <Link to="/admin/password-reset" className="admin-login-link">
            Forgot Password?
          </Link>
          <Link to="/admin/sign-up" className="admin-login-link">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;

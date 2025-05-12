import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import "../../styles/Mainpage Styles/JobApply.css";

const JobApply = () => {
  const location = useLocation();
  const { title } = location.state || {};

  useEffect(() => {
    document.title = `Apply for ${title} - Firstclusive Careers`;
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("job_title", title);
    formData.append("subject", `New Application Received for ${title}`);
    formData.append("access_key", "8b84e2e4-1ed4-4c9e-8951-61df24bbf6ea");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        Swal.fire({
          title: "Success",
          text: "Your application has been submitted!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "my-swal-popup",
            title: "my-swal-title",
            content: "my-swal-content",
            confirmButton: "my-swal-button",
          },
        });
        event.target.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: json.message || "Something went wrong!",
          confirmButtonText: "Try Again",
          customClass: {
            popup: "my-swal-popup",
            title: "my-swal-title",
            content: "my-swal-content",
            confirmButton: "my-swal-button",
          },
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <motion.div
      className="job-apply-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Apply for Job</h1>
      <form className="job-apply-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            name="job_title"
            value={title || ""}
            readOnly
            disabled
          />
        </div>

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            name="contact"
            required
          />
        </div>

        <div className="form-group">
          <label>Years of Experience</label>
          <input
            type="text"
            placeholder="e.g. 2 years"
            name="experience"
            required
          />
        </div>

        <div className="form-group">
          <label>Upload Your CV</label>
          <input type="file" name="cv" accept=".pdf,.doc,.docx" required />
        </div>

        <button type="submit" className="submit-button">
          SUBMIT APPLICATION
        </button>
      </form>
    </motion.div>
  );
};

export default JobApply;

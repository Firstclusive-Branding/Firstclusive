import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import "../../styles/Mainpage Styles/JobApply.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobApply = () => {
  const location = useLocation();
  const { title } = location.state || {};
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = `Apply for ${title} - Firstclusive Careers`;
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    const payload = {
      jobid: location.state?.id,
      fullname: formData.get("name"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      yearofexperience: formData.get("experience"),
      termsaccepted: true,
    };

    try {
      const createRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/jobapplicant/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const createJson = await createRes.json();
      if (!createRes.ok || createJson.error || !createJson.data?._id) {
        throw new Error(createJson.message || "Failed to create application");
      }

      const applicantId = createJson.data._id;

      const fileFormData = new FormData();

      fileFormData.append("pdf", formData.get("resume"));

      const uploadRes = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/user/jobapplicant/uploadcv/${applicantId}`,
        {
          method: "POST",
          body: fileFormData,
        }
      );

      const uploadJson = await uploadRes.json();
      if (!uploadRes.ok || uploadJson.error) {
        throw new Error(uploadJson.message || "Failed to upload resume");
      }

      Swal.fire({
        title: "Application Submitted!",
        text: "Your job application and CV were successfully submitted.",
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
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
        confirmButtonText: "Try Again",
        customClass: {
          popup: "my-swal-popup",
          title: "my-swal-title",
          content: "my-swal-content",
          confirmButton: "my-swal-button",
        },
      });
    } finally {
      setIsSubmitting(false);
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
        <Link to="/careers" className="job-apply-back-link">
          <FaArrowLeft />
          Back to Careers
        </Link>
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
            type="number"
            placeholder="e.g. 2 years"
            name="experience"
            required
          />
        </div>

        <div className="form-group">
          <label>Upload Your CV</label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="job-apply-spinner"></span>Submitting...
            </>
          ) : (
            "SUBMIT APPLICATION"
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default JobApply;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jobs from "../assets/Jobs.json";
import "../styles/Careers.css";

const itemVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const detailsVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.5 },
  },
};

const JobItem = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleApply = (e) => {
    e.stopPropagation();
    navigate("/careers/apply", { state: { id: job.id, title: job.title } });
  };

  return (
    <motion.div
      className="job-item"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
      onClick={toggleExpand}
    >
      <div className="job-header">
        <h2>{job.title}</h2>
        <div className="job-meta">{job.location}</div>
      </div>
      <p className="job-summary">{job.description}</p>

      <button className="toggle-button" onClick={toggleExpand}>
        {isExpanded ? "Show Less" : "Read More"}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="job-details"
            variants={detailsVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="details-content">
              <h3>Company Description</h3>
              <p>{job.details.company_description}</p>

              <h3>Role Description</h3>
              <p>{job.details.role_description}</p>

              <h3>Qualifications</h3>
              <ul>
                {job.details.qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>

              {job.details.bonus && job.details.bonus.length > 0 && (
                <>
                  <h3>Bonus Skills</h3>
                  <ul>
                    {job.details.bonus.map((bonus, index) => (
                      <li key={index}>{bonus}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <button className="apply-button" onClick={handleApply}>
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Careers = () => {
  return (
    <div className="careers-container">
      <h1 className="careers-title">Careers</h1>
      <p className="careers-subtitle">
        Join our team and help shape the future of branding and digital
        innovation.
      </p>
      <div className="jobs-list">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Careers;

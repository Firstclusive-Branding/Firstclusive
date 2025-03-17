import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import jobs from "../assets/Jobs.json";
import "../styles/Careers.css";

const jobs = [
  {
    id: 1,
    title: "Digital Marketing Specialist",
    location: "Hyderabad, India",
    description:
      "Join our marketing team to help drive innovative digital marketing strategies for our clients across various industries.",
    details: {
      company_description:
        "Firstclusive Branding is a leading provider of innovative IT solutions, serving over 800 clients worldwide since 2014.",
      role_description:
        "The Digital Marketing Specialist will be responsible for planning and executing digital marketing campaigns, including SEO/SEM, email marketing, social media, and PPC advertising.",
      qualifications: [
        "Strong experience in SEO, SEM, and social media marketing.",
        "Proficiency in Google Analytics, Google Ads, and Facebook Ads Manager.",
        "Ability to develop and execute content strategies.",
        "Knowledge of marketing automation tools.",
        "Strong analytical and problem-solving skills.",
      ],
      bonus: [
        "Experience in influencer marketing.",
        "Familiarity with A/B testing and conversion rate optimization.",
      ],
    },
  },
  {
    id: 2,
    title: "Social Media Manager",
    location: "Hyderabad, India",
    description:
      "Seeking a creative Social Media Manager to grow our brand presence across multiple platforms and drive engagement.",
    details: {
      company_description:
        "Firstclusive Branding is a leading provider of innovative IT solutions, serving over 800 clients worldwide since 2014.",
      role_description:
        "The Social Media Manager will create and execute social media campaigns, analyze engagement metrics, and collaborate with designers and content creators.",
      qualifications: [
        "Proven experience in social media marketing and management.",
        "Proficiency in scheduling tools like Hootsuite or Buffer.",
        "Ability to create engaging content and track performance metrics.",
        "Understanding of paid social media advertising strategies.",
        "Excellent copywriting and communication skills.",
      ],
      bonus: [
        "Experience with influencer collaborations.",
        "Knowledge of video editing and graphic design tools.",
      ],
    },
  },
  {
    id: 3,
    title: "Content Writer",
    location: "Hyderabad, India",
    description:
      "Looking for a creative Content Writer to develop compelling and SEO-friendly content for websites, blogs, and social media.",
    details: {
      company_description:
        "Firstclusive Branding is a leading provider of innovative IT solutions, serving over 800 clients worldwide since 2014.",
      role_description:
        "The Content Writer will research, write, and edit engaging content across multiple platforms to enhance brand awareness and audience engagement.",
      qualifications: [
        "Strong writing and editing skills with attention to detail.",
        "Knowledge of SEO best practices and keyword research.",
        "Ability to write for different audiences and industries.",
        "Experience with CMS platforms like WordPress.",
        "Excellent time management and organizational skills.",
      ],
      bonus: [
        "Experience in copywriting for ads and sales pages.",
        "Basic knowledge of graphic design and multimedia tools.",
      ],
    },
  },
  {
    id: 4,
    title: "Sales Executive",
    location: "Hyderabad, India",
    description:
      "Looking for a driven Sales Executive to generate leads and convert potential clients into long-term business partners.",
    details: {
      company_description:
        "Firstclusive Branding is a leading provider of innovative IT solutions, serving over 800 clients worldwide since 2014.",
      role_description:
        "The Sales Executive will be responsible for lead generation, client outreach, and negotiating deals to achieve revenue targets.",
      qualifications: [
        "Experience in B2B or B2C sales.",
        "Strong negotiation and persuasion skills.",
        "Ability to build relationships with clients.",
        "Proficiency in CRM software like HubSpot or Salesforce.",
        "Goal-oriented with excellent time management.",
      ],
      bonus: [
        "Knowledge of digital marketing sales.",
        "Experience in SaaS or IT service sales.",
      ],
    },
  },
];

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

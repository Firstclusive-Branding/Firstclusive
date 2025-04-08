import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/MissionandVision.css";
import { FaBullseye } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { motion } from "framer-motion";

import missionImg from "../../assets/Misson Assets/mission.jpg";
import visionImg from "../../assets/Misson Assets/vision.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MissionandVision = () => {
  useEffect(() => {
    document.title = "Mission & Vision - Firstclusive";
  }, []);

  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        <h2 className="mission-vision-heading">Our Mission & Vision</h2>

        <motion.div
          className="mission-vision-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mission-vision-image">
            <img src={missionImg} alt="Mission" loading="lazy" />
          </div>
          <div className="mission-vision-content">
            <h3 className="mission-vision-title">
              <FaBullseye size={30} className="mission-vision-icon" /> Our
              Mission
            </h3>
            <p className="mission-vision-subtitle">Why we exist</p>
            <ul className="mission-vision-points">
              <li>
                Deliver top-tier services in Digital Marketing, Web Design, App
                Development, Branding, and Printing.
              </li>
              <li>
                Empower businesses to thrive in the digital epoch with
                innovative and effective solutions.
              </li>
              <li>
                Foster enduring relationships with clients based on trust,
                transparency, and mutual success.
              </li>
              <li>
                Cater to diverse industries, including healthcare, education,
                construction, retail, and hospitality.
              </li>
            </ul>
            <p className="mission-vision-text">
              Since our inception in 2014, Firstclusive Branding has served over
              850+ clients worldwide...
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mission-vision-card reverse"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mission-vision-image">
            <img src={visionImg} alt="Vision" loading="lazy" />
          </div>
          <div className="mission-vision-content">
            <h3 className="mission-vision-title">
              <IoEye size={30} className="mission-vision-icon" /> Our Vision
            </h3>
            <p className="mission-vision-subtitle">Where we're headed</p>
            <ul className="mission-vision-points">
              <li>
                Be India's most trusted brand growth partner across various
                industries.
              </li>
              <li>
                Redefine branding with strategy-first design and innovative
                solutions.
              </li>
              <li>
                Transform businesses into category leaders through effective
                digital strategies.
              </li>
              <li>
                Continuously set new standards by harnessing the knowledge,
                experience, and dedication of our team.
              </li>
            </ul>
            <p className="mission-vision-text">
              We envision a future where businesses stop blending in and start
              leading...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionandVision;

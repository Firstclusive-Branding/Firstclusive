import React from "react";
import { motion } from "framer-motion";
import "../styles/CompanyHistory.css";
import theBeginning from "../assets/Company-history/the-beginning.jpg";
import expansionGrowth from "../assets/Company-history/expansion-and-growth.jpg";
import leader from "../assets/Company-history/leader.jpg";
import innovation from "../assets/Company-history/innovation.jpg";
import future from "../assets/Company-history/future.png";
import noExcuses from "../assets/Company-history/Not excuses.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CompanyHistory = () => {
  return (
    <div className="company-history-container">
      <motion.header
        className="company-history-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="company-history-title">Our Journey</h1>
        <p className="company-history-subtitle">
          From a small vision to a globally recognised branding agency.
        </p>
      </motion.header>

      <section className="company-history-timeline">
        {[
          {
            year: "2014 - The Beginning",
            img: theBeginning,
            desc: "Firstclusive Branding was born in Hyderabad with a simple yet ambitious goal—help businesses establish their brand identity with creative, results-driven strategies. The initial years were filled with challenges, from competing with established agencies to building credibility. However, our passion for branding and marketing helped us create a niche in the industry.",
          },
          {
            year: "2017 - Expansion & Growth",
            img: expansionGrowth,
            desc: "As demand for digital marketing and web development grew, we expanded our services beyond branding to offer comprehensive marketing solutions. By 2017, we had successfully served over 300 clients, helping businesses transform their online presence with visually appealing websites, effective ad campaigns, and strategic brand positioning.",
          },
          {
            year: "2020 - A Recognised Industry Leader",
            img: leader,
            desc: "Our hard work paid off when we were officially recognised as a Startup India registered company. This milestone validated our commitment to delivering high-quality branding and marketing services. Despite the challenges posed by the global pandemic, Firstclusive adapted by integrating AI-driven branding solutions and data-driven marketing strategies, further strengthening our position in the industry.",
          },
          {
            year: "2023 - Innovation & Future Readiness",
            img: innovation,
            desc: "2023 was a game-changing year for Firstclusive. We launched AI-powered branding solutions, helping brands automate their creative processes and enhance customer engagement. Today, we have proudly served over 800 clients across various industries, providing them with customised branding, UI/UX design, web development, and digital marketing services.",
          },
          {
            year: "Our Values & Philosophy",
            img: noExcuses,
            desc: "At Firstclusive, we operate on one simple belief: 'Results, Not Excuses.' Our focus is not just on creating attractive designs but on delivering measurable success to our clients. We believe in innovation, adaptability, and client-centricity—ensuring that every project we undertake brings real business growth. Our core philosophy revolves around quality over quantity, meaning we don't take shortcuts but instead build strong, impactful brands that last.",
          },
          {
            year: "The Future of Firstclusive",
            img: future,
            desc: "The journey doesn't stop here. We are actively working towards revolutionising branding through cutting-edge AI, automation, and data-driven marketing solutions. Our vision is to become a global leader in branding & marketing, offering businesses of all sizes the opportunity to establish a powerful and engaging brand identity. As we move forward, we continue to evolve, expand, and push boundaries to redefine what’s possible in the branding industry.",
          },
        ].map((event, index) => (
          <motion.div
            key={index}
            className="company-history-event"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="company-history-year">{event.year}</h2>
            <div className="company-history-image-container">
              <motion.img
                src={event.img}
                alt={event.year}
                className="company-history-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="company-history-description">{event.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default CompanyHistory;

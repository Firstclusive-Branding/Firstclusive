import React from "react";
import "../../styles/Mainpage Styles/Testimonials.css";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const testimonials = [
  {
    name: "Ananya R.",
    role: "Founder, Bloom Social",
    feedback:
      "Firstclusive transformed our brand identity. Their creative strategies and designs exceeded our expectations!",
    rating: 5,
  },
  {
    name: "Rahul M.",
    role: "CEO, TechNova",
    feedback:
      "Collaborating with Firstclusive was a game-changer. Their branding solutions are top-notch and truly professional.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Marketing Head, GreenLeaf",
    feedback:
      "The team at Firstclusive brought our vision to life with their innovative designs and attention to detail.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.div
        className="testimonials-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="testimonials-section-title">
          <GoDotFill />
          What Our Clients Say
        </p>
        <h1 className="testimonials-section-subtitle">
          Insights from the brands we’ve built with.
        </h1>
      </motion.div>

      <motion.div
        className="testimonials-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <FaQuoteLeft className="testimonials-quote-icon testimonials-left" />
            <div className="testimonial-inner">
              <p className="testimonial-feedback">{testimonial.feedback}</p>
              <div className="testimonial-info">
                <h3 className="client-name">{testimonial.name}</h3>
                <p className="client-role">{testimonial.role}</p>
                <div className="client-rating">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
            <FaQuoteRight className="testimonials-quote-icon testimonials-right" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;

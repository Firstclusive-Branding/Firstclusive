import React from "react";
import "../../styles/Mainpage Styles/ContactUs.css";
import Swal from "sweetalert2";
import ContactImage from "../../assets/ContactUs/ContactUs.png";
import EmailUs from "../../assets/ContactUs/EmailUs.png";
import CallUs from "../../assets/ContactUs/CallUs.png";
import VisitUs from "../../assets/ContactUs/VisitUs.png";
import { motion } from "framer-motion";
import ButtonAnimation from "./ButtonAnimation";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const topics = [];
    const topicCheckboxes = event.target.querySelectorAll(
      'input[name="topic"]:checked'
    );

    topicCheckboxes.forEach((checkbox) => {
      topics.push(checkbox.value);
    });

    if (topics.length > 0) {
      formData.append("topic", topics.join(", "));
    }

    formData.append("access_key", "8b84e2e4-1ed4-4c9e-8951-61df24bbf6ea");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thanks for reaching out!",
        text: "We'll get back to you soon!",
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
        text: "Something went wrong!",
        confirmButtonText: "Try Again",
        customClass: {
          popup: "my-swal-popup",
          title: "my-swal-title",
          content: "my-swal-content",
          confirmButton: "my-swal-button",
        },
      });
    }
  };

  return (
    <motion.section
      className="contact-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-moto">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect & Create Something Amazing Together
        </motion.h1>
        <motion.p
          className="contact-moto-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Your success starts with a conversation. Get in touch with us today!
        </motion.p>

        <div className="contact-cards">
          {[
            {
              img: EmailUs,
              title: "Email Us",
              text: "hey@firstclusive.com",
              link: "mailto:hey@firstclusive.com",
            },
            {
              img: CallUs,
              title: "Call Us",
              text: ["Toll Free: 1800-208-7788", "+91 996-647-0788"],
              link: ["tel:18002087788", "tel:+919966470788"],
            },
            {
              img: VisitUs,
              title: "Visit Our Office",
              text: "Unit No. 506 & 508, 5th Floor, Mawin Gold Plaza, Mehdipatnam, Hyderabad, Telangana 500028",
              link: "https://maps.app.goo.gl/NeSLxVVX3aMNYzvv7",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="contact-card"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              {Array.isArray(card.text) ? (
                card.text.map((num, i) => (
                  <p key={i}>
                    <a href={card.link[i]}>{num}</a>
                  </p>
                ))
              ) : (
                <p>
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    {card.text}
                  </a>
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <h2 className="contact-title">
        Reach Out Today For Professional Assistance
      </h2>

      <div className="contact-container">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={ContactImage} alt="Contact Us" />
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Your Name" name="name" required />
            <input
              type="text"
              placeholder="Company/Brand Name"
              name="Company/Brand_Name"
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="Phone_Number"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />

            <div className="contact-checkbox-group">
              <label>Subject:</label>
              <div className="contact-checkbox-options">
                {[
                  "Logo & Branding",
                  "UI/UX Design",
                  "Web Development",
                  "Digital Marketing",
                  "Printing",
                ].map((topic) => (
                  <label key={topic}>
                    <input type="checkbox" name="topic" value={topic} /> {topic}
                  </label>
                ))}
              </div>
            </div>
            <textarea
              placeholder="Enter Your Message"
              name="message"
              required
            ></textarea>
            <span className="contact-submit-button">
              <ButtonAnimation text="SUBMIT" isSubmit={true} type="submit" />
            </span>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;

import React, { useState } from "react";
import "../styles/Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
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
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          confirmButton: "custom-swal-button",
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
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          content: "custom-swal-content",
          confirmButton: "custom-swal-button",
        },
      });
    }
  };
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Us</h2>
      <p>Have a question or need a consultation? Get in touch with us today!</p>
      <form className="contact-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Enter Your Name" name="name" required />
        <input
          type="text"
          placeholder="Enter Your Company/Brand Name"
          name="Company/Brand Name"
        />
        <input
          type="number"
          placeholder="Enter Your Phone Number"
          name="Phone Number"
          required
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          required
        />
        <div className="checkbox-group">
          <label>Subject</label>
          <div className="checkbox-options">
            <label>
              <input type="checkbox" name="topic" value="Logo & Branding" />{" "}
              Logo & Branding
            </label>
            <label>
              <input type="checkbox" name="topic" value="UI/UX Design" /> UI/UX
              Design
            </label>
            <label>
              <input type="checkbox" name="topic" value="Web Development" /> Web
              Development
            </label>
            <label>
              <input type="checkbox" name="topic" value="Digital Marketing" />{" "}
              Digital Marketing
            </label>
            <label>
              <input type="checkbox" name="topic" value="Printing" /> Printing
            </label>
          </div>
        </div>
        <textarea
          placeholder="Enter Your Message"
          name="message"
          required
        ></textarea>

        <button type="submit" className="contactButton">
          <span>
            SUBMIT <i className="bi bi-telephone-outbound-fill"></i>
          </span>
          <span className="contactBubbleEffect"></span>
        </button>
      </form>
    </section>
  );
};

export default Contact;

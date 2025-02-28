import React from "react";
import "../styles/OurLocation.css";

const OurLocation = () => {
  return (
    <div className="location-container">
      <h2 className="location-header">Our Location</h2>
      <div className="location-section">
        <div className="info-container">
          <div className="details">
            <h3>Office Timing</h3>
            <p>10 AM to 7 PM (Monday to Saturday)</p>
            <h3>Address</h3>
            <a href="https://maps.app.goo.gl/beasMFBhB2ZW6V7M8">
              Unit No. 506 & 508, 5th Floor, Mawin Gold Plaza, Mehdipatnam,
              Hyderabad, Telangana 500028
            </a>
            <h3>Phone Numbers</h3>
            <a href="tel:00914031732040">+91 403-173-2040</a>
            <a href="tel:00919885925529">+91 988-592-5529</a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.646203124297!2d78.4426423!3d17.3948971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972744dfd3d5%3A0x7b3b13733f4501d7!2sFirstclusive%20Branding!5e0!3m2!1sen!2sin!4v1708789012345!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;

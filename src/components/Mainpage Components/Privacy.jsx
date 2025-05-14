import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/Privacy.css";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Firstclusive Branding";
  }, []);

  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Effective Date: 1 January 2025</p>

      <section className="privacy-section">
        <h2 className="privacy-heading">1. Introduction</h2>
        <p>
          Firstclusive Branding ("we", "our", or "us") is committed to
          protecting your personal data. This Privacy Policy outlines how we
          collect, use, and safeguard your information in compliance with the
          Digital Personal Data Protection Act (DPDPA) 2023.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">2. Information We Collect</h2>
        <p>We may collect the following types of personal data:</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business details</li>
          <li>IP address and device information</li>
          <li>Browsing behavior on our website</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">3. Purpose of Data Collection</h2>
        <p>Your personal data is collected for the following purposes:</p>
        <ul>
          <li>To provide and manage our branding and marketing services</li>
          <li>To communicate with you regarding our services</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">4. Consent</h2>
        <p>
          By using our services, you consent to the collection and use of your
          personal data as outlined in this policy. You have the right to
          withdraw your consent at any time by contacting us at{" "}
          <a href="mailto:hey@firstclusive.com">hey@firstclusive.com</a>.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">5. Data Sharing and Disclosure</h2>
        <p>
          We do not sell or rent your personal data. We may share your
          information with:
        </p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, alteration,
          disclosure, or destruction.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">7. Your Rights</h2>
        <p>Under the DPDPA 2023, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccuracies in your data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent for data processing</li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a href="mailto:hey@firstclusive.com">hey@firstclusive.com</a>.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">8. Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 18. We
          do not knowingly collect personal data from children without parental
          consent.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">9. Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this policy, unless a longer retention period
          is required by law.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-heading">11. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p>
          Email: <a href="mailto:hey@firstclusive.com">hey@firstclusive.com</a>
          <br />
          Unit No. 506 & 508, 5th Floor, Mawin Gold Plaza, Mehdipatnam,
          Hyderabad, Telangana 500028
        </p>
      </section>
    </div>
  );
};

export default Privacy;

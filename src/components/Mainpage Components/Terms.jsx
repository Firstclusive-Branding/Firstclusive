import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/Terms.css";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms and Conditions - Firstclusive Branding";
  }, []);

  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="terms-updated">Effective Date: 1 January 2025</p>

      <section className="terms-section">
        <h2 className="terms-heading">1. Acceptance of Terms</h2>
        <p>
          By accessing and using our services, you agree to be bound by these
          Terms and Conditions, in accordance with applicable Indian laws and
          digital compliance standards.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-heading">2. Services Offered</h2>
        <p>
          Firstclusive Branding provides services including brand identity
          design, website development, digital marketing, and printing
          solutions. Specific terms for each service may be outlined in separate
          agreements.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-heading">3. Intellectual Property</h2>
        <p>
          All content, designs, and materials created by Firstclusive Branding
          are protected under the Indian Copyright Act, 1957. Unauthorized use
          is prohibited.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-heading">4. Client Responsibilities</h2>
        <p>
          Clients are responsible for providing accurate information and
          materials required for project completion. Delays in providing
          necessary inputs may affect project timelines.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-heading">5. Payment Terms</h2>
        <p>
          Payment terms will be specified in individual project agreements.
          Failure to adhere to payment schedules may result in project delays or
          termination.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-heading">6. Limitation of Liability</h2>
        <p>
          Firstclusive Branding is not liable for any indirect, incidental, or
          consequential damages arising from the use of our services.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-heading">7. Privacy and Data Handling</h2>
        <p>
          We handle your personal data in accordance with the Indian Data
          Protection framework. For more details, refer to our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-heading">8. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the
          laws of India. All disputes are subject to the jurisdiction of the
          courts in Hyderabad, Telangana.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-heading">9. Amendments</h2>
        <p>
          We reserve the right to update or revise these Terms at any time
          without prior notice. Continued use of our services implies acceptance
          of the updated terms.
        </p>
      </section>
    </div>
  );
};

export default Terms;

import React from "react";
import "../../styles/Mainpage Styles/About.css";
import aboutUs from "../../assets/AboutUsAssets/about-us2.jpg";
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <section id="about-us" className="about">
      <div className="about-container">
        <div className="about-us-headings">
          <p>
            <GoDotFill /> About Us
          </p>
          <h1>Your Brand’s Growth Starts Here</h1>
        </div>

        <div className="about-content">
          <div className="about-left">
            <article className="about-text">
              <p>
                <strong>Firstclusive</strong> has been shaping brands and
                businesses since 2014. We help companies build{" "}
                <strong>strong identities</strong> and grow faster. From{" "}
                <strong>branding</strong> to
                <strong> website design</strong> and{" "}
                <strong>high-quality printing</strong>, we create solutions that
                make your business stand out.
              </p>
              <p>
                We started as a proprietorship and became a private limited
                company in 2023, earning recognition as a
                <strong> Startup India-registered</strong> company. With
                <strong> 800+ clients</strong> worldwide, we combine creativity
                with strategy to deliver real growth. No fluff, just results
                that matter.
              </p>
            </article>
          </div>

          <div className="about-image">
            <img src={aboutUs} alt="About Firstclusive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

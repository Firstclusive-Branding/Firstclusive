import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import "../styles/AboutUs.css";
import directorImage from "../assets/AboutUsAssets/Dr. Khizer Husaain Junaidy.jpeg";
import managingDirectorImage from "../assets/AboutUsAssets/Jamsheed Hussain Junaidy.jpg";
import aboutUsHeroImage from "../assets/AboutUsAssets/aboutUsHero.png";
import whoWeAreImage from "../assets/AboutUsAssets/who we are.png";
import mission from "../assets/AboutUsAssets/Mission.png";
import WhatSetsUsApart from "../assets/AboutUsAssets/What Sets Us Apart.jpg";
import LookingAhead from "../assets/AboutUsAssets/Looking Ahead.jpg";
import LogoBranding from "../assets/AboutUsAssets/Logos Collage.png";
import UIUX from "../assets/AboutUsAssets/UIUX.png";
import WebDevelopment from "../assets/AboutUsAssets/Web Development.png";
import DigitalMarketing from "../assets/AboutUsAssets/Digital Marketing.jpg";
import Printing from "../assets/AboutUsAssets/Printing.jpg";
import ButtonAnimation from "./ButtonAnimation";

const services = [
  {
    img: LogoBranding,
    title: "Logo & Branding",
    class: "service-logo-branding",
    IdName: "logo-branding",
  },
  {
    img: UIUX,
    title: "UI/UX Design",
    class: "service-uiux",
    IdName: "ui-ux-design",
  },
  {
    img: WebDevelopment,
    title: "Web Development",
    class: "service-web-dev",
    IdName: "web-development",
  },
  {
    img: DigitalMarketing,
    title: "Digital Marketing",
    class: "service-digital-marketing",
    IdName: "digital-marketing",
  },
  {
    img: Printing,
    title: "Printing",
    class: "service-printing",
    IdName: "printing",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutUs-container" id="aboutUs">
      <div className="aboutUs-hero-section">
        <div className="aboutUs-header">
          <h1>Discover who we are and step into the world of creativity</h1>
        </div>

        <motion.section
          className="aboutUs-hero-container"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="aboutUs-hero-image">
            <img src={aboutUsHeroImage} alt="About Us" />
          </div>
          <div className="aboutUs-hero-content">
            <h1>Results, Not Excuses – Building brands that make an impact.</h1>
            <ScrollLink to="company-section" smooth={true} duration={100}>
              <span className="about-us-know-more">
                <ButtonAnimation
                  text="Know More"
                  isSubmit={true}
                  icon={false}
                />
              </span>
            </ScrollLink>
          </div>
        </motion.section>
      </div>

      <div className="company-section" id="company-section">
        <motion.section
          className="who-we-are-section"
          id="who-we-are-section"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="who-we-are-heading">
            <h2>Who We Are</h2>
          </div>
          <div className="who-we-are-container">
            <div className="who-we-are-image">
              <img src={whoWeAreImage} alt="Who We Are Image" />
            </div>
            <div className="who-we-are-content">
              <p>
                <strong>Firstclusive Branding Private Limited</strong> is a
                premier digital and creative agency based in Hyderabad, India,
                established in <strong>2014</strong> and driven by a passion for
                building impactful brands. Our expertise spans multiple domains,
                with a special focus on healthcare branding, ensuring that
                doctors, hospitals, and medical professionals establish a strong
                and credible presence in the industry. Over the years, we have
                successfully partnered with over 800 clients by delivering
                high-quality branding, web development, digital marketing, UI/UX
                design, and printing solutions, ensuring that whether you’re a
                startup, a growing business, or an established enterprise, your
                brand stands out in a competitive market.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="our-mission-section"
          id="our-mission-section"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="our-mission-header">
            <h2>Our Mission</h2>
          </div>
          <div className="our-mission-container">
            <div className="out-mission-content">
              <p>
                At Firstclusive, our mission is simple: "Results, Not Excuses."
                We are committed to providing businesses with strategic,
                high-impact branding and marketing solutions that drive real
                growth. Unlike agencies that focus solely on aesthetics, we
                prioritise performance-driven branding—ensuring that every
                website, logo, or marketing campaign translates into tangible
                success.
              </p>
            </div>
            <div className="our-mission-image">
              <img src={mission} alt="Our Mission" />
            </div>
          </div>
        </motion.section>

        <motion.section
          className="what-set-us-apart-section"
          id="what-set-us-apart-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="what-set-us-apart-header">
            <h2>What Sets Us Apart?</h2>
          </div>
          <div className="what-set-us-apart-container">
            <div className="what-set-us-apart-image">
              <img src={WhatSetsUsApart} alt="What Sets Us Apart" />
            </div>
            <div className="what-set-us-apart-content">
              <ul className="what-set-us-apart-list">
                <li>
                  <strong>Specialised Healthcare Branding:</strong> We
                  understand the unique challenges of medical branding and
                  marketing, making us the go-to agency for doctors, clinics,
                  and hospitals.
                </li>
                <li>
                  <strong>Complete Brand Solutions:</strong> From logos to
                  websites, marketing to print materials, we provide a
                  360-degree branding experience.
                </li>
                <li>
                  <strong>Industry Recognition:</strong> We are Startup India
                  registered, officially recognised under MCA (Ministry of
                  Corporate Affairs), and a Google-certified PPC agency.
                </li>
                <li>
                  <strong>Results-Driven Approach:</strong> We focus on quality
                  over quantity, ensuring that every project is tailored to our
                  client’s goals and delivers real business impact.
                </li>
                <li>
                  <strong>Trusted by 800+ Clients:</strong> Our experience and
                  expertise have helped businesses from diverse industries
                  establish strong brand identities.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="looking-ahead-section"
          id="looking-ahead-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="looking-ahead-header">
            <h2>Looking Ahead</h2>
          </div>
          <div className="looking-ahead-container">
            <div className="looking-ahead-image">
              <img src={LookingAhead} alt="Looking Ahead" />
            </div>
            <div className="looking-ahead-content">
              <p>
                As Firstclusive continues to grow, our goal remains the same—to
                help businesses and professionals thrive in the digital world.
                If you're looking for a branding partner that delivers real
                results, you’re in the right place. Let’s build something
                incredible together!
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      <motion.section
        className="services-section"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="services-heading">What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className={`service-card-au ${service.class}`} key={index}>
              <Link to={`/our-services#${service.IdName}`} key={service.id}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="service-img"
                />
                <div className="service-title-au">{service.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="profile-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Meet Our Leadership</h2>
        <div className="profile-container">
          <div className="profile-card">
            <div>
              <img
                src={managingDirectorImage}
                alt="Jamsheed Junaidy - Managing Director"
              />
            </div>
            <h3>Jamsheed Junaidy</h3>
            <h4>Founder & Managing Director</h4>
            <p>
              An entrepreneur, branding expert, and aeronautical engineer,
              Jamsheed Junaidy founded
              <strong> Firstclusive Branding</strong> in 2014, helping{" "}
              <strong>800+ clients</strong> build strong brand identities. With
              a background in{" "}
              <strong>Aeronautical Engineering (MLR Institute)</strong> and
              experience at <strong>Amazon</strong>, he blends creativity with
              strategic problem-solving. A tech blogger, YouTuber, and digital
              marketing expert, he is passionate about exploring new trends and
              sharing his love for <strong>chai and tea</strong> on Instagram.
            </p>
          </div>

          <div className="profile-card">
            <img src={directorImage} alt="Dr. Khizer Hussain Junaidy" />
            <h3>Dr. Khizer Hussain Junaidy</h3>
            <h4>Director</h4>
            <p>
              A dedicated <strong>medical professional</strong> and{" "}
              <strong>healthcare advocate</strong>, Dr. Khizer brings his{" "}
              <strong>expertise</strong> in medicine and leadership to
              Firstclusive. With an MBBS & <strong>MD in Pharmacology</strong>{" "}
              from Gandhi Medical College, he is committed to{" "}
              <strong>healthcare innovation</strong>, medical education, and
              impactful <strong>branding solutions</strong>. His vision for
              healthcare branding ensures that Firstclusive delivers{" "}
              <strong>meaningful change</strong> in the industry.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;

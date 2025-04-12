import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../../styles/Mainpage Styles/OurServices.css";
import servicesList from "./OurServicesList";
import logoBranding from "../../assets/Services/Logo & Branding.jpg";
import UIUX from "../../assets/Services/UIUX Design.webp";
import WebDev from "../../assets/Services/Web Development.webp";
import digitalMarketing from "../../assets/Services/Digital Marketing.webp";
import printing from "../../assets/Services/Printing.webp";

const heroServices = [
  {
    name: "Logo & Branding",
    image: logoBranding,
    link: "#logo-branding",
  },
  {
    name: "UI/UX Design",
    image: UIUX,
    link: "#ui-ux-design",
  },
  {
    name: "Web Development",
    image: WebDev,
    link: "#web-development",
  },
  {
    name: "Digital Marketing",
    image: digitalMarketing,
    link: "#digital-marketing",
  },
  {
    name: "Printing",
    image: printing,
    link: "#printing",
  },
];

const OurServices = () => {
  useEffect(() => {
    document.title = "Our Services - Firstclusive";
  }, []);
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash;

    if (sectionId) {
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          const headerOffset = 150;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

          const offsetPosition = elementPosition - headerOffset - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="our-services">
      <div className="our-services-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="main-heading"
        >
          Crafting experiences, building brands, and making an impact.
        </motion.h2>

        <div className="our-services-cards-container">
          {heroServices.map((service, index) => {
            let initialAnimation = {};

            if (index === 0) {
              initialAnimation = { x: -200, opacity: 0 };
            } else if (index === heroServices.length - 1) {
              initialAnimation = { x: 200, opacity: 0 };
            } else if (index === 1 || index === 3) {
              initialAnimation = { y: index === 1 ? -200 : 200, opacity: 0 };
            } else if (index === 2) {
              initialAnimation = { scale: 0, opacity: 0 };
            }

            return (
              <motion.a
                key={index}
                href={service.link}
                className="our-service-card"
                initial={initialAnimation}
                animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div
                    className="card-back"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="card-content">
                      <h3>{service.name}</h3>
                      <p>
                        Explore our {service.name} services and take your brand
                        to the next level.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="our-services-description"
        >
          Your brand deserves to stand out. We make sure it does—through
          stunning designs, engaging experiences, and smart marketing. Whether
          you need a bold logo, a sleek website, or powerful digital campaigns,
          we’ve got you covered. Let’s bring your vision to life.
        </motion.p>
      </div>
      {servicesList.map((service, index) => (
        <motion.section
          key={index}
          className="service-section"
          id={service.className}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="our-service-title">{service.title}</h2>

          {service.logos ? (
            <div className="logo-grid">
              {service.logos.map((logo, logoIndex) => (
                <img
                  key={logoIndex}
                  src={logo}
                  alt={`Logo ${logoIndex + 1}`}
                  className="logo-image"
                />
              ))}
            </div>
          ) : (
            <div className="our-service-image-container">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
          )}

          <p className="service-description">{service.description}</p>

          <div className="service-features">
            {service.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="feature-card">
                <div className="feature-card-title">
                  {feature.icon}
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>

          <p className="cta-text">{service.cta}</p>
        </motion.section>
      ))}
    </div>
  );
};

export default OurServices;

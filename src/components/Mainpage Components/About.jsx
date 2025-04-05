import React, { useEffect, useState, useRef } from "react";
import "../../styles/Mainpage Styles/About.css";
import { IoBriefcaseSharp, IoLayersSharp } from "react-icons/io5";
import { FaCogs } from "react-icons/fa";
import { FaFaceSmileBeam } from "react-icons/fa6";
import aboutUs from "../../assets/AboutUsAssets/about-us2.jpg";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const About = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const counterRef = useRef(null);
  const targetCounts = [11, 850, 100, 5];
  const duration = 1000;
  const steps = 100;
  const intervalTime = duration / steps;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = Date.now();
          let interval = setInterval(() => {
            let elapsedTime = Date.now() - startTime;
            let progress = Math.min(elapsedTime / duration, 1);

            setCounters([
              Math.floor(progress * targetCounts[0]),
              Math.floor(progress * targetCounts[1]),
              Math.floor(progress * targetCounts[2]),
              Math.floor(progress * targetCounts[3]),
            ]);

            if (progress === 1) {
              clearInterval(interval);
              setCounters(targetCounts);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.6 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about-us" className="about">
      <div className="about-container">
        {/* <h2 className="section-title">About Us</h2> */}
        <div className="about-us-headings">
          <p>
            <GoDotFill /> About Us
          </p>
          <h1>Your Brand’s Growth Starts Here</h1>
        </div>
        <div className="about-content">
          <article className="about-text">
            <p>
              <strong>Firstclusive</strong> has been shaping brands and
              businesses since 2014. We help companies build{" "}
              <strong>strong identities</strong> and grow faster. From{" "}
              <strong>branding</strong> to
              <strong>website design</strong> and{" "}
              <strong>high-quality printing</strong>, we create solutions that
              make your business stand out.
            </p>
            <p>
              We started as a proprietorship and became a private limited
              company in 2023, earning recognition as a
              <strong> Startup India-registered</strong> company. With
              <strong> 800+ clients</strong> worldwide, we combine creativity
              with strategy to deliver real growth. No fluff, just results that
              matter.
            </p>
          </article>
          <div className="about-image">
            <img src={aboutUs} alt="About Firstclusive" />
          </div>
        </div>

        <motion.div
          className="about-footer"
          ref={counterRef}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="about-us-headings">
            <p>
              <GoDotFill /> Why choose Firstclusive?
            </p>
            <h1>Results That Speak for Themselves</h1>
          </div>
          <div className="counter-container">
            <div className="counter-item">
              <IoBriefcaseSharp />

              <h2>{counters[0]}+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="counter-item">
              <IoLayersSharp />

              <h2>{counters[1]}+</h2>
              <p>Successful Projects</p>
            </div>
            <div className="counter-item">
              <FaFaceSmileBeam />
              <h2>{counters[2]}%</h2>
              <p>Client Satisfaction</p>
            </div>
            <div className="counter-item">
              <FaCogs />

              <h2>{counters[3]}+</h2>
              <p>Core Services</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState, useRef } from "react";
import "../styles/About.css";

const About = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const counterRef = useRef(null);
  const targetCounts = [10, 800, 100, 5];
  const duration = 1000;
  const steps = 100;
  const intervalTime = duration / steps;

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let startTime = Date.now();

          let interval = setInterval(() => {
            let elapsedTime = Date.now() - startTime;
            let progress = Math.min(elapsedTime / duration, 1);

            setCounters([
              Math.floor(Math.random() * 10),
              Math.floor(progress * targetCounts[1]),
              Math.floor(progress * targetCounts[2]),
              Math.floor(Math.random() * 10),
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
  }, []);

  return (
    <section id="about-us" className="about">
      <div className="about-container">
        <h2 className="section-title">About Us</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Firstclusive Branding is a leading creative and digital agency
              based in Hyderabad, India. Since our establishment in 2014, we
              have been empowering businesses with innovative branding, web
              development, and digital marketing solutions.
            </p>
            <p>
              With over <strong>800+ clients</strong> globally, we specialise in
              crafting powerful brand identities, high-performance websites, and
              marketing strategies that drive real results.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://picsum.photos/id/239/400/250"
              alt="About Firstclusive"
            />
          </div>
        </div>

        <div className="about-footer" ref={counterRef}>
          <h3>Why Choose Firstclusive?</h3>
          <div className="counter-container">
            <div className="counter-item">
              <div className="counter-circle counter-circle-odd">
                {counters[0]}+
              </div>
              <p>Years of Experience</p>
            </div>
            <div className="counter-item">
              <div className="counter-circle counter-circle-even">
                {counters[1]}+
              </div>
              <p>Successful Projects</p>
            </div>
            <div className="counter-item">
              <div className="counter-circle counter-circle-odd">
                {counters[2]}%
              </div>
              <p>Client Satisfaction</p>
            </div>
            <div className="counter-item">
              <div className="counter-circle counter-circle-even">
                {counters[3]}+
              </div>
              <p>Core Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

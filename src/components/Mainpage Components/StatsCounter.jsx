import React, { useEffect, useState, useRef } from "react";
import "../../styles/Mainpage Styles/StatsCounter.css";
import { IoBriefcaseSharp, IoLayersSharp } from "react-icons/io5";
import { FaCogs } from "react-icons/fa";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const StatsCounter = () => {
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
    <section className="stats-counter-section">
      <div className="stats-counter" ref={counterRef}>
        <div className="stats-headings">
          <p>
            <GoDotFill /> Why choose Firstclusive?
          </p>
          <h1>Results That Speak for Themselves</h1>
        </div>
        <div className="stats-counter-container">
          <div className="stats-counter-item">
            <IoBriefcaseSharp />
            <h2>{counters[0]}+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stats-counter-item">
            <IoLayersSharp />
            <h2>{counters[1]}+</h2>
            <p>Successful Projects</p>
          </div>
          <div className="stats-counter-item">
            <FaFaceSmileBeam />
            <h2>{counters[2]}%</h2>
            <p>Client Satisfaction</p>
          </div>
          <div className="stats-counter-item">
            <FaCogs />
            <h2>{counters[3]}+</h2>
            <p>Core Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

import React, { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Homepage.css";

const Slogan = lazy(() => import("../components/Slogan"));
const AdCarousel = lazy(() => import("../components/AdCarousel"));
const Branding = lazy(() => import("../components/Branding"));
const About = lazy(() => import("../components/About"));
const Services = lazy(() => import("../components/Services"));
const Gallery = lazy(() => import("../components/Gallery"));

const LoadingFallback = () => (
  <div className="loader">
    <div data-glitch="Loading..." className="glitch">
      Loading...
    </div>
  </div>
);

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage">
      <div className="middleComponents">
        <Suspense fallback={<LoadingFallback />}>
          <Branding />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Slogan />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <AdCarousel />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div className="galleryApp">
            <Gallery />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="servicesApp">
              <Services />
            </div>
          </motion.section>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="aboutApp">
              <About />
            </div>
          </motion.section>
        </Suspense>
      </div>
    </div>
  );
};

export default React.memo(Homepage);

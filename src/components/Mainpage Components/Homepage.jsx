import React, { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/Mainpage Styles/Homepage.css";

const Branding = lazy(() =>
  import("../../components/Mainpage Components/Branding")
);
const Slogan = lazy(() =>
  import("../../components/Mainpage Components/Slogan")
);
const AdCarousel = lazy(() =>
  import("../../components/Mainpage Components/AdCarousel")
);
const Gallery = lazy(() =>
  import("../../components/Mainpage Components/Gallery")
);
const Services = lazy(() =>
  import("../../components/Mainpage Components/Services")
);
const About = lazy(() => import("../../components/Mainpage Components/About"));
const StatsCounter = lazy(() =>
  import("../../components/Mainpage Components/StatsCounter")
);

const LoadingFallback = () => (
  <div className="loader">
    <div data-glitch="Loading..." className="glitch">
      Loading...
    </div>
  </div>
);

const Homepage = () => {
  useEffect(() => {
    document.title = "Firstclusive Branding";
  }, []);
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
          <Gallery />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Services />
          </motion.section>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <About />
          </motion.section>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <StatsCounter />
          </motion.section>
        </Suspense>
      </div>
    </div>
  );
};

export default React.memo(Homepage);

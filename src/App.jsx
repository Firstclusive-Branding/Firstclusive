import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Branding from "./components/Branding";
import ScrollReveal from "./components/ScrollReveal";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Gallery = lazy(() => import("./components/Gallery"));

const App = () => {
  return (
    <div className="app">
      <div className="topComponents">
        <Navbar />
        <Branding />
      </div>

      <div className="middleComponents">
        <Suspense fallback={<div>Loading Hero...</div>}>
          <ScrollReveal>
            <div className="heroApp">
              <Hero />
            </div>
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<div>Loading Gallery...</div>}>
          <ScrollReveal delay={0.2}>
            <div className="galleryApp">
              <Gallery />
            </div>
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<div>Loading Services...</div>}>
          <ScrollReveal delay={0.4}>
            <div className="servicesApp">
              <Services />
            </div>
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<div>Loading About...</div>}>
          <ScrollReveal delay={0.6}>
            <div className="aboutApp">
              <About />
            </div>
          </ScrollReveal>
        </Suspense>

        <Suspense fallback={<div>Loading Contact...</div>}>
          <ScrollReveal delay={0.8}>
            <div className="contactApp">
              <Contact />
            </div>
          </ScrollReveal>
        </Suspense>
      </div>

      <div className="footerComponent">
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(App);

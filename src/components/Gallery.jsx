import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Gallery.css";
import businessCard1 from "../assets/Gallery/business card-1.jpg";
import businessCard2 from "../assets/Gallery/business card-2.jpg";
import coding1 from "../assets/Gallery/coding-1.jpg";
import coding2 from "../assets/Gallery/coding-2.jpg";
import ppc1 from "../assets/Gallery/ppc-1.jpg";
import ppc2 from "../assets/Gallery/ppc-2.jpg";
import socialMediaDesign1 from "../assets/Gallery/social media design-1.jpg";
import socialMediaDesign2 from "../assets/Gallery/social media design-2.jpg";
import websiteUIDesign1 from "../assets/Gallery/website UI design-1.jpg";
import websiteUIDesign2 from "../assets/Gallery/website UI design-2.jpg";
import galleryLogo1 from "../assets/Gallery/Gallery-logo-3.png";
import galleryLogo2 from "../assets/Gallery/Gallery-logo-2.png";

gsap.registerPlugin(ScrollTrigger);

const images = [
  businessCard1,
  coding1,
  ppc1,
  socialMediaDesign1,
  websiteUIDesign1,
  galleryLogo1,
];

const images2 = [
  businessCard2,
  coding2,
  ppc2,
  socialMediaDesign2,
  websiteUIDesign2,
  galleryLogo2,
];

const Gallery = () => {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(row1Ref.current, {
        xPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "200px bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(row2Ref.current, {
        xPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "200px bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="gallery-container" ref={containerRef}>
      <div className="gallery-row" ref={row1Ref}>
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>
      <div className="gallery-row" ref={row2Ref}>
        {[...images2, ...images2].map((src, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

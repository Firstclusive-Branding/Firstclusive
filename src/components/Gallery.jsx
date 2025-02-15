import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://picsum.photos/id/1/450/300",
  "https://picsum.photos/id/100/450/300",
  "https://picsum.photos/id/14/450/300",
  "https://picsum.photos/id/95/450/300",
  "https://picsum.photos/id/10/450/300",
];

const images2 = [
  "https://picsum.photos/id/12/450/300",
  "https://picsum.photos/id/20/450/300",
  "https://picsum.photos/id/24/450/300",
  "https://picsum.photos/id/45/450/300",
  "https://picsum.photos/id/29/450/300",
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

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://picsum.photos/450/300?random=1",
  "https://picsum.photos/450/300?random=2",
  "https://picsum.photos/450/300?random=3",
  "https://picsum.photos/450/300?random=4",
  "https://picsum.photos/450/300?random=5",
];

const images2 = [
  "https://picsum.photos/450/300?random=6",
  "https://picsum.photos/450/300?random=7",
  "https://picsum.photos/450/300?random=8",
  "https://picsum.photos/450/300?random=9",
  "https://picsum.photos/450/300?random=10",
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

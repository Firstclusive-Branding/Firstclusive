// import { useEffect, useRef, useState } from "react";
// import "../../styles/Mainpage Styles/Gallery.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import businessCard1 from "../../assets/Gallery/business card-1.jpg";
// import coding1 from "../../assets/Gallery/coding-1.jpg";
// import ppc1 from "../../assets/Gallery/ppc-1.jpg";
// import socialMediaDesign1 from "../../assets/Gallery/social media design-1.jpg";
// import websiteUIDesign1 from "../../assets/Gallery/website UI design-1.jpg";
// import galleryLogo1 from "../../assets/Gallery/Gallery-logo-1.png";

// import businessCard2 from "../../assets/Gallery/business card-2.jpg";
// import coding2 from "../../assets/Gallery/coding-2.jpg";
// import ppc2 from "../../assets/Gallery/ppc-2.jpg";
// import socialMediaDesign2 from "../../assets/Gallery/social media design-2.jpg";
// import websiteUIDesign2 from "../../assets/Gallery/website UI design-2.jpg";
// import galleryLogo2 from "../../assets/Gallery/Gallery-logo-2.png";

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//   businessCard1,
//   coding1,
//   ppc1,
//   socialMediaDesign1,
//   websiteUIDesign1,
//   galleryLogo1,
// ];

// const images2 = [
//   businessCard2,
//   coding2,
//   ppc2,
//   socialMediaDesign2,
//   websiteUIDesign2,
//   galleryLogo2,
// ];

// const Gallery = () => {
//   const containerRef = useRef(null);
//   const row1Ref = useRef(null);
//   const row2Ref = useRef(null);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState("");

//   const openModal = (src) => {
//     setModalImage(src);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setModalImage("");
//   };

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.to(row1Ref.current, {
//         xPercent: -40,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "200px bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//       gsap.to(row2Ref.current, {
//         xPercent: 40,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "200px bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         closeModal();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <>
//       <div className="gallery-container" ref={containerRef}>
//         <div className="gallery-row" ref={row1Ref}>
//           {[...images, ...images].map((src, index) => (
//             <div
//               key={index}
//               className="gallery-item"
//               style={{
//                 backgroundImage: `url(${src})`,
//                 cursor: "url('/Cursors/CursorPointer.cur'), pointer",
//               }}
//               onClick={() => openModal(src)}
//             ></div>
//           ))}
//         </div>
//         <div className="gallery-row" ref={row2Ref}>
//           {[...images2, ...images2].map((src, index) => (
//             <div
//               key={index}
//               className="gallery-item"
//               style={{
//                 backgroundImage: `url(${src})`,
//                 cursor: "url('/Cursors/CursorPointer.cur'), pointer",
//               }}
//               onClick={() => openModal(src)}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {modalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content" onClick={closeModal}>
//             <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
//               <img src={modalImage} alt="Gallery Full View" />
//               <button className="close-button" onClick={closeModal}>
//                 ×
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Gallery;

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import "../../styles/Mainpage Styles/Gallery.css";
import gsap from "gsap";
import businessCard1 from "../../assets/Gallery/business card-1.jpg";
import coding1 from "../../assets/Gallery/coding-1.jpg";
import ppc1 from "../../assets/Gallery/ppc-1.jpg";
import socialMediaDesign1 from "../../assets/Gallery/social media design-1.jpg";
import websiteUIDesign1 from "../../assets/Gallery/website UI design-1.jpg";
import galleryLogo1 from "../../assets/Gallery/Gallery-logo-1.png";

import businessCard2 from "../../assets/Gallery/business card-2.jpg";
import coding2 from "../../assets/Gallery/coding-2.jpg";
import ppc2 from "../../assets/Gallery/ppc-2.jpg";
import socialMediaDesign2 from "../../assets/Gallery/social media design-2.jpg";
import websiteUIDesign2 from "../../assets/Gallery/website UI design-2.jpg";
import galleryLogo2 from "../../assets/Gallery/Gallery-logo-2.png";

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
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const isClickPreventedRow1Ref = useRef(false);
  const isClickPreventedRow2Ref = useRef(false);

  const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  useLayoutEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    const row1Width = row1.scrollWidth / 2;
    const row2Width = row2.scrollWidth / 2;

    const timeline1 = gsap.to(row1, {
      x: `-=${row1Width}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % row1Width),
      },
    });

    gsap.set(row2, { x: -row2Width });
    const timeline2 = gsap.to(row2, {
      x: `+=${row2Width}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % row2Width),
      },
    });

    const enableDrag = (row, timeline, direction = 1, isClickRef) => {
      let startX = 0;
      let currentX = 0;
      let isDragging = false;

      const onPointerDown = (e) => {
        isDragging = false;
        isClickRef.current = false;
        startX = e.clientX || e.touches?.[0]?.clientX;
        timeline.pause();

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
      };

      const onPointerMove = (e) => {
        currentX = e.clientX || e.touches?.[0]?.clientX;
        const delta = currentX - startX;

        if (Math.abs(delta) > 3) {
          isDragging = true;
          isClickRef.current = true;
        }

        gsap.set(row, {
          x: `+=${delta * direction}`,
        });

        startX = currentX;
      };

      const onPointerUp = () => {
        timeline.resume();

        setTimeout(() => {
          isClickRef.current = false;
        }, 50);

        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      };

      row.addEventListener("pointerdown", onPointerDown);

      return () => {
        row.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      };
    };

    const cleanup1 = enableDrag(row1, timeline1, 1, isClickPreventedRow1Ref);
    const cleanup2 = enableDrag(row2, timeline2, 1, isClickPreventedRow2Ref); // direction=1 (same scroll direction), reverse in GSAP instead

    return () => {
      cleanup1();
      cleanup2();
      timeline1.kill();
      timeline2.kill();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-row" ref={row1Ref}>
          {[...images, ...images].map((src, index) => (
            <div
              key={`row1-${index}`}
              className="gallery-item"
              style={{
                backgroundImage: `url(${src})`,
                cursor: "url('/Cursors/CursorPointer.cur'), pointer",
              }}
              onClick={() => {
                if (!isClickPreventedRow1Ref.current) {
                  openModal(src);
                }
              }}
            ></div>
          ))}
        </div>
        <div className="gallery-row" ref={row2Ref}>
          {[...images2, ...images2].map((src, index) => (
            <div
              key={`row2-${index}`}
              className="gallery-item"
              style={{
                backgroundImage: `url(${src})`,
                cursor: "url('/Cursors/CursorPointer.cur'), pointer",
              }}
              onClick={() => {
                if (!isClickPreventedRow2Ref.current) {
                  openModal(src);
                }
              }}
            ></div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" onClick={closeModal}>
            <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="Gallery Full View" />
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

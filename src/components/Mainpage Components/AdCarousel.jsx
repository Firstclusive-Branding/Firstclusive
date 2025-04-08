import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "../../styles/Mainpage Styles/AdCarousel.css";
import "swiper/css/pagination";

import LogoImg from "../../assets/Ad Carousel Assets/Ad BG/Logo.png";
import UiUXImg from "../../assets/Ad Carousel Assets/Ad BG/UiUX.jpg";
import WebDevImg from "../../assets/Ad Carousel Assets/Ad BG/WebDev.jpg";
import DigitalMarketingImg from "../../assets/Ad Carousel Assets/Ad BG/Digital Marketing.jpg";
import PrintingImg from "../../assets/Ad Carousel Assets/Ad BG/Printing.jpg";

import LogoImgPng from "../../assets/Ad Carousel Assets/LogoBranding.png";
import UiUXImgPng from "../../assets/Ad Carousel Assets/UIUX.png";
import WebDevImgPng from "../../assets/Ad Carousel Assets/WebDev.png";
import DigitalMarketingImgPng from "../../assets/Ad Carousel Assets/DigitalMarketing.png";
import PrintingImgPng from "../../assets/Ad Carousel Assets/Printing.png";

const AdCarousel = () => {
  const slides = [
    {
      title: "Logo & Branding",
      description:
        "We create visual identities that don’t just look good – they make your business memorable. From strategy to final design, everything is built to stand out and sell.",
      image: LogoImg,
      imagePng: LogoImgPng,
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful interfaces that actually work. We design experiences that make users stay, engage, and convert – no fluff, just functional design.",
      image: UiUXImg,
      imagePng: UiUXImgPng,
    },
    {
      title: "Web Development",
      description:
        "Your website shouldn’t be a digital brochure – it should be your hardest-working salesman. We build fast, responsive, and conversion-focused websites from scratch.",
      image: WebDevImg,
      imagePng: WebDevImgPng,
    },
    {
      title: "Digital Marketing",
      description:
        "Visibility is just the start. We craft digital campaigns that drive traffic, generate leads, and bring in real ROI – across SEO, ads, content and more.",
      image: DigitalMarketingImg,
      imagePng: DigitalMarketingImgPng,
    },
    {
      title: "Printing Services",
      description:
        "Business cards, brochures, packaging – if it’s printed, we’ll make sure it feels premium and represents your brand right, down to the last detail.",
      image: PrintingImg,
      imagePng: PrintingImgPng,
    },
  ];

  return (
    <div className="adcarousel-wrapper">
      <Swiper
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="adcarousel-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="adcarousel-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="adcarousel-overlay" />
            <div className="adcarousel-content animate-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <Link to="/contact-us" className="adcarousel-link">
                Contact Us
              </Link>
            </div>
            <div className="ad-caoursel-png-container">
              <img src={slide.imagePng} alt={slide.imagePng} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdCarousel;

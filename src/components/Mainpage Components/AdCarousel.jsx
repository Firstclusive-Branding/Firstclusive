import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/Mainpage Styles/AdCarousel.css";

import LogoBrandingAd from "../../assets/Ad Carousel Images/Logo & Branding_.jpg";
import UIUXAd from "../../assets/Ad Carousel Images/UI_UX Design.jpg";
import WebDevAd from "../../assets/Ad Carousel Images/Web Development.jpg";
import DigitalMarketingAd from "../../assets/Ad Carousel Images/Digital Marketing.jpg";
import PrintingAd from "../../assets/Ad Carousel Images/Printing Services.jpg";

const images = [
  LogoBrandingAd,
  UIUXAd,
  WebDevAd,
  DigitalMarketingAd,
  PrintingAd,
];

const AdCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        lazy="true"
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="ad-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdCarousel;

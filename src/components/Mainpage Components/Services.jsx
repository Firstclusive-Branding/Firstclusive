import logoAndBrandingImage from "../../assets/Services/Logo & Branding.jpg";
import uiUxDesignImage from "../../assets/Services/UIUX Design.webp";
import webDevelopmentImage from "../../assets/Services/Web Development.webp";
import digitalMarketingImage from "../../assets/Services/Digital Marketing.webp";
import printingImage from "../../assets/Services/Printing.webp";
import "../../styles/Mainpage Styles/Services.css";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "Logo & Branding",
    class: "logo-branding",
    image: logoAndBrandingImage,
  },
  {
    id: "02",
    title: "UI/UX Design",
    class: "ui-ux-design",
    image: uiUxDesignImage,
  },
  {
    id: "03",
    title: "Web Development",
    class: "web-development",
    image: webDevelopmentImage,
  },
  {
    id: "04",
    title: "Digital Marketing",
    class: "digital-marketing",
    image: digitalMarketingImage,
  },
  {
    id: "05",
    title: "Printing",
    class: "printing",
    image: printingImage,
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {services.map((service) => (
        <Link
          to={`/our-services#${service.class}`}
          key={service.id}
          className="service-card"
        >
          <div className="service-text">
            <span className="service-id">{service.id}</span>
            <span className="service-title">{service.title}</span>
          </div>
          <div
            className="service-bg"
            style={{ backgroundImage: `url(${service.image})` }}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default Services;

import logoAndBrandingImage from "../assets/Services/Logo & Branding.jpg";
import uiUxDesignImage from "../assets/Services/UIUX Design.webp";
import webDevelopmentImage from "../assets/Services/Web Development.webp";
import digitalMarketingImage from "../assets/Services/Digital Marketing.webp";
import printingImage from "../assets/Services/Printing.webp";
import "../styles/Services.css";

const services = [
  {
    id: "01",
    title: "Logo & Branding",
    image: logoAndBrandingImage,
  },
  {
    id: "02",
    title: "UI/UX Design",
    image: uiUxDesignImage,
  },
  {
    id: "03",
    title: "Web Development",
    image: webDevelopmentImage,
  },
  {
    id: "04",
    title: "Digital Marketing",
    image: digitalMarketingImage,
  },
  {
    id: "05",
    title: "Printing",
    image: printingImage,
  },
];

export default function Services() {
  return (
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <div className="service-text">
            <span className="service-id">{service.id}</span>
            <span className="service-title">{service.title}</span>
          </div>
          <div
            className="service-bg"
            style={{ backgroundImage: `url(${service.image})` }}
          ></div>
        </div>
      ))}
    </div>
  );
}

import logoBranding from "../assets/AdCarousel/Logo-ad.png";
import UIUX from "../assets/AdCarousel/UIUX-Ad.png";
import webdev from "../assets/AdCarousel/web-dev-ad.png";
import Digitalmarketing from "../assets/AdCarousel/digital-marketing-ad.png";
import printing from "../assets/AdCarousel/Printing-ad.png";

const AdList = () => {
  return [
    {
      title: "Logo & Branding",
      description:
        "Craft a strong and memorable brand identity with professional logo design, brand strategy, and visual elements that set you apart in the market.",
      services: [
        "Custom Logo Design",
        "Brand Guidelines",
        "Corporate Identity",
        "Rebranding Solutions",
        "Stationery Design",
      ],
      adImage: logoBranding,
    },
    {
      title: "UI/UX Design",
      description:
        "Create seamless, user-friendly, and visually engaging digital experiences with intuitive UI/UX design that keeps customers engaged and improves conversions.",
      services: [
        "Wireframing & Prototyping",
        "User Research & Testing",
        "Interactive UI Designs",
        "Mobile & Web App Design",
        "Usability Enhancement",
      ],
      adImage: UIUX,
    },
    {
      title: "Web Development",
      description:
        "Develop fast, secure, and mobile-responsive websites tailored to your business needs. From corporate sites to eCommerce platforms, we build websites that drive results.",
      services: [
        "Custom Website Development",
        "eCommerce Solutions",
        "CMS Integration",
        "Website Maintenance",
        "Performance Optimization",
      ],
      adImage: webdev,
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with data-driven digital marketing strategies, including SEO, PPC ads, social media marketing, and content marketing that generate leads and sales.",
      services: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Social Media Management",
        "Content Marketing",
        "Email Marketing Campaigns",
      ],
      adImage: Digitalmarketing,
    },
    {
      title: "Printing Services",
      description:
        "High-quality printing solutions for business cards, brochures, banners, and more. Get premium prints that reflect your brand’s professionalism and quality.",
      services: [
        "Business Cards & Letterheads",
        "Flyers & Brochures",
        "Posters & Banners",
        "Custom Packaging Printing",
        "Corporate Merchandise Printing",
      ],
      adImage: printing,
    },
  ];
};

export default AdList;

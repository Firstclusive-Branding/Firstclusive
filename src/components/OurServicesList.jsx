import Logo1 from "../assets/OurServices/Logos/Logo1.png";
import Logo2 from "../assets/OurServices/Logos/Logo2.png";
import Logo3 from "../assets/OurServices/Logos/Logo3.png";
import Logo4 from "../assets/OurServices/Logos/Logo4.png";
import Logo5 from "../assets/OurServices/Logos/Logo5.png";
import Logo6 from "../assets/OurServices/Logos/Logo6.png";
import Logo7 from "../assets/OurServices/Logos/Logo7.png";
import Logo8 from "../assets/OurServices/Logos/Logo8.png";
import Logo9 from "../assets/OurServices/Logos/Logo9.png";
import UIUXImage from "../assets/OurServices/UIUX.png";
import WebDevImage from "../assets/OurServices/WebDev.png";
import DigitalMarketingImage from "../assets/OurServices/Digital Marketing.png";
import PrintingImage from "../assets/OurServices/Printing.png";

import {
  Code,
  TrendingUp,
  Printer,
  Eye,
  Shield,
  Globe,
  ShoppingBag,
  MonitorSmartphone,
  Layers,
  BarChart,
  Search,
  Users,
  FileText,
  Brush,
} from "lucide-react";

const servicesList = [
  {
    title: "Logo & Branding",
    className: "logo-branding",
    description: `Your brand is your business identity. We create memorable and impactful logos that define your business, resonate with your audience, and make your brand instantly recognizable.`,
    logos: [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9],
    features: [
      {
        icon: <Eye size={40} color="#AFE507" />,
        title: "Brand Recognition",
        text: "Create a strong identity that makes your brand unforgettable.",
      },
      {
        icon: <Shield size={40} color="#AFE507" />,
        title: "Trust & Credibility",
        text: "Build authority and trust with a professionally designed brand.",
      },
      {
        icon: <Globe size={40} color="#AFE507" />,
        title: "Global Appeal",
        text: "Your brand should communicate your message worldwide.",
      },
    ],
    cta: "Let’s craft a brand that people remember! Get in touch today and start building your identity.",
  },
  {
    title: "UI/UX Design",
    className: "ui-ux-design",
    image: UIUXImage,
    description: `A visually stunning and user-friendly experience is the key to customer retention. We design UI/UX solutions that ensure smooth interaction, easy navigation, and high engagement.`,
    features: [
      {
        icon: <MonitorSmartphone size={40} color="#AFE507" />,
        title: "Mobile-Friendly",
        text: "Seamless experiences across all devices.",
      },
      {
        icon: <Layers size={40} color="#AFE507" />,
        title: "Clean & Minimal",
        text: "Aesthetic, intuitive, and user-centric designs.",
      },
      {
        icon: <ShoppingBag size={40} color="#AFE507" />,
        title: "Conversion Optimized",
        text: "We create designs that turn visitors into customers.",
      },
    ],
    cta: "Your customers deserve the best experience. Let’s build a UI/UX that makes them stay!",
  },
  {
    title: "Web Development",
    className: "web-development",
    image: WebDevImage,
    description: `A high-performing website is a business’s biggest asset. We build fast, secure, and user-friendly websites that attract visitors and drive sales.`,
    features: [
      {
        icon: <Code size={40} color="#AFE507" />,
        title: "Optimized Coding",
        text: "Fast, secure, and efficient websites that load quickly.",
      },
      {
        icon: <BarChart size={40} color="#AFE507" />,
        title: "SEO-Ready",
        text: "Rank higher on Google and drive organic traffic.",
      },
      {
        icon: <Search size={40} color="#AFE507" />,
        title: "Easy Navigation",
        text: "User-friendly and easy to explore.",
      },
    ],
    cta: "Your website should do more than exist. Let’s build a site that actually performs!",
  },
  {
    title: "Digital Marketing",
    className: "digital-marketing",
    image: DigitalMarketingImage,
    description: `Marketing is not just about being seen, but being remembered. Our digital marketing strategies help you reach your ideal audience and increase engagement.`,
    features: [
      {
        icon: <Users size={40} color="#AFE507" />,
        title: "Targeted Ads",
        text: "Reach the right audience at the right time.",
      },
      {
        icon: <TrendingUp size={40} color="#AFE507" />,
        title: "Performance Tracking",
        text: "Monitor your campaign success with real-time data.",
      },
      {
        icon: <FileText size={40} color="#AFE507" />,
        title: "Content Marketing",
        text: "Engage your audience with valuable and relevant content.",
      },
    ],
    cta: "Get noticed. Get leads. Grow your business with our marketing expertise!",
  },
  {
    title: "Printing",
    className: "printing",
    image: PrintingImage,
    description: `High-quality printed materials make your business look professional and reliable. From business cards to banners, we print everything with precision and excellence.`,
    features: [
      {
        icon: <Printer size={40} color="#AFE507" />,
        title: "Premium Quality",
        text: "Sharp, high-resolution prints that stand out.",
      },
      {
        icon: <Brush size={40} color="#AFE507" />,
        title: "Custom Designs",
        text: "Personalized prints tailored to your brand.",
      },
      {
        icon: <Shield size={40} color="#AFE507" />,
        title: "Durability",
        text: "Long-lasting, weather-resistant print materials.",
      },
    ],
    cta: "Make an impact with quality prints. Get started with us today!",
  },
];

export default servicesList;

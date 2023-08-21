import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default [
  {
    name: "linkedIn",
    url: "https://www.linkedin.com/in/ramkrishn-rai-b06727230/",
    icon: <FaLinkedin />,
    style: "hover:text-blue-500",
  },
  {
    name: "github",
    url: "https://github.com/Ram0O7",
    icon: <FaGithub />,
    style: "hover:text-backdrop",
  },
  {
    name: "whatsapp",
    url: "https://wa.me/916387514709",
    icon: <FaWhatsapp />,
    style: "hover:text-green-500",
  },
  {
    name: "instagram",
    url: "https://instagram.com/ram20krishn?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    icon: <FaInstagram />,
    style: "hover:text-red-500",
  },
];

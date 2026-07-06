import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaCss3Alt, FaCode } from "react-icons/fa"; // <--- FontAwesome para CSS y REST APIs
import { motion } from "framer-motion";

const Technologies = () => {
  const techIconsMap = {
    HTML: <SiHtml5 className="text-orange-500 text-5xl" />,
    CSS: <FaCss3Alt className="text-blue-500 text-5xl" />,
    JavaScript: <SiJavascript className="text-yellow-400 text-5xl" />,
    React: <SiReact className="text-cyan-400 text-5xl" />,
    "Node.js": <SiNodedotjs className="text-green-500 text-5xl" />,
    Express: <SiExpress className="text-white text-5xl" />,
    MongoDB: <SiMongodb className="text-green-600 text-5xl" />,
    Git: <SiGit className="text-orange-600 text-5xl" />,
    GitHub: <SiGithub className="text-white text-5xl" />,
    "REST APIs": <FaCode className="text-purple-400 text-5xl" />, // <--- Icono genérico de código para APIs
  };

  const techList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "REST APIs",
  ];

  return (
   <section id="technologies" className="h-screen flex items-center justify-center bg-primary px-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {techList.map((techName, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center gap-2"
            >
              {techIconsMap[techName]}
              <span className="text-muted text-sm font-medium">{techName}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

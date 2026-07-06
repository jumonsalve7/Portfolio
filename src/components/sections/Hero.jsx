import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-primary px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm Juan Pablo
        </h1>
        <h2 className="text-3xl md:text-4xl text-accent font-semibold mb-6">
          Full Stack Developer
        </h2>
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I'm a passionate Junior Full Stack Developer with experience building
          responsive and user-friendly web applications using JavaScript, React,
          Node.js, Express, and MongoDB. I enjoy transforming ideas into clean,
          functional, and scalable solutions while continuously learning new
          technologies and improving my skills. I'm currently seeking
          opportunities where I can contribute, grow as a developer, and build
          meaningful digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-primary font-semibold px-8 py-3 rounded-lg transition-colors hover:bg-accent/80"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-muted text-white font-semibold px-8 py-3 rounded-lg transition-colors hover:bg-white/10"
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

// 👇 ESTA ES LA LÍNEA QUE TE FALTA
export default Hero;

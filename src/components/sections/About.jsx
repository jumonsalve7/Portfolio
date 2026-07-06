import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-primary px-4"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <div className="space-y-4 text-muted text-lg">
            <p>
              Hi! I'm Juan Pablo, a 25-year-old developer from Medellín,
              Colombia. Over the past three years, I've been dedicated to
              learning and building projects with JavaScript, React, Node.js,
              Express, and MongoDB. I'm excited to begin my professional career
              as a Full Stack Developer, where I can apply my skills, keep
              growing, and contribute to real-world projects. 
            </p>
            <p className="text-accent font-medium">
              I'm passionate
              about technology, always eager to learn new tools and best
              practices, and I approach every challenge with curiosity,
              dedication, and a positive attitude.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 👇 ESTA ES LA LÍNEA QUE TE FALTA (o está mal escrita)
export default About;

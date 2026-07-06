import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-primary px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-muted mb-8">
          Do you have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:juaco7720@gmail.com"
            className="text-accent hover:text-white text-3xl transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/jumonsalve7"
            className="text-accent hover:text-white text-3xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/juan-monsalve19"
            className="text-accent hover:text-white text-3xl transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        <a
          href="mailto:juaco7720@gmail.com"
          className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded-lg hover:bg-accent/80 transition-colors"
        >
          Send Me an Email
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;

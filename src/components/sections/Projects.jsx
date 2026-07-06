import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projectsData";

// Mapeo de tecnologías a colores (opcional, para darles estilo)
const techColors = {
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  JavaScript: "text-yellow-400",
  React: "text-cyan-400",
  "Node.js": "text-green-500",
  Express: "text-white",
  MongoDB: "text-green-600",
  "Socket.io": "text-gray-400",
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen flex items-center justify-center bg-primary px-4 py-8 overflow-y-auto"
    >
      <div className="max-w-6xl w-full">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-2">My Projects</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Here are some of my projects where I've turned code into cool,
            functional stuff.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-secondary rounded-xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-medium px-2 py-1 rounded-full bg-gray-800 ${techColors[tech] || "text-gray-300"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

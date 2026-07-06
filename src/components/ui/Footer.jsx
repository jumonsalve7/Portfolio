// 1. Importamos React
import React from 'react';

// 2. Importamos los iconos de redes sociales desde react-icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// 3. Importamos Framer Motion para la animación suave al hacer hover
import { motion } from 'framer-motion';

const Footer = () => {
  // 4. Obtenemos el año actual para el copyright (siempre actualizado)
  const currentYear = new Date().getFullYear();

  return (
    // Fondo PRIMARY (#0F172A), borde superior sutil para separar
    <footer id="footer" className="bg-primary border-t border-gray-800 py-4">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Fila superior: iconos de redes sociales */}
        <div className="flex justify-center gap-8 mb-6">
          
          {/* Enlace a GitHub - color ACCENT (#38BDF8) */}
          <motion.a
            href="https://github.com/jumonsalve7" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-accent text-3xl hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>

          {/* Enlace a LinkedIn - color ACCENT */}
          <motion.a
            href="https://www.linkedin.com/in/juan-monsalve19" // CAMBIA ESTE ENLACE POR EL TUYO
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-accent text-3xl hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>

          {/* Enlace a Email - color ACCENT */}
          <motion.a
            href="mailto:juaco7720@gmail.com" // CAMBIA ESTE EMAIL POR EL TUYO
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-accent text-3xl hover:text-white transition-colors duration-300"
          >
            <FaEnvelope />
          </motion.a>

        </div>

        {/* Fila inferior: texto de copyright con color MUTED (#94A3B8) */}
        <div className="text-center">
          <p className="text-muted text-sm">
            © {currentYear} Juan Pablo. Todos los derechos reservados.
          </p>
          <p className="text-muted text-xs mt-1 opacity-60">
            Hecho con React + Vite + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

// 5. Exportamos el componente
export default Footer;
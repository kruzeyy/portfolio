import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "MatchFlix", 
    desc: "Plateforme pour trouver les séries parfaites.", 
    image: "/images/matchflix.jpg",
    link: "#" 
  },
  { 
    title: "Weather App", 
    desc: "Application météo interactive.", 
    image: "/images/weather-app.jpg",
    link: "#" 
  },
  { 
    title: "PokéBooster", 
    desc: "Simulateur d'ouverture de boosters Pokémon.", 
    image: "/images/pokebooster.jpg",
    link: "#" 
  },
];

const Projects = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    setCursorPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    window.addEventListener("mousemove", updateCursor);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="py-20 bg-black text-white relative"
    >
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50"
        style={{ top: 0, left: 0, position: "fixed", transform: "translate(-50%, -50%)" }}
        animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        transition={{ duration: 0, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-extrabold tracking-tight">Mes Projets</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Découvrez quelques-unes de mes réalisations et mon approche du design interactif.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mt-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg transition transform hover:shadow-2xl relative"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.desc}</p>
                <a 
                  href={project.link} 
                  className="inline-block mt-4 px-5 py-2 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                >
                  Voir plus →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
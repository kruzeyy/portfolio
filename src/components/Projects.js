import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "PokéBooster", 
    desc: "Simulateur d'ouverture de boosters Pokémon.", 
    image: "/images/carte_pokemon_dos.png",
    link: "https://github.com/ynov-2024-b3a/projets-front-pokebooster" 
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
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-20 bg-black text-white relative"
    >
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none"
        style={{ top: 0, left: 0, position: "fixed", transform: "translate(-50%, -50%)" }}
        animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        transition={{ duration: 0, ease: "linear" }}
      />
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-extrabold tracking-tight">Mes Projets</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Découvrez quelques-unes de mes réalisations et mon approche du design interactif.
        </p>
        <p className="text-gray-400 mt-2">
          Pour voir plus de projets, consultez mon GitHub : 
          <a href="https://github.com/kruzeyy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            github.com/kruzeyy
          </a>.
        </p>
        <div className="grid md:grid-cols-3 gap-12 mt-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="max-w-sm h-[500px] flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            >
              <a href={project.link}>
                <img className="rounded-t-lg w-full h-60 object-contain" src={project.image} alt={project.title} />
              </a>
              <div className="p-5 flex-grow">
                <a href={project.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>
                <a href={project.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Voir plus
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
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
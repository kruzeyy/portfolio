import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "MatchFlix", desc: "Plateforme pour trouver les séries parfaites.", link: "#" },
  { title: "Weather App", desc: "Application météo interactive.", link: "#" },
  { title: "PokéBooster", desc: "Simulateur d'ouverture de boosters Pokémon.", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Projets</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-black rounded-xl hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.desc}</p>
              <a href={project.link} className="text-blue-400 mt-4 block">Voir plus →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
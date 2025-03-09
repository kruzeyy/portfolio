import React from "react";
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
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl font-extrabold text-center mb-16 tracking-tight">
          Mes Projets
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg transition transform hover:shadow-2xl"
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
    </section>
  );
};

export default Projects;
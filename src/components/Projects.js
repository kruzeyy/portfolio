import React from "react";

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
    image: "/images/carte_pokemon_dos.png",
    link: "https://github.com/ynov-2024-b3a/projets-front-pokebooster" 
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-extrabold tracking-tight">Mes Projets</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Découvrez quelques-unes de mes réalisations et mon approche du design interactif.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 mt-10">
          {projects.map((project, index) => (
            <div key={index} className="max-w-sm h-[500px] flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
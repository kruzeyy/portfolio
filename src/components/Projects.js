import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCustomCursor } from "../hooks/useCustomCursor";
import CustomCursor from "./CustomCursor";
import Particles from "./Particles";

const projects = [
  {
    title: "PokéBooster",
    desc: "Simulateur d'ouverture de boosters Pokémon.",
    image: "/images/carte_pokemon_dos.png",
    link: "https://github.com/ynov-2024-b3a/projets-front-pokebooster",
  },
];

const Projects = () => {
  const cursorPosition = useCustomCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
      style={{ opacity }}
    >
      <CustomCursor cursorPosition={cursorPosition} />

      {/* Particules animées en arrière-plan */}
      <Particles />

      {/* Effet de lumière dynamique qui suit la souris */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 70%)`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      />

      {/* Gradient overlay pour effet Apple-like */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />

      {/* Lueur subtile animée */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08), transparent 60%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 relative"
          style={{
            textShadow: `
              0 0 10px rgba(255, 255, 255, 0.2),
              0 0 20px rgba(59, 130, 246, 0.15),
              0 0 30px rgba(59, 130, 246, 0.1)
            `,
          }}
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            Mes Projets
          </motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg font-light"
        >
          Découvrez quelques-unes de mes réalisations et mon approche du design
          interactif.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 mt-3 text-base"
        >
          Pour voir plus de projets, consultez mon{" "}
          <motion.a
            href="https://github.com/kruzeyy"
            className="text-blue-400 hover:text-blue-300 underline transition-colors relative inline-block"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            GitHub
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          .
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Effet de glow au survol */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                initial={false}
              />

              {/* Bordure animée */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))`,
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="absolute inset-0.5 bg-black rounded-2xl" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden relative z-10"
              >
                <motion.img
                  className="w-full h-60 object-contain bg-gradient-to-br from-gray-900 to-black group-hover:scale-110 transition-transform duration-500"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Overlay au survol */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </a>
              <div className="p-6 flex-grow flex flex-col relative z-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-3"
                >
                  <motion.h5
                    className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h5>
                </a>
                <p className="mb-6 font-normal text-gray-300 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Voir plus</span>
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                    whileHover={{ x: 5 }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
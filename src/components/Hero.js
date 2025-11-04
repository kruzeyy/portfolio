import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useCustomCursor } from "../hooks/useCustomCursor";
import CustomCursor from "./CustomCursor";
import Particles from "./Particles";

const Hero = () => {
  const cursorPosition = useCustomCursor();
  const [showSnake, setShowSnake] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const fullTitle = "Bienvenue sur mon portfolio";
  const titlePart1 = "Bienvenue sur ";

  useEffect(() => {
    // Reset au chargement
    setDisplayedTitle("");
    setShowCursor(true);

    let currentIndex = 0;
    const typingSpeed = 80; // Vitesse de frappe en ms

    const typeInterval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        // Faire clignoter le curseur puis le masquer
        setTimeout(() => {
          setShowCursor(false);
        }, 500);
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  // Effet de lumière qui suit la souris
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
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-black to-black shadow-xl relative overflow-hidden"
    >
      <CustomCursor cursorPosition={cursorPosition} />
      
      {/* Particules animées en arrière-plan */}
      <Particles />

      {/* Effet de lumière dynamique qui suit la souris */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 70%)`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      />

      {/* Gradient overlay pour effet Apple-like */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
      
      {/* Lueur subtile autour du titre */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 50%)`,
        }}
      />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-white px-4 relative z-10"
        style={{
          textShadow: `
            0 0 10px rgba(255, 255, 255, 0.3),
            0 0 20px rgba(59, 130, 246, 0.2),
            0 0 30px rgba(59, 130, 246, 0.1)
          `,
        }}
      >
        <motion.span
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {displayedTitle.length > titlePart1.length ? (
            <>
              {titlePart1}
              <span className="text-gray-300 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                {displayedTitle.slice(titlePart1.length)}
              </span>
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-white ml-1"
                >
                  |
                </motion.span>
              )}
            </>
          ) : (
            <>
              {displayedTitle}
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-white ml-1"
                >
                  |
                </motion.span>
              )}
            </>
          )}
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl font-light px-4 relative z-10"
      >
        Découvrez mes projets et ma vision du design{" "}
        <motion.span
          className="relative cursor-pointer text-white hover:text-blue-400 transition-colors underline decoration-dotted decoration-blue-400/50"
          onClick={() => setShowSnake(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowSnake(true);
            }
          }}
          whileHover={{ scale: 1.05 }}
        >
          moderne.
        </motion.span>
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        onClick={() => setShowDescription(!showDescription)}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 relative z-10 backdrop-blur-sm border border-blue-400/20"
        aria-expanded={showDescription}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">
          {showDescription ? "Masquer" : "En savoir plus"}
        </span>
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {showDescription && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-gray-200 text-base sm:text-lg bg-gray-900/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl mx-4 shadow-2xl relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
          <p className="relative z-10 leading-relaxed">
            Je suis Maxime Pontus, actuellement en Mastere 1 en informatique,
            option développement Full Stack, à Lyon Ynov Campus. Je travaille en alternance
            en tant que Data Analyst chez AD'HOC RESEARCH, où je développe mes
            compétences en analyse de données et en développement web.
          </p>
        </motion.div>
      )}

      {showSnake && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50 p-4"
          onClick={() => setShowSnake(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl aspect-video flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://playpager.com/easy-chess/"
              className="w-full h-full border-4 border-white rounded-lg shadow-2xl"
              title="Easy Chess"
              allowFullScreen
            />
            <button
              onClick={() => setShowSnake(false)}
              className="absolute -top-12 right-0 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
              aria-label="Fermer"
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
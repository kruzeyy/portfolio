import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showMore, setShowMore] = useState(false);

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
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black shadow-xl backdrop-blur-lg relative"
      style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed" }}
    >
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none"
        style={{ top: 0, left: 0, position: "fixed", transform: "translate(-50%, -50%)" }}
        animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        transition={{ duration: 0, ease: "linear" }}
      />
      
      <motion.h1 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-semibold tracking-tight text-white"
        style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.1)" }}
      >
        Bienvenue sur <span className="text-gray-500">mon portfolio</span>
      </motion.h1>
      <p className="text-xl text-gray-400 mt-4 max-w-2xl font-light">
        Découvrez mes projets et ma vision du design moderne.
      </p>
      <motion.a
        onClick={() => setShowMore(!showMore)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
        className="mt-6 px-10 py-3 bg-white/10 text-white rounded-full text-lg font-medium border border-white/50 hover:bg-white/30 transition backdrop-blur-md cursor-pointer"
      >
        En savoir plus
      </motion.a>

      {showMore && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-8 text-gray-300 max-w-3xl text-lg font-light bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md"
        >
          <p>
            Ce portfolio met en avant mon expertise en développement web et mon approche du design.
            Animations fluides, interactivité soignée et expériences immersives sont au cœur de mon travail.
          </p>
          <p className="mt-4">
            Explorez mes projets et découvrez comment j’allie innovation et esthétique pour créer des interfaces modernes et impactantes.
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
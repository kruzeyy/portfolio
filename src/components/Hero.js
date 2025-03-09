import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Positionne le curseur au centre au chargement
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
      {/* Curseur personnalisé */}
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
        href="#projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
        className="mt-6 px-10 py-3 bg-white/10 text-white rounded-full text-lg font-medium border border-white/50 hover:bg-white/30 transition backdrop-blur-md"
      >
        En savoir plus
      </motion.a>
    </motion.section>
  );
};

export default Hero;
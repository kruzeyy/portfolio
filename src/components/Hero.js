import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showSnake, setShowSnake] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

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
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        style={{ top: 0, left: 0, position: "fixed", transform: "translate(-50%, -50%)" }}
        animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        transition={{ duration: 0.1, ease: "easeOut" }}
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
        Découvrez mes projets et ma vision du design <span className="relative cursor-pointer text-gray-200" onClick={() => setShowSnake(true)}>moderne.</span>
      </p>
      
      <button 
        onClick={() => setShowDescription(!showDescription)}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        {showDescription ? "Masquer" : "En savoir plus"}
      </button>

      {showDescription && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-gray-300 text-lg bg-gray-800 bg-opacity-50 p-4 rounded-lg"
        >
          <p>Je suis Maxime Pontus, actuellement en Bachelor 3 en informatique, option développement, à Lyon Ynov Campus. 
          Actuellement, je travaille en alternance en tant que Data Analyst chez AD'HOC RESEARCH, où je développe mes compétences en analyse de données et en développement web.</p>
        </motion.div>
      )}

      {showSnake && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
          <div className="relative w-[800px] h-[600px] flex flex-col items-center">
            <iframe 
              src="https://playpager.com/easy-chess/" 
              className="w-full h-full border-4 border-white rounded-lg shadow-lg"
              title="Easy Chess"
              allowFullScreen
            />
            <button 
              onClick={() => setShowSnake(false)} 
              className="absolute top-3 right-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Hero;
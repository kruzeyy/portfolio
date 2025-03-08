import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
        Bienvenue sur <span className="text-gray-400">mon Portfolio</span>
      </h1>
      <p className="text-xl text-gray-400 mt-4 max-w-2xl">
        Découvrez mon univers à travers des projets modernes et innovants.
      </p>
      <a href="#projects" className="mt-6 px-8 py-3 bg-white text-black rounded-lg text-lg font-semibold hover:bg-gray-300 transition">
        Explorer
      </a>
    </motion.section>
  );
};

export default Hero;
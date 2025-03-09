import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full ${scrolled ? "bg-white/50 backdrop-blur-lg shadow-lg" : "bg-white/30 backdrop-blur-md shadow-md"} text-black z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-black font-light">Maxime Pontus</h1>
        <div className="space-x-8 text-lg font-medium">
          <Link to="/" className="text-black font-medium hover:text-gray-900 transition-all duration-300">Accueil</Link>
          <Link to="/projects" className="text-black font-medium hover:text-gray-900 transition-all duration-300">Projets</Link>
          <Link to="/contact" className="text-black font-medium hover:text-gray-900 transition-all duration-300">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
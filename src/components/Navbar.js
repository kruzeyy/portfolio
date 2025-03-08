import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all ${scrolling ? "bg-black bg-opacity-80 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Maxime</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">Accueil</Link>
          <Link to="/projects" className="hover:text-gray-400 transition">Projets</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
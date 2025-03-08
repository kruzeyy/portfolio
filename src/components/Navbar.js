import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Maxime</h1>
        <div className="flex space-x-6"> {/* Ajout de "flex space-x-6" */}
          <Link to="/" className="hover:text-gray-400 transition">Accueil</Link>
          <Link to="/about" className="hover:text-gray-400 transition">À propos</Link>
          <Link to="/work" className="hover:text-gray-400 transition">Projets</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
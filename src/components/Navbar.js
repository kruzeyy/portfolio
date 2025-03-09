import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-10">
        <h1 className="text-2xl font-light tracking-wide text-gray-900">Maxime Pontus</h1>
        <div className="space-x-10 text-lg font-medium">
          <Link to="/" className="text-gray-800 hover:text-gray-600 transition-all duration-300">Accueil</Link>
          <Link to="/Projects" className="text-gray-800 hover:text-gray-600 transition-all duration-300">Projets</Link>
          <Link to="/contact" className="text-gray-800 hover:text-gray-600 transition-all duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
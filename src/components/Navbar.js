import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-black font-light">Maxime Pontus</h1>
        <div className="space-x-8 text-lg font-medium">
          <Link to="/" className="text-black font-medium hover:text-gray-900 transition-all duration-300">Accueil</Link>
          <Link to="/Projects" className="text-black font-medium hover:text-gray-900 transition-all duration-300">Projets</Link>
          <Link to="/contact" className="text-black font-medium hover:text-gray-900 transition-all duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
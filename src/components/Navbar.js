import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  // Chemin vers le CV PDF - fonctionne en développement et en production sur Vercel
  const cvPath = `${process.env.PUBLIC_URL || ""}/Bleu et Blanc Moderne Photo Ingénierie CV.pdf`;

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/Projects", label: "Projets" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        <Link to="/" className="text-2xl font-light tracking-wide text-gray-900 hover:text-gray-700 transition-colors">
          Maxime Pontus
        </Link>
        <div className="flex space-x-6 md:space-x-10 text-base md:text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-all duration-300 relative ${
                isActive(link.to)
                  ? "text-gray-900 font-semibold"
                  : "text-gray-800 hover:text-gray-600"
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 rounded-full" />
              )}
            </Link>
          ))}
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-all duration-300"
            download="CV_Maxime_Pontus.pdf"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

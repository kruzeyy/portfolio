import { motion } from "framer-motion";

/**
 * Composant de curseur personnalisé réutilisable avec animation ultra-fluide
 */
const CustomCursor = ({ cursorPosition }) => {
  return (
    <motion.div
      className="fixed w-4 h-4 bg-white rounded-full pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.6)] z-[9999]"
      style={{ 
        top: 0, 
        left: 0, 
        transform: "translate(-50%, -50%)",
        willChange: "transform" // Optimisation des performances
      }}
      animate={{ 
        x: cursorPosition.x, 
        y: cursorPosition.y 
      }}
      transition={{ 
        type: "tween",
        duration: 0, // Pas de transition pour suivre instantanément
        ease: "linear"
      }}
    />
  );
};

export default CustomCursor;


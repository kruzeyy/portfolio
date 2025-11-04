import { motion } from "framer-motion";
import { useCustomCursor } from "../hooks/useCustomCursor";
import CustomCursor from "./CustomCursor";

const Contact = () => {
  const cursorPosition = useCustomCursor();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="h-screen flex items-center justify-center bg-black text-white relative"
    >
      <CustomCursor cursorPosition={cursorPosition} />

      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Me Contacter</h2>
        <p className="text-gray-400 mt-4 text-lg">Envoyez-moi un message pour collaborer !</p>
        <a
          href="mailto:pontus.maxime@yahoo.com"
          className="mt-6 inline-block bg-white px-6 py-3 rounded-lg text-black font-bold hover:bg-gray-300 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Envoyer un Email
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
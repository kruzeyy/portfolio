import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
      className="h-screen flex items-center justify-center bg-black text-white relative"
    >
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        style={{ top: 0, left: 0, position: "fixed", transform: "translate(-50%, -50%)" }}
        animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />

      <div className="text-center">
        <h2 className="text-5xl font-bold">Me Contacter</h2>
        <p className="text-gray-400 mt-4">Envoyez-moi un message pour collaborer !</p>
        <a href="mailto:pontus.maxime@yahoo.com" className="mt-6 inline-block bg-white px-6 py-3 rounded-lg text-black font-bold hover:bg-gray-300 transition">
          Envoyer un Email
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
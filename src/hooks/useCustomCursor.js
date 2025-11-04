import { useState, useEffect, useRef } from "react";

/**
 * Hook personnalisé pour gérer le curseur personnalisé avec interpolation fluide
 * @returns {Object} Position du curseur { x, y }
 */
export const useCustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Initialiser la position au centre de l'écran
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    targetPosition.current = { x: centerX, y: centerY };
    currentPosition.current = { x: centerX, y: centerY };
    setCursorPosition({ x: centerX, y: centerY });

    const updateTarget = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    // Fonction d'interpolation fluide avec requestAnimationFrame
    const smoothUpdate = () => {
      const current = currentPosition.current;
      const target = targetPosition.current;
      
      // Facteur de lissage élevé pour un suivi très réactif
      // Plus proche de 1 = plus réactif, plus proche de 0 = plus fluide mais plus lent
      const smoothingFactor = 0.6;
      
      const newX = current.x + (target.x - current.x) * smoothingFactor;
      const newY = current.y + (target.y - current.y) * smoothingFactor;

      // Mettre à jour la position actuelle
      currentPosition.current = { x: newX, y: newY };
      setCursorPosition({ x: newX, y: newY });
      
      rafId.current = requestAnimationFrame(smoothUpdate);
    };

    window.addEventListener("mousemove", updateTarget, { passive: true });
    document.body.style.cursor = "none";
    
    // Démarrer l'animation fluide
    rafId.current = requestAnimationFrame(smoothUpdate);

    return () => {
      window.removeEventListener("mousemove", updateTarget);
      document.body.style.cursor = "default";
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return cursorPosition;
};


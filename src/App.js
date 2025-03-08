import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center text-4xl mt-20">Page d'accueil</h1>} />
        <Route path="/about" element={<h1 className="text-center text-4xl mt-20">À propos</h1>} />
        <Route path="/work" element={<h1 className="text-center text-4xl mt-20">Projets</h1>} />
        <Route path="/contact" element={<h1 className="text-center text-4xl mt-20">Contact</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
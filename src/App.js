import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
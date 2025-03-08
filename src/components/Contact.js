import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Me Contacter</h2>
        <p className="text-gray-400 mt-4">Envoyez-moi un message pour collaborer !</p>
        <a href="mailto:maxime@example.com" className="mt-6 inline-block bg-white px-6 py-3 rounded-lg text-black font-bold hover:bg-gray-300 transition">
          Envoyer un Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
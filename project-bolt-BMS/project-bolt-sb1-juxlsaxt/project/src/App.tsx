import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About"; // <- dipakai di AboutPage
import VisiMisi from "./components/VisiMisi";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Halaman Home (isi semua section kecuali About)
const Home = () => (
  <>
    <Hero />
    <Services />
    <VisiMisi />
    <Portfolio />
    <Contact />
  </>
);

// Halaman About
const AboutPage = () => (
  <main>
    <About />
  </main>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

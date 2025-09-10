import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import VisiMisi from "./components/VisiMisi";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Halaman Home (gabungan beberapa section)
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

// Halaman Services
const ServicesPage = () => (
  <main>
    <Services />
  </main>
);

// Halaman Portfolio
const PortfolioPage = () => (
  <main>
    <Portfolio />
  </main>
);

// Halaman Contact
const ContactPage = () => (
  <main>
    <Contact />
  </main>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

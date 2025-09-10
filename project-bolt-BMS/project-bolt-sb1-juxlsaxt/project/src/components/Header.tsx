import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50">
      {/* Top bar */}
      <div className="bg-[#2e90ff] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+62 816-1127-017</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>bms130121@gmail.com</span>
            </div>
          </div>

          <div className="hidden md:block">
            <span>Jam Kerja: Senin - Jumat 09:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Brand (Logo + Nama PT) */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Logo BMS"
              className="h-14 w-auto object-contain"
            />
            <span className="text-[14px] font-bold text-blue-900">
              PT. BELVIA MAJU SINERGI
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium transition-colors">Home</Link>
            <Link to="/services" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium transition-colors">Services</Link>
            <Link to="/about" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium transition-colors">About</Link>
            <Link to="/portfolio" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium transition-colors">Portfolio</Link>
            <Link to="/contact" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#2e90ff] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 border-t border-gray-200 animate-slideDown">
            <div className="flex flex-col space-y-6 px-4">
              <Link to="/" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium text-lg">Home</Link>
              <Link to="/services" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium text-lg">Service</Link>
              <Link to="/about" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium text-lg">About</Link>
              <Link to="/portfolio" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium text-lg">Portfolio</Link>
              <Link to="/contact" onClick={closeMenu} className="text-gray-700 hover:text-[#2e90ff] font-medium text-lg">Contact</Link>
              <Link to="/contact" onClick={closeMenu} className="bg-[#2e90ff] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors text-center">Hubungi Kami</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
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
          <div className="flex items-center gap-2">
            <img src="/logo.png" // ganti dengan path logo Anda
              alt="Logo BMS"
              className="h-[4rem] w-auto"
            />
            <span className="text-2xl font-bold text-blue-900">
              PT. BELVIA MAJU SINERGI
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#beranda" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Home
            </a>
            <a href="#layanan" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Service
            </a>
            <a href="#tentang" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              About
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Portfolio
            </a>
            <a href="#kontak" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <button className="bg-[#2e90ff] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2e90ff] transition-colors">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#beranda" className="text-gray-700 hover:text-blue-900 font-medium">
                Home
              </a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-900 font-medium">
                Service
              </a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-900 font-medium">
                About
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-900 font-medium">
                Portfolio
              </a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-900 font-medium">
                Contact
              </a>
              <button className="bg-[#2e90ff] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2e90ff] transition-colors w-full">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
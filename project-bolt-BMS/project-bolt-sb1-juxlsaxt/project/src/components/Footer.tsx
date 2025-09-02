import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-1xl font-bold text-white mb-4">
                PT. BELVIA MAJU SINERGI
              </h3>
              <p className="text-gray-300 leading-relaxed">
              Kontrkator HVAC Terbaik Yang Memberikan Layanan Desain, Instalasi, Service dan Perbaikan Teknik Di Indonesia
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Pembangunan Rumah
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Gedung Komersial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2e90ff]transition-colors">
                  Renovasi & Remodeling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Interior & Finishing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Landscaping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Instalasi MEP
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <a href="#beranda" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-gray-300 hover:text-[#2e90ff] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#2e90ff] mt-1" size={30} />
                <div>
                  <p className="text-gray-300">
                    Jl. Perintis No.15 RT 03/003, Kalimulya, Kec. Cilodong,<br />
                    Kota Depok 16414 Jawa Barat, <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-[#2e90ff]" size={20} />
                <p className="text-gray-300">+62 816-1127-017</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-[#2e90ff]" size={20} />
                <p className="text-gray-300">bms130121@gmail.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-[#2e90ff] mt-1" size={20} />
                <div>
                  <p className="text-gray-300">
                    Senin - Jumat: 09:00 - 17:00<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-15 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PT. BELVIA MAJU SINERGI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#2e90ff] text-sm transition-colors">

              </a>
              <a href="#" className="text-gray-400 hover:text-[#2e90ff]text-sm transition-colors">

              </a>
              <a href="#" className="text-gray-400 hover:text-[#2e90ff] text-sm transition-colors">

              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

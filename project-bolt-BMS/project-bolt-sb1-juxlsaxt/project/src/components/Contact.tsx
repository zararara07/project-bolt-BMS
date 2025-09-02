import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Hubungi <span className="text-[#2e90ff]">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Siap membantu mewujudkan proyek impian Anda. Konsultasi gratis untuk semua layanan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="text-[#2e90ff]"size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                  <p className="text-gray-600">+62 816-1127-017</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="text-[#2e90ff]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">bms130121@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="text-[#2e90ff]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Perintis No.15 RT 03/003, Kalimulya, Kec. Cilodong,<br />
                    Kota Depok 16414<br />
                    Jawa Barat, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="text-[#2e90ff]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00</p>
                  <p className="text-gray-600">Sabtu: 08:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Hubungi Kami
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e90ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e90ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e90ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Layanan
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e90ff] focus:border-transparent transition-all"
                  >
                    <option value="">Pilih Layanan</option>
                    <option value="pembangunan-rumah">Pembangunan Rumah</option>
                    <option value="gedung-komersial">Gedung Komersial</option>
                    <option value="renovasi">Renovasi & Remodeling</option>
                    <option value="interior">Interior & Finishing</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="instalasi-mep">Instalasi MEP</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e90ff] focus:border-transparent transition-all resize-none"
                  placeholder="Ceritakan tentang proyek yang ingin Anda bangun..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2e90ff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2e90ff]transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Kirim Pesan</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
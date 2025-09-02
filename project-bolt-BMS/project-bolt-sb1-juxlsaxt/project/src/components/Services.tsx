import React from 'react';
import { Home, Building2, Wrench, PaintBucket, TreePine, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="text-[#2e90ff]" size={40} />,
      title: "DESIGN HVAC SYSTEM",
      description: "Desain, instalasi, dan perawatan HVAC untuk rumah sakit, pabrik, dan gedung komersial, Serta Pengujian & balancing sistem untuk performa optimal."
    },
    {
      icon: <Building2 className="text-[#2e90ff]" size={40} />,
      title: "DESIGN CLEANROOM", 
      description: "Pembangunan ruang bersih (ruang operasi, laboratorium, ruang produksi farmasi), dan Sistem filtrasi HEPA & kontrol tekanan."
    },
    {
      icon: <Wrench className="text-[#2e90ff]" size={40} />,
      title: "Service & Maintenance",
      description: "Kontrak servis tahunan HVAC, dan Inspeksi rutin dan perbaikan cepat."
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            LAYANAN LUAR BIASA YANG <span className="text-[#2e90ff]">KAMI TAWARKAN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami berkomitmen terhadap keunggulan dalam setiap aspek pemanas dan pendingin udara, Mulai dari service, 
            Pemasangan, Hingga layanan pelanggan profesional dan keahlian teknologi kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#2e90ff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105">
            Lihat Semua Layanan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
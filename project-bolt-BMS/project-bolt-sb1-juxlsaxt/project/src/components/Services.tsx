import React from "react";
import { Home, Building2, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="text-[#2e90ff]" size={40} />,
      title: "DESIGN HVAC SYSTEM",
      description:
        "Desain, instalasi, dan perawatan HVAC untuk rumah sakit, pabrik, dan gedung komersial. Termasuk pengujian & balancing sistem untuk performa optimal.",
    },
    {
      icon: <Building2 className="text-[#2e90ff]" size={40} />,
      title: "DESIGN CLEANROOM",
      description:
        "Pembangunan ruang bersih (ruang operasi, laboratorium, ruang produksi farmasi) dengan sistem filtrasi HEPA & kontrol tekanan.",
    },
    {
      icon: <Wrench className="text-[#2e90ff]" size={40} />,
      title: "SERVICE & MAINTENANCE",
      description:
        "Kontrak servis tahunan HVAC, inspeksi rutin, serta perbaikan cepat dan profesional.",
    },
  ];

  return (
    <section
      id="layanan"
      className="pt-36"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            LAYANAN LUAR BIASA YANG{" "}
            <span className="text-[#2e90ff]">KAMI TAWARKAN</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan solusi terbaik dalam setiap aspek HVAC —
            mulai dari desain, pemasangan, service, hingga layanan pelanggan
            dengan standar profesional.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol */}
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

import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Award className="text-white" size={32} />,
      number: "15+",
      label: "Tahun Pengalaman",
    },
    {
      icon: <Users className="text-white" size={32} />,
      number: "500+",
      label: "Proyek Selesai",
    },
    {
      icon: <Clock className="text-white" size={32} />,
      number: "98%",
      label: "Tepat Waktu",
    },
    {
      icon: <Shield className="text-white" size={32} />,
      number: "100%",
      label: "Bergaransi",
    },
  ];

  return (
    <section
      id="tentang"
      className="py-20 bg-gradient-to-b from-blue-500 to-blue-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri - Teks */}
          <div className="space-y-8 text-white">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                ABOUT <span className="text-white">COMPANY</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                PT. Belvia Maju Sinergi adalah kontraktor HVAC dan Building
                Management System (BMS) yang berdiri pada tahun 2021. Kami fokus
                menyediakan solusi tata udara, kontrol lingkungan, dan manajemen
                gedung yang inovatif dan efisien untuk sektor rumah sakit,
                farmasi, kosmetik, dan industri.
              </p>
              <p className="text-lg leading-relaxed">
                Dengan tim ahli bersertifikat dan pengalaman di berbagai proyek
                strategis, kami berkomitmen memberikan layanan berkualitas
                tinggi, tepat waktu, dan sesuai standar internasional.
              </p>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/20 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan - Gambar */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/gambar1.jpg" // ganti dengan path logo Anda
              alt="Logo BMS"
              className="h-[39rem] w-auto"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

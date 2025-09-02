import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Award className="text-[#2e90ff]" size={32} />,
      number: "15+",
      label: "Tahun Pengalaman"
    },
    {
      icon: <Users className="text-[#2e90ff]" size={32} />,
      number: "500+", 
      label: "Proyek Selesai"
    },
    {
      icon: <Clock className="text-[#2e90ff]" size={32} />,
      number: "98%",
      label: "Tepat Waktu"
    },
    {
      icon: <Shield className="text-[#2e90ff]" size={32} />,
      number: "100%",
      label: "Bergaransi"
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                ABOUT <span className="text-[#2e90ff]">COMPANY</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                PT. Belvia Maju Sinergi adalah kontraktor HVAC dan Building Management System (BMS) yang berdiri pada tahun 2021.
                Kami fokus menyediakan solusi tata udara, kontrol lingkungan, dan manajemen gedung yang inovatif dan efisien
                untuk sektor rumah sakit, farmasi, kosmetik, dan industri.

              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dengan tim ahli bersertifikat dan pengalaman di berbagai proyek strategis, 
                kami berkomitmen memberikan layanan berkualitas tinggi, tepat waktu, dan sesuai standar internasional.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tim konstruksi profesional"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Proyek konstruksi"
                className="w-full h-32 object-cover rounded-xl"
              />
              <img 
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Tim kerja"
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
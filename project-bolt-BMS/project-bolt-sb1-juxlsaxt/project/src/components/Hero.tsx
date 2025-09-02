import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section
  id="beranda"
  className="relative bg-gradient-to-br from-[#2e90ff] via-[#2e90ff] to-[#2e90ff] text-white"
>


      {/* Hero content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Membangun
                <span className="text-blue-100"> Impian</span> Anda
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Kontraktor terpercaya dengan pengalaman 15+ tahun dalam pembangunan dan renovasi
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-blue-100" size={20} />
                <span className="text-lg">Kualitas terjamin dengan garansi</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-blue-100" size={20} />
                <span className="text-lg">Tim ahli berpengalaman</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-blue-100" size={20} />
                <span className="text-lg">Pengerjaan tepat waktu</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="gambar home.jpg"
                alt="Konstruksi modern"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e90ff]/50 to-transparent"></div>
            </div>
          </div>
          </div>
        </div>


      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 lg:h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

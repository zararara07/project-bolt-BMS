// components/VisiMisi.tsx
import React from 'react';

export default function VisiMisi() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Visi & Misi</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi perusahaan kontraktor HVAC dan BMS terdepan di Indonesia yang inovatif, 
              terpercaya, dan berkelanjutan.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Misi</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Menyediakan jasa konstruksi dan instalasi HVAC & BMS dengan kualitas terbaik dan harga kompetitif.</li>
              <li>Memberikan pelayanan purna jual yang responsif dan berkelanjutan.</li>
              <li>Mengembangkan SDM melalui pelatihan dan sertifikasi berstandar internasional.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

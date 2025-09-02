import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rumah Modern Minimalis",
      location: "BSD City, Tangerang",
      year: "2024",
      category: "Residential",
      description: "Pembangunan rumah modern 2 lantai dengan desain minimalis dan material premium."
    },
    {
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800", 
      title: "Gedung Perkantoran",
      location: "Kuningan, Jakarta",
      year: "2023",
      category: "Commercial",
      description: "Konstruksi gedung perkantoran 8 lantai dengan standar green building."
    },
    {
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Villa Resort",
      location: "Bogor, Jawa Barat", 
      year: "2023",
      category: "Resort",
      description: "Pembangunan villa resort dengan konsep eco-friendly dan sustainable design."
    },
    {
      image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Renovasi Rumah Klasik",
      location: "Menteng, Jakarta",
      year: "2024", 
      category: "Renovation",
      description: "Renovasi total rumah klasik dengan mempertahankan karakter arsitektur asli."
    },
    {
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Kompleks Perumahan",
      location: "Bekasi, Jawa Barat",
      year: "2023",
      category: "Housing",
      description: "Pembangunan kompleks perumahan 50 unit dengan fasilitas lengkap."
    },
    {
      image: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Townhouse Premium",
      location: "PIK, Jakarta Utara",
      year: "2024",
      category: "Residential", 
      description: "Pembangunan townhouse premium dengan desain kontemporer dan smart home system."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Portfolio <span className="text-[#2e90ff]">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beberapa proyek terbaik yang telah kami selesaikan dengan standar kualitas tinggi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#2e90ff] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-2" />
                    {project.year}
                  </div>
                </div>
                
                <button className="flex items-center text-[#2e90ff] font-semibold hover:text-[#2e90ff] transition-colors">
                  <span>Lihat Detail</span>
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#2e90ff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2e90ff] transition-colors transform hover:scale-105">
            Lihat Portfolio Lengkap
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

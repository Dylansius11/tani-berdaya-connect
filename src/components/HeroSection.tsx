
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-r from-farmer-light/20 via-farmer/20 to-farmer-dark/20">
      <div className="absolute inset-0 bg-grain-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              <span className="block">Pertanian Indonesia</span>
              <span className="text-farmer">Lebih Baik</span> &amp; <span className="text-consumer">Sejahtera</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
              TaniTrack menghubungkan petani langsung dengan pembeli untuk mengeliminasi tengkulak, meningkatkan kesejahteraan petani, dan menjamin kualitas produk pertanian.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-farmer hover:bg-farmer-dark">
                <Link to="/buat-pesanan">Buat Pesanan</Link>
              </Button>
              <Button asChild size="lg" className="bg-consumer hover:bg-consumer-dark">
                <Link to="/jual-hasil-panen">Jual Hasil Panen</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white p-4 md:p-6 rounded-lg shadow-lg animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Petani Indonesia" 
                className="w-full h-auto rounded-lg" 
              />
              <div className="absolute -bottom-5 -right-5 bg-farmer text-white p-4 rounded-lg shadow-lg">
                <span className="text-3xl font-bold">15%</span>
                <span className="block text-sm">Lebih menguntungkan bagi petani</span>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-farmer/30 to-consumer/30 rounded-lg blur-3xl -z-10 transform -translate-y-10 translate-x-10"></div>
          </div>
        </div>
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h3 className="text-3xl font-bold text-farmer mb-1">50+</h3>
            <p className="text-gray-600">Komoditas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h3 className="text-3xl font-bold text-farmer mb-1">500+</h3>
            <p className="text-gray-600">Petani Terdaftar</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h3 className="text-3xl font-bold text-farmer mb-1">20+</h3>
            <p className="text-gray-600">Ambasador</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h3 className="text-3xl font-bold text-farmer mb-1">10+</h3>
            <p className="text-gray-600">Provinsi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-farmer to-farmer-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bergabunglah dengan Revolusi Pertanian Indonesia
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Baik Anda seorang petani, pembeli komoditas, atau ingin menjadi Ambasador, TaniTrack hadir untuk membantu Anda meningkatkan hasil dan efisiensi bisnis pertanian.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button asChild size="lg" className="bg-white text-farmer hover:bg-gray-100">
              <Link to="/daftar-petani">Daftar sebagai Petani</Link>
            </Button>
            <Button asChild size="lg" className="bg-consumer hover:bg-consumer-dark text-black">
              <Link to="/daftar-pembeli">Daftar sebagai Pembeli</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-farmer">
              <Link to="/jadi-ambasador">Jadi Ambasador</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

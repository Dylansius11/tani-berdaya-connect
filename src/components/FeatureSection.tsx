
import React from 'react';
import InfoCard from './InfoCard';
import { UsersRound, Truck, BarChart3, ShieldCheck } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solusi Lengkap untuk Ekosistem Pertanian
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            TaniTrack menghubungkan semua pemangku kepentingan dalam rantai pasok pertanian dengan cara yang transparan dan efisien
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard 
            title="Eliminasi Tengkulak"
            description="Menghilangkan peran tengkulak dengan menghubungkan petani langsung ke pembeli, meningkatkan keuntungan petani hingga 30%."
            icon={UsersRound}
            linkText="Pelajari Lebih Lanjut"
            linkUrl="/fitur/eliminasi-tengkulak"
            color="farmer"
          />
          
          <InfoCard 
            title="Distribusi Merata"
            description="Membantu pendistribusian komoditas yang lebih merata di seluruh Indonesia dengan sistem pesanan yang terhubung."
            icon={Truck}
            linkText="Pelajari Lebih Lanjut"
            linkUrl="/fitur/distribusi-merata"
            color="consumer"
          />
          
          <InfoCard 
            title="Pantau Harga"
            description="Dapatkan informasi real-time tentang harga komoditas di berbagai daerah untuk pengambilan keputusan yang lebih baik."
            icon={BarChart3}
            linkText="Pelajari Lebih Lanjut"
            linkUrl="/fitur/pantau-harga"
            color="farmer"
          />
          
          <InfoCard 
            title="Traceability"
            description="Lacak asal-usul komoditas dengan QR code untuk memastikan kualitas dan keaslian produk yang Anda beli."
            icon={ShieldCheck}
            linkText="Pelajari Lebih Lanjut"
            linkUrl="/fitur/traceability"
            color="consumer"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

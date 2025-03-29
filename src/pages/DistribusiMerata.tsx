
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Truck, BarChart3, Map } from 'lucide-react';

const DistribusiMerata = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-farmer-light/20 via-farmer/20 to-farmer-dark/20">
      <div className="absolute inset-0 bg-grain-pattern opacity-10"></div>
      
      {/* Header section */}
      <div className="relative py-16 md:py-24 container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-farmer hover:text-farmer-dark mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="indonesia-border w-24 mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Distribusi Merata</h1>
            <p className="text-lg text-gray-700 mb-8">
              TaniTrack memfasilitasi distribusi komoditas pertanian yang lebih merata ke seluruh Indonesia, memastikan pasokan yang stabil dan harga yang adil bagi petani dan konsumen.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <Truck className="mr-3 h-6 w-6 text-farmer" />
                <div>
                  <p className="font-bold">200+</p>
                  <p className="text-sm text-gray-600">Mitra Logistik</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <Map className="mr-3 h-6 w-6 text-farmer" />
                <div>
                  <p className="font-bold">34</p>
                  <p className="text-sm text-gray-600">Provinsi</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <BarChart3 className="mr-3 h-6 w-6 text-farmer" />
                <div>
                  <p className="font-bold">15%</p>
                  <p className="text-sm text-gray-600">Lebih Menguntungkan</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="bg-farmer hover:bg-farmer-dark text-white">
              <Link to="/buat-pesanan">Pesan Komoditas Sekarang</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/b99eeefc-fcf0-453a-bf90-e11dfbf98098.png" 
                alt="Ladang hijau di Indonesia" 
                className="w-full h-auto object-cover rounded-lg" 
              />
              <div className="absolute bottom-0 right-0 bg-farmer text-white p-4 rounded-tl-lg">
                <p className="text-xl font-bold">15%</p>
                <p className="text-sm">Lebih menguntungkan bagi petani</p>
              </div>
            </div>
            
            <div className="absolute -z-10 bottom-5 right-5 w-full h-full bg-consumer opacity-20 rounded-lg blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Benefits section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Keunggulan Distribusi Merata</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-white to-farmer-light/10 p-6 rounded-lg shadow-md card-hover">
              <div className="bg-farmer text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Distribusi Efisien</h3>
              <p className="text-gray-700">
                Sistem logistik yang terintegrasi meminimalkan waktu pengiriman dan menjamin kualitas komoditas tetap terjaga hingga sampai di tangan pembeli.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-white to-farmer-light/10 p-6 rounded-lg shadow-md card-hover">
              <div className="bg-consumer text-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Stabilitas Harga</h3>
              <p className="text-gray-700">
                Dengan distribusi yang merata, fluktuasi harga dapat diminimalisir, memberikan keuntungan bagi petani dan harga yang wajar bagi konsumen.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-white to-farmer-light/10 p-6 rounded-lg shadow-md card-hover">
              <div className="bg-farmer text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Map className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jangkauan Luas</h3>
              <p className="text-gray-700">
                Komoditas dapat didistribusikan ke seluruh wilayah Indonesia, termasuk daerah terpencil yang sebelumnya sulit mendapatkan akses pasar.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map section */}
      <div className="py-16 bg-gradient-to-r from-farmer-light/20 via-farmer/20 to-farmer-dark/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jangkauan Distribusi TaniTrack</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Kami telah membangun jaringan distribusi yang menjangkau seluruh wilayah Indonesia, dari Sabang sampai Merauke.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Peta Distribusi Indonesia</p>
              {/* Di sini bisa dimasukkan peta interaktif Indonesia jika tersedia */}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="py-16 bg-farmer text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bergabunglah dengan Revolusi Distribusi Pertanian</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jadi bagian dari solusi untuk meningkatkan kesejahteraan petani dan memastikan ketahanan pangan Indonesia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-farmer hover:bg-gray-100">
              <Link to="/daftar-petani">Daftar sebagai Petani</Link>
            </Button>
            <Button asChild size="lg" className="bg-consumer hover:bg-consumer-dark text-black">
              <Link to="/daftar-pembeli">Daftar sebagai Pembeli</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistribusiMerata;

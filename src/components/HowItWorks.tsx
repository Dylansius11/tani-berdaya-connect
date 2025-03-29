
import React from 'react';
import { ArrowRight, CreditCard, Package, ShoppingCart, Truck, Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Kerja TaniTrack</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proses yang sederhana untuk menghubungkan petani dengan pembeli secara langsung
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* For Farmers */}
          <div className="bg-farmer/5 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-farmer mb-6 text-center">Untuk Petani</h3>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-farmer text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Dapatkan TaniTrack Card</h4>
                  <p className="text-gray-600">Beli TaniTrack Card dari Ambasador terdekat untuk mulai menggunakan platform.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-farmer text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Bawa Hasil Panen</h4>
                  <p className="text-gray-600">Bawa hasil panen ke Ambasador terdekat untuk grading dan timbang.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-farmer text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Terima Pembayaran</h4>
                  <p className="text-gray-600">Terima pembayaran setelah pembeli menerima hasil panen yang sudah diverifikasi.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Flow Center */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="w-48 h-48 bg-gradient-to-r from-farmer-light to-farmer rounded-full flex items-center justify-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                alt="TaniTrack Flow" 
                className="w-40 h-40 object-cover rounded-full"
              />
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">TaniTrack</h3>
              <p className="text-gray-600">Platform yang transparan, aman, dan menguntungkan semua pihak</p>
              <div className="flex items-center justify-center gap-2">
                <span className="w-3 h-3 bg-farmer rounded-full animate-bounce-subtle"></span>
                <span className="w-3 h-3 bg-consumer rounded-full animate-bounce-subtle" style={{ animationDelay: '0.5s' }}></span>
                <span className="w-3 h-3 bg-farmer rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }}></span>
              </div>
            </div>
          </div>
          
          {/* For Consumers */}
          <div className="bg-consumer/5 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-consumer mb-6 text-center">Untuk Pembeli</h3>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-consumer text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Buat Pesanan</h4>
                  <p className="text-gray-600">Tentukan jenis komoditas, grade, dan jumlah yang Anda butuhkan.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-consumer text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Verifikasi Komoditas</h4>
                  <p className="text-gray-600">Lacak dan verifikasi kualitas komoditas menggunakan QR Code.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-consumer text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Terima & Konfirmasi</h4>
                  <p className="text-gray-600">Terima produk dan konfirmasi untuk menyelesaikan transaksi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

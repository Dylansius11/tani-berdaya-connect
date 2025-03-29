
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { CreditCard, ShieldCheck, Zap, Verified } from 'lucide-react';

const TanitrackCardSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              TaniTrack Card
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Jembatan antara petani tradisional dengan teknologi blockchain. TaniTrack Card 
              dilengkapi dengan teknologi NFC untuk kemudahan akses dan keamanan data.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-farmer-light rounded-full p-1.5 text-farmer">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Aman &amp; Terpercaya</h4>
                  <p className="text-gray-600 text-sm">Data tersimpan aman di blockchain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-farmer-light rounded-full p-1.5 text-farmer">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mudah Digunakan</h4>
                  <p className="text-gray-600 text-sm">Cukup tempelkan pada perangkat NFC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-farmer-light rounded-full p-1.5 text-farmer">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Multi Fungsi</h4>
                  <p className="text-gray-600 text-sm">Login, verifikasi, dan rekam transaksi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-farmer-light rounded-full p-1.5 text-farmer">
                  <Verified className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tahan Lama</h4>
                  <p className="text-gray-600 text-sm">Tahan air dan tahan lama</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-farmer hover:bg-farmer-dark">
                <Link to="/tanitrack-card">Pelajari Lebih Lanjut</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/daftar">Dapatkan Kartu</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <Card className="bg-gradient-to-r from-farmer to-farmer-dark text-white shadow-xl transform rotate-3 card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-white/80 mb-1">FARMER ID</p>
                      <h3 className="font-bold text-lg">TANITRACK</h3>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="mt-8 mb-6">
                    <div className="bg-white/20 h-10 w-full rounded-md"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-white/80 mb-1">NAMA</p>
                      <p className="font-medium">AGUS SURYANA</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/80 mb-1">LOKASI</p>
                      <p className="font-medium">JAWA BARAT</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/80 mb-1">ID</p>
                      <p className="font-medium">F-230599-JB</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/80 mb-1">AKTIF HINGGA</p>
                      <p className="font-medium">12/2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-consumer to-consumer-dark text-white shadow-xl absolute -bottom-8 -right-4 transform -rotate-6 card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-white/80 mb-1">BUYER ID</p>
                      <h3 className="font-bold text-lg">TANITRACK</h3>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="mt-8 mb-6">
                    <div className="bg-white/20 h-10 w-full rounded-md"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-white/80 mb-1">NAMA</p>
                      <p className="font-medium">PT PANGAN SEJAHTERA</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/80 mb-1">LOKASI</p>
                      <p className="font-medium">JAKARTA</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/80 mb-1">ID</p>
                      <p className="font-medium">B-451022-JK</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/80 mb-1">AKTIF HINGGA</p>
                      <p className="font-medium">09/2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TanitrackCardSection;

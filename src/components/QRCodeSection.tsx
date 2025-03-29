
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { QrCode, FileText, MapPin, CheckSquare, TruckIcon } from 'lucide-react';

const QRCodeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-farmer text-white rounded-md px-3 py-1 text-sm font-medium mb-4">
              Traceability
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lacak Keaslian &amp; Kualitas dengan QR Code
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Setiap komoditas dilengkapi dengan QR Code unik yang memuat informasi lengkap tentang asal, kualitas, dan perjalanan produk hingga sampai ke tangan Anda.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-farmer-light rounded-full p-1.5 text-farmer">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Transaction Hash</h4>
                  <p className="text-gray-600 text-sm">Rekam jejak transaksi di blockchain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-farmer-light rounded-full p-1.5 text-farmer">
                  <CheckSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Grade Komoditas</h4>
                  <p className="text-gray-600 text-sm">Informasi kualitas hasil panen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-farmer-light rounded-full p-1.5 text-farmer">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Asal Komoditas</h4>
                  <p className="text-gray-600 text-sm">Daerah asal dan petani penghasil</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-farmer-light rounded-full p-1.5 text-farmer">
                  <TruckIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Status Pengiriman</h4>
                  <p className="text-gray-600 text-sm">Pantau posisi pengiriman</p>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-farmer hover:bg-farmer-dark">
              <Link to="/cek-komoditas">Pelajari Cara Mengecek</Link>
            </Button>
          </div>
          
          <div className="relative">
            <Card className="bg-white shadow-lg relative z-10 p-6 card-hover">
              <CardContent className="p-0">
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-medium">TaniTrack QR Scanner</div>
                    <QrCode className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-white p-6 rounded-md flex items-center justify-center">
                    <QrCode className="h-32 w-32 text-farmer" />
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-4">Hasil Scan</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Transaction Hash</p>
                      <p className="text-sm font-mono bg-gray-100 p-2 rounded">0x7a23...9f21</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Komoditas</p>
                        <p className="font-medium">Beras Organik</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Grade</p>
                        <p className="font-medium">A Premium</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Asal</p>
                        <p className="font-medium">Karawang, Jawa Barat</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Tanggal Panen</p>
                        <p className="font-medium">15 Mei 2023</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Status Pengiriman</p>
                      <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-flex items-center">
                        <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                        Terkirim
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-farmer/30 to-consumer/30 blur-3xl transform translate-x-8 translate-y-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;

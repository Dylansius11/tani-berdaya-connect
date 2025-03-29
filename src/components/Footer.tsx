
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farmer text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="mb-6">
            <Link to="/" className="inline-block mb-4 flex items-center">
              <img 
                src="/lovable-uploads/dc9ed865-eb64-443f-8d95-f5edf6b16a02.png" 
                alt="TaniTrack Logo" 
                className="h-10 w-auto mr-2" 
              />
              <h2 className="text-2xl font-display font-bold">Tani<span className="text-consumer-light">Track</span></h2>
            </Link>
            <p className="text-gray-200 mb-4">
              Menghubungkan petani dengan pembeli secara langsung untuk pertanian Indonesia yang lebih baik.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://instagram.com" className="text-white hover:text-consumer-light">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-consumer-light">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-consumer-light">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/buat-pesanan" className="text-gray-200 hover:text-consumer-light flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Buat Pesanan
                </Link>
              </li>
              <li>
                <Link to="/jual-hasil-panen" className="text-gray-200 hover:text-consumer-light flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Jual Hasil Panen
                </Link>
              </li>
              <li>
                <Link to="/pantau-harga" className="text-gray-200 hover:text-consumer-light flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Pantau Harga
                </Link>
              </li>
              <li>
                <Link to="/tanitrack-card" className="text-gray-200 hover:text-consumer-light flex items-center">
                  <ChevronRight size={16} className="mr-1" /> TaniTrack Card
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="text-gray-200 hover:text-consumer-light flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-200">Jl. Tani Sejahtera No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-200">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-200">info@tanitrack.id</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Dapatkan Info Terbaru</h3>
            <p className="text-gray-200 mb-4">
              Daftar untuk mendapatkan informasi terbaru seputar komoditas pertanian
            </p>
            <form className="mt-2">
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Alamat Email Anda" 
                  className="bg-farmer-dark text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-consumer-light" 
                />
                <button 
                  type="submit"
                  className="bg-consumer text-black font-medium rounded-md px-4 py-2 transition-colors hover:bg-consumer-dark"
                >
                  Berlangganan
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-farmer-dark text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} TaniTrack. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

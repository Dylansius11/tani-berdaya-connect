
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Petani Padi, Karawang",
    quote: "Sejak menggunakan TaniTrack, saya bisa mendapatkan harga yang lebih baik untuk hasil panen padi saya. Tidak perlu lagi berurusan dengan tengkulak yang selalu menekan harga.",
    avatar: "BS"
  },
  {
    name: "PT Maju Pangan",
    role: "Pembeli B2B, Jakarta",
    quote: "Kami sangat puas dengan kualitas komoditas yang kami dapatkan melalui TaniTrack. Sistem pelacakan produknya sangat transparan dan memudahkan kami memantau kualitas.",
    avatar: "MP"
  },
  {
    name: "Ani Widyasari",
    role: "Petani Jagung, Malang",
    quote: "TaniTrack Card memudahkan saya yang tidak terlalu paham teknologi. Cukup tempelkan kartu di perangkat Ambasador, dan semua proses berjalan dengan mudah.",
    avatar: "AW"
  },
  {
    name: "Ahmad Faisal",
    role: "Ambasador TaniTrack, Bandung",
    quote: "Sebagai Ambasador TaniTrack, saya senang bisa membantu petani di daerah saya mendapatkan akses pasar yang lebih luas dan harga yang lebih baik.",
    avatar: "AF"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Mereka</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pengalaman dari petani, pembeli, dan ambasador yang telah menggunakan platform TaniTrack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-farmer">
                    <Quote className="h-8 w-8 opacity-70" />
                  </div>
                  <p className="text-gray-700 flex-grow mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-farmer text-white">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

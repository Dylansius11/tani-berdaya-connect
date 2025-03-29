
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowUp, Wheat, Coffee, Apple } from 'lucide-react';

// Dummy price data
const priceData = {
  beras: [
    { grade: 'A', price: 12500, change: 2.5, region: 'Jawa Barat' },
    { grade: 'B', price: 11000, change: -1.2, region: 'Jawa Tengah' },
    { grade: 'C', price: 9500, change: 0.8, region: 'Jawa Timur' },
  ],
  jagung: [
    { grade: 'A', price: 6500, change: 1.8, region: 'Jawa Timur' },
    { grade: 'B', price: 5800, change: -0.5, region: 'Jawa Tengah' },
    { grade: 'C', price: 5000, change: 0.3, region: 'Jawa Barat' },
  ],
  kedelai: [
    { grade: 'A', price: 9800, change: 3.2, region: 'Jawa Timur' },
    { grade: 'B', price: 8600, change: 1.5, region: 'Jawa Tengah' },
    { grade: 'C', price: 7500, change: -0.7, region: 'Jawa Barat' },
  ]
};

const PriceDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pantau Harga Komoditas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Informasi harga komoditas terkini dari berbagai daerah di Indonesia
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium">Filter Daerah:</div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pilih Daerah" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Daerah</SelectItem>
                <SelectItem value="jabar">Jawa Barat</SelectItem>
                <SelectItem value="jateng">Jawa Tengah</SelectItem>
                <SelectItem value="jatim">Jawa Timur</SelectItem>
                <SelectItem value="bali">Bali</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-gray-600">
            *Harga update terakhir: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>

        <Tabs defaultValue="beras" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="beras" className="flex items-center gap-2">
              <Wheat className="h-4 w-4" /> Beras
            </TabsTrigger>
            <TabsTrigger value="jagung" className="flex items-center gap-2">
              <Coffee className="h-4 w-4" /> Jagung
            </TabsTrigger>
            <TabsTrigger value="kedelai" className="flex items-center gap-2">
              <Apple className="h-4 w-4" /> Kedelai
            </TabsTrigger>
          </TabsList>
          
          {Object.keys(priceData).map((commodity) => (
            <TabsContent key={commodity} value={commodity} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {priceData[commodity as keyof typeof priceData].map((item, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader className="pb-2">
                      <CardTitle>Grade {item.grade}</CardTitle>
                      <CardDescription>{item.region}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end justify-between">
                        <div className="text-3xl font-bold">
                          Rp{item.price.toLocaleString('id-ID')}
                          <span className="text-sm text-gray-500">/kg</span>
                        </div>
                        <div className={`flex items-center ${item.change > 0 ? 'text-green-600' : item.change < 0 ? 'text-red-600' : 'text-gray-500'}`}>
                          {item.change > 0 ? (
                            <ArrowUp className="h-4 w-4 mr-1" />
                          ) : item.change < 0 ? (
                            <ArrowDown className="h-4 w-4 mr-1" />
                          ) : null}
                          {Math.abs(item.change)}%
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <a href="/pantau-harga" className="text-farmer font-medium hover:text-farmer-dark">
            Lihat semua daftar harga komoditas →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PriceDashboard;

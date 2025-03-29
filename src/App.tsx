
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/buat-pesanan" element={<NotFound />} />
          <Route path="/jual-hasil-panen" element={<NotFound />} />
          <Route path="/pesanan-aktif" element={<NotFound />} />
          <Route path="/pantau-harga" element={<NotFound />} />
          <Route path="/tanitrack-card" element={<NotFound />} />
          <Route path="/jadi-ambasador" element={<NotFound />} />
          <Route path="/cek-komoditas" element={<NotFound />} />
          <Route path="/tentang-kami" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/daftar" element={<NotFound />} />
          <Route path="/daftar-petani" element={<NotFound />} />
          <Route path="/daftar-pembeli" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

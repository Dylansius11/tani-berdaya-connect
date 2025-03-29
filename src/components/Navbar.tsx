
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="indonesia-border"></div>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <span className="text-farmer text-2xl font-display font-bold">Tani<span className="text-consumer">Track</span></span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Marketplace
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/buat-pesanan"
                        >
                          <div className="text-sm font-medium leading-none">Buat Pesanan</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Pesan komoditas pertanian sesuai kebutuhan Anda
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/jual-hasil-panen"
                        >
                          <div className="text-sm font-medium leading-none">Jual Hasil Panen</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Tawarkan hasil panen Anda kepada pembeli potensial
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/pesanan-aktif"
                        >
                          <div className="text-sm font-medium leading-none">Pesanan Aktif</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Lihat status pesanan yang sedang berjalan
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/pantau-harga"
                        >
                          <div className="text-sm font-medium leading-none">Pantau Harga</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Lihat perkembangan harga komoditas terkini
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Layanan
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/tanitrack-card"
                        >
                          <div className="text-sm font-medium leading-none">TaniTrack Card</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Pelajari cara kerja dan manfaat TaniTrack Card
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/jadi-ambasador"
                        >
                          <div className="text-sm font-medium leading-none">Jadi Ambasador</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Bergabunglah sebagai Ambasador TaniTrack di daerah Anda
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/cek-komoditas"
                        >
                          <div className="text-sm font-medium leading-none">Cek Komoditas</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Lacak keaslian dan kualitas komoditas melalui QR code
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/tentang-kami" className="text-base flex items-center gap-1 px-4 py-2 font-medium">
                  Tentang Kami
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button asChild>
            <Link to="/login" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Masuk</span>
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 py-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-medium">Marketplace</h2>
                <Link to="/buat-pesanan" className="text-sm text-muted-foreground py-2">Buat Pesanan</Link>
                <Link to="/jual-hasil-panen" className="text-sm text-muted-foreground py-2">Jual Hasil Panen</Link>
                <Link to="/pesanan-aktif" className="text-sm text-muted-foreground py-2">Pesanan Aktif</Link>
                <Link to="/pantau-harga" className="text-sm text-muted-foreground py-2">Pantau Harga</Link>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-medium">Layanan</h2>
                <Link to="/tanitrack-card" className="text-sm text-muted-foreground py-2">TaniTrack Card</Link>
                <Link to="/jadi-ambasador" className="text-sm text-muted-foreground py-2">Jadi Ambasador</Link>
                <Link to="/cek-komoditas" className="text-sm text-muted-foreground py-2">Cek Komoditas</Link>
              </div>
              <Link to="/tentang-kami" className="text-lg font-medium py-2">Tentang Kami</Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button asChild>
                  <Link to="/login" className="w-full">Masuk</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/daftar" className="w-full">Daftar</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

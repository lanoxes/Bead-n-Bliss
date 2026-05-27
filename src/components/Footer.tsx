import React from 'react';
import { Sparkles, Instagram, MessageCircle, Heart, MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-lavender-900 text-lavender-100 border-t-4 border-magenta-500 pt-16 pb-8 relative overflow-hidden">
      {/* Absolute decorative bubble */}
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-lavender-800 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-12 right-12 w-32 h-32 bg-magenta-500 rounded-full opacity-10 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-lavender-800">
          
          {/* Logo Brand Descriptor */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-full overflow-hidden border-2 border-magenta-400 shadow-sm">
                <img 
                  src="https://www.image2url.com/r2/default/images/1779907095642-1df6302b-e47a-407f-bb58-e530ceee6bc2.jpeg" 
                  alt="Bead n Bliss Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-black text-2xl tracking-wide bg-gradient-to-r from-magenta-400 to-lavender-200 bg-clip-text text-transparent">
                Bead n Bliss
              </span>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-lavender-300 leading-relaxed font-semibold max-w-sm">
              Merek aksesoris manik buatan tangan (handmade)  untuk keseharian Anda. Dirancang secara estetik dengan warna yang cute dan stylish.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/beadandbliss._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-lavender-850 hover:bg-magenta-500 hover:text-white rounded-full transition-all duration-300 border border-lavender-800"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/6285971105122"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-lavender-850 hover:bg-magenta-500 hover:text-white rounded-full transition-all duration-300 border border-lavender-800"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-magenta-400">Navigasi</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#beranda" className="text-lavender-300 hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#produk" className="text-lavender-300 hover:text-white transition-colors">Koleksi Produk</a>
              </li>
              <li>
                <a href="#tentang-kami" className="text-lavender-300 hover:text-white transition-colors">Filosofi Kami</a>
              </li>
              <li>
                <a href="#testimoni" className="text-lavender-300 hover:text-white transition-colors">Testimoni Pelanggan</a>
              </li>
              <li>
                <a href="#cara-pesan" className="text-lavender-300 hover:text-white transition-colors">Cara Pemesanan</a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-magenta-400">Kontak Resmi Kami</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold text-lavender-300">
              <li className="flex items-start gap-2.5">
                <Instagram size={16} className="text-magenta-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] text-lavender-450 uppercase font-mono font-bold">Direct Message</span>
                  <a
                    href="https://www.instagram.com/beadandbliss._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline break-all"
                  >
                    @beadandbliss._
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={16} className="text-magenta-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] text-lavender-450 uppercase font-mono font-bold">Fast Response WA</span>
                  <a
                    href="https://wa.me/6285971105122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline"
                  >
                    0859-7110-5122 (Klik di sini)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-magenta-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] text-lavender-450 uppercase font-mono font-bold">Lokasi</span>
                  <span>Perum, Bekasi, Jawa Barat, Indonesia</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright of footers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-lavender-400 font-bold text-center sm:text-left flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Bead n Bliss. Crafted with</span>
            <Heart size={10} className="text-magenta-500 fill-magenta-500 animate-pulse" />
            <span>for your style journey.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 bg-lavender-850 hover:bg-magenta-500 hover:text-white text-lavender-300 font-sans font-bold text-xs rounded-full border border-lavender-800 transition-all cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Star, Heart, Phone, Instagram } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#produk');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-lavender-50 via-lavender-100/50 to-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative Floating Sparkles */}
      <div className="absolute top-12 left-8 md:left-24 text-magenta-400 opacity-60 animate-float pointer-events-none">
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-16 left-12 text-lavender-400 opacity-80 animate-bounce pointer-events-none" style={{ animationDuration: '6s' }}>
        <Heart size={28} className="fill-lavender-300" />
      </div>
      <div className="absolute top-24 right-16 text-magenta-300 opacity-50 animate-float pointer-events-none" style={{ animationDuration: '5s' }}>
        <Star size={36} className="fill-magenta-200" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-magenta-100 text-magenta-600 font-sans font-bold text-xs tracking-wider mb-6 border border-magenta-200"
            >
              <Star size={12} className="fill-magenta-500 text-magenta-500 animate-spin-slow" />
              <span>Aksesoris Penuh Gaya Dan Aesthetic</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-lavender-900 leading-[1.1] mb-6"
            >
              Selamat Datang di <br className="hidden sm:block" />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 bg-gradient-to-r from-magenta-500 via-lavender-600 to-magenta-600 bg-clip-text text-transparent">
                  Bead n Bliss!
                </span>
                <span className="absolute left-0 right-0 bottom-1.5 h-3 bg-lavender-200 -z-0 rounded-full opacity-70"></span>
              </span>
            </motion.h1>

            {/* Subheadline & Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans font-bold text-xl sm:text-2xl text-lavender-700 mb-4"
            >
              Temukan Keindahan dalam Setiap Manik-Manik. ✨
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-sm sm:text-base text-lavender-600 max-w-xl leading-relaxed mb-8 font-medium"
            >
              Tingkatkan gaya harianmu dengan koleksi cincin, gelang, dan gantungan HP kustom yang pas dikantong pelajar loh! Dibuat dengan sepenuh hati dan secara handmade menggunakan manik manik lucu , dan palet warna keren dan cute untuk tampil lebih stylish .
            </motion.p>

            {/* CTA Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={scrollToProducts}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-lavender-500 via-magenta-500 to-magenta-600 hover:from-lavender-600 hover:to-magenta-700 text-white font-sans font-black text-base rounded-full shadow-lg shadow-lavender-300 hover:shadow-xl hover:shadow-magenta-200 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Lihat Koleksi Imut</span>
                <ArrowRight size={18} />
              </button>

              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href="https://wa.me/6285971105122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-grow sm:flex-grow-0 px-5 py-4 border-2 border-lavender-300 hover:border-magenta-500 bg-white hover:bg-magenta-50/20 text-lavender-700 hover:text-magenta-600 font-sans font-bold text-sm rounded-full transition-all duration-300 active:scale-95"
                >
                  <Phone size={16} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/beadandbliss._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-grow sm:flex-grow-0 px-5 py-4 border-2 border-lavender-300 hover:border-magenta-500 bg-white hover:bg-magenta-50/20 text-lavender-700 hover:text-magenta-600 font-sans font-bold text-sm rounded-full transition-all duration-300 active:scale-95"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            </motion.div>

            {/* Small trust features */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 border-t border-lavender-100 pt-6 w-full max-w-xl"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-lavender-500">
                <span className="w-1.5 h-1.5 rounded-full bg-magenta-500"></span>
                <span>Bisa Custom Hiasan Nama/Alphabet</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-lavender-500">
                <span className="w-1.5 h-1.5 rounded-full bg-magenta-500"></span>
                <span>Sytlish Dan Cute!</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-lavender-500">
                <span className="w-1.5 h-1.5 rounded-full bg-magenta-500"></span>
                <span>Kemasan Yang Propper</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-lavender-300 via-magenta-300 to-lavender-400 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>

              {/* Picture Frame */}
              <div className="relative bg-white p-4 rounded-3xl shadow-xl shadow-lavender-200 border-4 border-lavender-100 overflow-hidden group">
                <img
                  src="https://www.image2url.com/r2/default/images/1779911105619-17a5b67e-7f7a-41dc-bd9d-299592b273a5.jpg"
                  alt="Bead n Bliss Collection"
                  className="rounded-2xl w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating Bubble Badge */}
                <div className="absolute bottom-6 right-6 bg-lavender-50/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-lavender-200 flex items-center gap-2 animate-float">
                  <div className="p-1 bg-magenta-100 rounded-full text-magenta-500">
                    <Heart size={14} className="fill-magenta-500" />
                  </div>
                  <div>
                    <span className="block font-display font-extrabold text-xs text-lavender-900 leading-tight">Mulai dari</span>
                    <span className="font-sans font-black text-xs text-magenta-600">Rp 2.000 saja!</span>
                  </div>
                </div>
                
                {/* Sparkling overlays */}
                <div className="absolute top-6 left-6 p-1.5 bg-magenta-500 text-white rounded-full animate-bounce" style={{ animationDuration: '3.5s' }}>
                  <Star size={14} className="fill-white text-white" />
                </div>
              </div>
              
              {/* Behind-decor outline sticker */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-magenta-100 rounded-full -z-10 opacity-60"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-lavender-200 rounded-full -z-10 opacity-40"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

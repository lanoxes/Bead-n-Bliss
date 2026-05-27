import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Instagram, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Koleksi Produk', href: '#produk' },
    { label: 'Filosofi Kami', href: '#tentang-kami' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Cara Pesan', href: '#cara-pesan' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
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
    <header className="sticky top-0 z-50 bg-lavender-50/90 backdrop-blur-md border-b-2 border-lavender-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 bg-white rounded-full overflow-hidden border-2 border-magenta-500 shadow-md shadow-lavender-300 transition-all duration-300 group-hover:scale-105">
              <img 
                src="https://www.image2url.com/r2/default/images/1779907095642-1df6302b-e47a-407f-bb58-e530ceee6bc2.jpeg" 
                alt="Bead n Bliss Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-wide bg-gradient-to-r from-lavender-600 via-magenta-500 to-lavender-700 bg-clip-text text-transparent">
                Bead n Bliss
              </span>
              <span className="block text-[10px] font-mono tracking-wider text-lavender-605 font-bold uppercase">
                Aesthetic Beads Accessories
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="px-4 py-2 rounded-full font-sans font-semibold text-sm text-lavender-700 hover:text-magenta-600 hover:bg-lavender-100/50 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Social Links */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.instagram.com/beadandbliss._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-magenta-500 rounded-full font-sans font-bold text-xs text-magenta-600 hover:bg-magenta-50 transition-all duration-300 active:scale-95"
            >
              <Instagram size={14} />
              <span>@beadandbliss._</span>
            </a>
            <a
              href="https://wa.me/6285971105122"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lavender-500 to-magenta-500 rounded-full font-sans font-bold text-xs text-white shadow-md shadow-lavender-300 hover:shadow-lg hover:shadow-magenta-200 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            >
              <MessageCircle size={14} />
              <span>0859-7110-5122</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-lavender-700 hover:text-magenta-600 hover:bg-lavender-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-lavender-50/95 backdrop-blur-md border-b-2 border-lavender-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block px-4 py-3 rounded-xl font-sans font-bold text-base text-lavender-800 hover:text-magenta-600 hover:bg-lavender-100/70 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-lavender-200 flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/beadandbliss._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-magenta-500 rounded-xl font-sans font-bold text-sm text-magenta-600 hover:bg-magenta-50 transition-colors"
                >
                  <Instagram size={16} />
                  <span>Instagram @beadandbliss._</span>
                </a>
                <a
                  href="https://wa.me/6285971105122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-lavender-500 to-magenta-500 rounded-xl font-sans font-bold text-sm text-white shadow-md shadow-lavender-200"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp 0859-7110-5122</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

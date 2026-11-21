/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AboutUs from './components/AboutUs';
import AboutCeo from './components/AboutCeo';
import Testimonials from './components/Testimonials';
import ShippingPayment from './components/ShippingPayment';
import Footer from './components/Footer';
import { MessageCircle, Sparkles, ArrowRight, X } from 'lucide-react';

export default function App() {
  const [targetProductId, setTargetProductId] = useState<string | null>(null);
  const [showWhatsNew, setShowWhatsNew] = useState(true);

  const handleTargetHandled = useCallback(() => {
    setTargetProductId(null);
  }, []);

  const handleWhatsNewClick = () => {
    const element = document.querySelector('#product-embroidery-bracelet') || document.querySelector('#produk');
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setTargetProductId('embroidery-bracelet');
  };

  return (
    <div className="min-h-screen bg-lavender-50 text-lavender-900 font-sans selection:bg-magenta-100 selection:text-magenta-700 antialiased scroll-smooth">
      {/* Structural Header Navigation */}
      <Header />

      {/* Main Single Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Products Showcase Section */}
        <ProductCard targetProductId={targetProductId} onTargetHandled={handleTargetHandled} />

        {/* Philosophy - About Us Section */}
        <AboutUs />

        {/* About CEO / Founder Section */}
        <AboutCeo />

        {/* Reviews - Customer Testimonials Section */}
        <Testimonials />

        {/* Shipping Channel & Payment Instruction Section */}
        <ShippingPayment />
      </main>

      {/* Footer Contact Details */}
      <Footer />

      {/* Interactive Floating Quick-Weave WhatsApp Buddy */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-40 group">
        <a
          href="https://wa.me/6285971105122"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3.5 bg-gradient-to-r from-lavender-500 via-magenta-500 to-magenta-600 rounded-full text-white shadow-xl shadow-lavender-400 hover:shadow-magenta-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <MessageCircle size={24} className="animate-pulse" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-sans font-black text-xs whitespace-nowrap">
            Chat Admin Bead n Bliss ✨
          </span>
        </a>
      </div>

      {/* Small Floating "What's New??!!" Popup Card */}
      <AnimatePresence>
        {showWhatsNew && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-4 sm:right-6 z-40 max-w-[250px] sm:max-w-[280px]"
          >
            <div
              onClick={handleWhatsNewClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleWhatsNewClick();
                }
              }}
              className="relative bg-white/95 backdrop-blur-md p-3 rounded-3xl border-2 border-magenta-300 shadow-2xl shadow-lavender-300/60 hover:shadow-magenta-300/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Close button */}
              <button
                type="button"
                aria-label="Tutup notifikasi produk baru"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWhatsNew(false);
                }}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-lavender-200 text-lavender-600 hover:text-magenta-600 hover:bg-magenta-50 shadow-md flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={12} />
              </button>

              {/* Top mini label */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-magenta-500 to-lavender-500 text-white font-display font-black text-[10px] tracking-wide shadow-sm">
                  <Sparkles size={10} />
                  <span>What&apos;s New??!!</span>
                </span>
              </div>

              {/* Product preview content */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-lavender-100 flex-shrink-0 bg-lavender-50">
                  <img
                    src="/assets/aistudio/IMG-20261121-WA0072_d37bf270.jpg"
                    alt="Embroidery Bracelet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-display font-black text-xs sm:text-sm text-lavender-900 truncate group-hover:text-magenta-600 transition-colors">
                    Embroidery Bracelet
                  </h4>
                  <p className="font-sans font-extrabold text-xs text-magenta-600 mt-0.5">
                    Cuma Rp 7.000
                  </p>
                  <span className="inline-flex items-center gap-1 font-sans font-bold text-[10px] text-lavender-600 group-hover:text-magenta-600 mt-1">
                    <span>Klik untuk lihat</span>
                    <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


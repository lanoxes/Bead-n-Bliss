/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ShippingPayment from './components/ShippingPayment';
import Footer from './components/Footer';
import { MessageCircle, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-lavender-50 text-lavender-900 font-sans selection:bg-magenta-100 selection:text-magenta-700 antialiased scroll-smooth">
      {/* Structural Header Navigation */}
      <Header />

      {/* Main Single Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Products Showcase Section */}
        <ProductCard />

        {/* Philosophy - About Us Section */}
        <AboutUs />

        {/* Reviews - Customer Testimonials Section */}
        <Testimonials />

        {/* Shipping Channel & Payment Instruction Section */}
        <ShippingPayment />
      </main>

      {/* Footer Contact Details */}
      <Footer />

      {/* Interactive Floating Quick-Weave WhatsApp Buddy */}
      <div className="fixed bottom-6 left-6 z-40 group">
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
    </div>
  );
}


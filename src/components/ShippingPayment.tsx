import React from 'react';
import { motion } from 'motion/react';
import { Check, Truck, CreditCard, ChevronRight, MessageSquare, Shield, HelpCircle } from 'lucide-react';
import { SHIPPING_PAYMENT } from '../data';

export default function ShippingPayment() {
  return (
    <section id="cara-pesan" className="py-20 bg-gradient-to-b from-lavender-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-800 font-sans font-bold text-xs tracking-wider mb-4 border border-lavender-200">
            <HelpCircle size={12} className="text-lavender-600 animate-bounce" />
            <span>ORDERING & DELIVERY WORKFLOW</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-lavender-900 tracking-tight mb-3">
            Cara Pesan & Serah Terima Offline
          </h2>
          <p className="font-sans text-xs sm:text-sm text-lavender-500 font-bold">
            Simak alur pemesanan custom yang sangat praktis dengan serah-terima langsung (COD) atau ambil di tempat secara aman, mudah, dan transparan.
          </p>
        </div>

        {/* 2-Columns layout: Order Steps & Shipping/Payment Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column Left: Order Steps Flow (8 grid) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-2 border-lavender-100 shadow-sm">
            <h3 className="font-display font-black text-xl text-lavender-900 mb-6 flex items-center gap-2">
              <span className="p-1.5 bg-magenta-500 text-white rounded-lg"><ChevronRight size={16} /></span>
              <span>Langkah Praktis Pemesanan</span>
            </h3>

            <div className="relative border-l-2 border-lavender-200 ml-4 pl-6 space-y-6">
              {SHIPPING_PAYMENT.payment.steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Bullet badge number */}
                  <span className="absolute -left-[38px] top-0 w-7 h-7 flex items-center justify-center bg-gradient-to-tr from-lavender-500 to-magenta-500 text-white font-sans font-black text-xs rounded-full shadow-md">
                    {index + 1}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-lavender-700 leading-relaxed font-bold">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column Right: Channels & Info (5 grid) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Shipping Card */}
            <div className="bg-white p-6 rounded-3xl border-2 border-lavender-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-lavender-100/50 rounded-bl-full -z-0 group-hover:scale-105 transition-transform"></div>
              <div className="relative z-10">
                <h4 className="font-display font-extrabold text-base sm:text-lg text-lavender-900 mb-4 flex items-center gap-2.5">
                  <Truck className="text-magenta-500" size={20} />
                  <span>Metode Pengiriman</span>
                </h4>
                
                {/* Exp list */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {SHIPPING_PAYMENT.shipping.methods.map((method, idx) => (
                    <span key={idx} className="px-3 py-1 bg-lavender-50 border border-lavender-150 text-[11px] font-bold text-lavender-700 rounded-lg">
                      🚚 {method}
                    </span>
                  ))}
                </div>

                <div className="space-y-2.5 border-t border-lavender-100/80 pt-4">
                  <p className="font-sans text-xs text-lavender-600 font-bold leading-normal">
                    <strong className="text-lavender-800 block mb-0.5">Ongkos Kirim:</strong>
                    {SHIPPING_PAYMENT.shipping.cost}
                  </p>
                  <p className="font-sans text-xs text-lavender-600 font-bold leading-normal">
                    <strong className="text-lavender-800 block mb-0.5">Estimasi Produksi:</strong>
                    {SHIPPING_PAYMENT.shipping.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="bg-white p-6 rounded-3xl border-2 border-lavender-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-magenta-50 rounded-bl-full -z-0 group-hover:scale-105 transition-transform"></div>
              <div className="relative z-10">
                <h4 className="font-display font-extrabold text-base sm:text-lg text-lavender-900 mb-4 flex items-center gap-2.5">
                  <CreditCard className="text-magenta-500" size={20} />
                  <span>Pilihan Pembayaran</span>
                </h4>

                <div className="flex flex-wrap gap-2 mb-4">
                  {SHIPPING_PAYMENT.payment.methods.map((method, idx) => (
                    <span key={idx} className="px-3 py-1 bg-magenta-50/50 border border-magenta-100 text-[11px] font-bold text-magenta-700 rounded-lg">
                      💳 {method}
                    </span>
                  ))}
                </div>

                <div className="bg-lavender-50/80 p-3.5 rounded-2xl border border-lavender-100 flex items-start gap-2.5 mt-2">
                  <Shield size={16} className="text-magenta-500 flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-[11px] text-lavender-600 font-bold leading-relaxed">
                    Seluruh transaksi dijamin transparan dan 100% aman tanpa risiko penipuan online karena Anda melakukan pembayaran tunai (Cash) secara langsung setelah memeriksa fisik produk yang dipesan saat COD / Serah terima.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Instant Order Button */}
            <a
              href="https://wa.me/6285971105122"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-gradient-to-r from-lavender-500 via-magenta-500 to-magenta-600 hover:from-lavender-600 hover:to-magenta-700 text-white font-sans font-black text-sm rounded-full shadow-lg shadow-lavender-200 transition-all hover:-translate-y-0.5"
            >
              💬 Tanya Kustom via WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

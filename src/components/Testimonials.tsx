import React from 'react';
import { motion } from 'motion/react';
import { Heart, Star, Sparkles, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-magenta-50 text-magenta-700 font-sans font-bold text-xs tracking-wider mb-4 border border-magenta-100">
            <MessageSquare size={12} className="text-magenta-500" />
            <span>BLISSMATES LOVE STORIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-lavender-900 tracking-tight mb-3">
            Ulasan Positif dari 
            <span className="block sm:inline bg-gradient-to-r from-magenta-500 through-lavender-600 to-magenta-600 bg-clip-text text-transparent ml-1">
              Pelanggan Kami
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-lavender-500 font-bold">
            Apa kata mereka tentang keunikan aksesoris manik buatan tangan Bead n Bliss? Simak ulasan tulus dari para Blissmates kesayangan kami.
          </p>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-6 sm:p-8 bg-lavender-50/40 hover:bg-lavender-50 rounded-3xl border-2 border-lavender-100/80 hover:border-magenta-300 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-magenta-200/50 group-hover:text-magenta-300/40 transition-colors">
                <Sparkles size={28} className="fill-magenta-100" />
              </div>

              {/* Review Text */}
              <div className="mb-6">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-sans text-sm text-lavender-800 leading-relaxed font-semibold italic">
                  "{testi.review}"
                </p>
              </div>

              {/* User Bio and Product Info */}
              <div className="border-t border-lavender-100/90 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {/* Mini User Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-lavender-300 to-magenta-300 flex items-center justify-center font-display font-bold text-sm text-white border-2 border-white shadow-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-lavender-900 leading-none mb-1">
                      {testi.name}
                    </h4>
                    <span className="font-sans font-bold text-[11px] text-magenta-500">
                      {testi.handle}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                {testi.productName && (
                  <span className="px-2.5 py-1 rounded-lg bg-magenta-50 border border-magenta-100 text-[10px] font-bold text-magenta-600">
                    🛍️ {testi.productName}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Invitation */}
        <div className="mt-12 text-center p-6 bg-lavender-50/50 rounded-2xl border border-lavender-100 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="font-sans text-xs font-bold text-lavender-600">
            Sudah pernah membeli aksesoris kami? Bagikan fotomu di Instagram Story dan tag kami!
          </p>
          <a
            href="https://www.instagram.com/beadandbliss._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-xs font-sans font-black px-4 py-2 bg-white text-magenta-600 rounded-full border border-magenta-200 hover:bg-magenta-100/30 transition-all active:scale-95"
          >
            Tag @beadandbliss._
          </a>
        </div>

      </div>
    </section>
  );
}

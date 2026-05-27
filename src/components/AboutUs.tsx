import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Palette, ShieldCheck, Gift } from 'lucide-react';
import { PHILOSOPHY } from '../data';

export default function AboutUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Heart: <Heart className="text-magenta-500 fill-magenta-100" size={24} />,
    Sparkles: <Sparkles className="text-magenta-500" size={24} />,
    Palette: <Palette className="text-magenta-500" size={24} />,
  };

  return (
    <section id="tentang-kami" className="py-20 bg-gradient-to-b from-white to-lavender-50 relative overflow-hidden">
      {/* Decorative absolute sparkles */}
      <div className="absolute top-1/4 left-10 text-magenta-300 opacity-30 animate-spin-slow">
        <Sparkles size={48} />
      </div>
      <div className="absolute bottom-1/4 right-10 text-lavender-300 opacity-40">
        <Heart size={36} className="fill-lavender-100" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative Pitch */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-magenta-100 text-magenta-700 font-sans font-bold text-xs tracking-wider mb-5 border border-magenta-200">
              <Gift size={12} className="text-magenta-600 animate-bounce" />
              <span>DIBERIKAN DENGAN KASIH SAYANG</span>
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-lavender-900 tracking-tight mb-6">
              {PHILOSOPHY.title}
              <span className="block text-xl sm:text-2xl font-sans font-bold text-magenta-500 mt-2">
                {PHILOSOPHY.subtitle}
              </span>
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-lavender-700 leading-relaxed font-semibold mb-4 text-justify">
              {PHILOSOPHY.description1}
            </p>
            
            <p className="font-sans text-sm sm:text-base text-lavender-600 leading-relaxed font-bold mb-8 text-justify">
              {PHILOSOPHY.description2}
            </p>

            <div className="bg-white p-5 rounded-3xl border-2 border-lavender-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3.5 bg-lavender-100 rounded-2xl text-lavender-600 flex-shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm text-lavender-900 mb-0.5">Jaminan Kepuasan 100%</h4>
                <p className="font-sans text-xs text-lavender-500 font-bold">Setiap pesanan yang cacat / putus di jalan akan kami bantu ganti baru secara cuma-cuma!</p>
              </div>
            </div>
          </div>

          {/* Right Block: Three Core Interactive Values */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-black text-lg text-lavender-800 tracking-wide mb-2 uppercase">Mengapa Memilih Kami?</h3>
            
            {PHILOSOPHY.values.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01, x: 4 }}
                className="bg-white p-6 rounded-3xl border-2 border-lavender-150 hover:border-magenta-300 shadow-sm transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-magenta-50 rounded-2xl flex-shrink-0 flex items-center justify-center border border-magenta-100">
                  {iconMap[item.icon] || <Sparkles />}
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-base sm:text-lg text-lavender-900 mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-lavender-600 font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

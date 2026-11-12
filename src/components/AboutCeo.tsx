import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Crown, 
  Instagram, 
  MessageCircle, 
  Palette, 
  MapPin, 
  Scissors,
  Smile,
  Edit3
} from 'lucide-react';

const DEFAULT_CEO_IMAGE = '/assets/aistudio/image_4e163863.png';

type BorderTheme = 'beaded' | 'rainbow' | 'royal' | 'mermaid';

export default function AboutCeo() {
  const [ceoImage, setCeoImage] = useState<string>(DEFAULT_CEO_IMAGE);

  const [ceoName, setCeoName] = useState<string>(() => {
    return localStorage.getItem('bnb_ceo_name') || 'Chaerunisa Ramadanti';
  });

  const [ceoRole, setCeoRole] = useState<string>(() => {
    return localStorage.getItem('bnb_ceo_role') || 'Founder & Creative CEO';
  });

  const [borderTheme, setBorderTheme] = useState<BorderTheme>('beaded');
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [nameEdit, setNameEdit] = useState(ceoName);
  const [roleEdit, setRoleEdit] = useState(ceoRole);

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setCeoName(nameEdit);
    setCeoRole(roleEdit);
    localStorage.setItem('bnb_ceo_name', nameEdit);
    localStorage.setItem('bnb_ceo_role', roleEdit);
    setIsEditingInfo(false);
  };

  // Render bead beads along border
  const beadColors = [
    '#F472B6', '#C084FC', '#38BDF8', '#FBBF24', 
    '#F43F5E', '#A855F7', '#60A5FA', '#34D399',
    '#FB7185', '#E879F9', '#818CF8', '#FDE047'
  ];

  return (
    <section id="about-ceo" className="py-24 bg-gradient-to-b from-lavender-50 via-white to-lavender-50 relative overflow-hidden">
      {/* Background aesthetic blobs & floating elements */}
      <div className="absolute top-12 left-8 w-72 h-72 bg-magenta-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-12 right-8 w-80 h-80 bg-lavender-200/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-magenta-100/90 text-magenta-700 font-sans font-bold text-xs tracking-wider mb-4 border border-magenta-200 shadow-sm">
            <Crown size={14} className="text-magenta-600 animate-bounce" />
            <span className="uppercase">Meet The Founder & CEO</span>
            <Sparkles size={14} className="text-magenta-600" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-lavender-900 tracking-tight mb-4">
            About Me <span className="text-magenta-500">·</span> CEO Bead n Bliss
          </h2>
          <p className="font-sans text-sm sm:text-base text-lavender-700 font-semibold leading-relaxed">
            Mengenal sosok kreatif di balik setiap butir manik penuh warna, cinta, dan inspirasi estetik untuk Anda.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Eye-Catching Photo Frame & Customization (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Eye-Catching Border Frame */}
            <div className="relative group">
              
              {/* Outer Decorative Glow Rings based on selected theme */}
              {borderTheme === 'beaded' && (
                <>
                  {/* Rotating Beaded Halo Ring */}
                  <div className="absolute -inset-4 sm:-inset-6 rounded-full border-4 border-dashed border-magenta-300/80 animate-spin-slow pointer-events-none" />
                  
                  {/* Realistic decorative beads orbiting the frame */}
                  <div className="absolute -inset-4 sm:-inset-5 pointer-events-none">
                    {beadColors.map((color, i) => {
                      const angle = (i * 360) / beadColors.length;
                      return (
                        <div
                          key={i}
                          className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125"
                          style={{
                            backgroundColor: color,
                            top: `${50 - 50 * Math.cos((angle * Math.PI) / 180)}%`,
                            left: `${50 + 50 * Math.sin((angle * Math.PI) / 180)}%`,
                            boxShadow: `0 2px 6px ${color}88, inset -1px -1px 2px rgba(0,0,0,0.2), inset 1px 1px 2px rgba(255,255,255,0.8)`
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Gradient Backing */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-magenta-500 via-pink-400 to-lavender-500 blur-[2px]" />
                </>
              )}

              {borderTheme === 'rainbow' && (
                <>
                  <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 via-sky-400 to-amber-300 animate-spin-slow blur-sm opacity-90" />
                  <div className="absolute -inset-1 rounded-full bg-white" />
                </>
              )}

              {borderTheme === 'royal' && (
                <>
                  <div className="absolute -inset-4 sm:-inset-5 rounded-full border-4 border-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.5)]" />
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-400 via-fuchsia-500 to-purple-600 p-1" />
                </>
              )}

              {borderTheme === 'mermaid' && (
                <>
                  <div className="absolute -inset-4 sm:-inset-5 rounded-full bg-gradient-to-tr from-sky-400 via-teal-300 to-purple-400 animate-pulse blur-sm opacity-80" />
                  <div className="absolute -inset-2 rounded-full border-4 border-sky-300" />
                </>
              )}

              {/* Photo Frame Container */}
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-full p-2 bg-white shadow-2xl overflow-hidden border-4 border-white">
                <img
                  src={ceoImage}
                  alt={ceoName}
                  className="w-full h-full object-cover object-[center_20%] rounded-full select-none"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    // Fallback if image fails to load
                    setCeoImage(DEFAULT_CEO_IMAGE);
                  }}
                />

                {/* Shimmer Overlay on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-magenta-500/10 via-transparent to-white/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Top-Right Floating CEO Badge */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="absolute -top-3 -right-2 sm:top-1 sm:right-0 bg-white text-lavender-900 border-2 border-magenta-300 rounded-full px-3.5 py-1.5 shadow-lg flex items-center gap-1.5 z-20"
              >
                <Crown size={15} className="text-amber-500 fill-amber-400" />
                <span className="font-display font-extrabold text-xs tracking-tight text-magenta-700">
                  CEO & Founder
                </span>
              </motion.div>

              {/* Bottom-Left Floating Sparkle Badge */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="absolute -bottom-3 -left-2 sm:bottom-2 sm:left-0 bg-gradient-to-r from-magenta-500 to-lavender-600 text-white rounded-full px-3.5 py-1.5 shadow-lg flex items-center gap-1.5 z-20"
              >
                <Sparkles size={14} className="text-yellow-300" />
                <span className="font-sans font-black text-xs tracking-tight">
                  Beads Artisan ✨
                </span>
              </motion.div>
            </div>

            {/* Border Style Selector */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-lavender-200 shadow-sm flex items-center gap-2">
              <span className="text-[11px] font-sans font-bold text-lavender-600 px-1">
                Pilih Border:
              </span>
              <div className="flex items-center gap-1.5">
                {(
                  [
                    { id: 'beaded', label: 'Beaded Halo', icon: '📿' },
                    { id: 'rainbow', label: 'Rainbow Glow', icon: '🌈' },
                    { id: 'royal', label: 'Royal Gold', icon: '👑' },
                    { id: 'mermaid', label: 'Ocean Lilac', icon: '🧜‍♀️' },
                  ] as const
                ).map((theme) => (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => setBorderTheme(theme.id)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer ${
                      borderTheme === theme.id
                        ? 'bg-magenta-500 text-white shadow-sm'
                        : 'bg-lavender-50 hover:bg-lavender-100 text-lavender-700'
                    }`}
                  >
                    <span>{theme.icon}</span> <span className="hidden sm:inline">{theme.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: CEO Profile Story & Narrative (7 cols) */}
          <div className="lg:col-span-7">
            
            {/* Name & Role Header with Inline Edit option */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-lavender-150 shadow-sm relative">
              
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-magenta-600 bg-magenta-50 px-2.5 py-0.5 rounded-md border border-magenta-100">
                      The Maker & Visionary
                    </span>
                    <span className="text-xs text-lavender-400">·</span>
                    <span className="text-xs font-sans font-semibold text-lavender-500 flex items-center gap-1">
                      <MapPin size={12} className="text-magenta-500" />
                      Perum, Bekasi
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-lavender-900 tracking-tight">
                    {ceoName}
                  </h3>
                  <p className="font-sans font-bold text-sm sm:text-base text-magenta-500 mt-0.5">
                    {ceoRole} Bead n Bliss
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEditingInfo(!isEditingInfo)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lavender-50 hover:bg-lavender-100 text-lavender-700 border border-lavender-200 text-xs font-bold font-sans transition-colors cursor-pointer"
                >
                  <Edit3 size={13} />
                  <span>{isEditingInfo ? 'Tutup Edit' : 'Edit Nama'}</span>
                </button>
              </div>

              {/* Inline Edit Form */}
              {isEditingInfo && (
                <form onSubmit={handleSaveInfo} className="mb-6 p-4 bg-lavender-50/70 rounded-2xl border border-lavender-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs font-bold text-lavender-800 mb-1">Nama CEO / Panggilan</label>
                      <input
                        type="text"
                        value={nameEdit}
                        onChange={(e) => setNameEdit(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl border border-lavender-200 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-magenta-400"
                        placeholder="Contoh: Annisa (Nis)"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-lavender-800 mb-1">Jabatan / Role</label>
                      <input
                        type="text"
                        value={roleEdit}
                        onChange={(e) => setRoleEdit(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl border border-lavender-200 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-magenta-400"
                        placeholder="Contoh: Founder & Creative CEO"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsEditingInfo(false)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold font-sans text-lavender-600 hover:bg-lavender-100"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-lg text-xs font-bold font-sans bg-magenta-500 hover:bg-magenta-600 text-white shadow-sm"
                    >
                      Simpan Perubahan
                    </button>
                  </div>
                </form>
              )}

              {/* Personal CEO Quote */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-lavender-100/70 via-magenta-50 to-pink-50 border-l-4 border-magenta-500 mb-6">
                <p className="font-sans text-sm sm:text-base text-lavender-900 font-semibold italic leading-relaxed">
                  &ldquo;Aksesoris yang cantik tidak harus mahal. Di Bead n Bliss, setiap rangkaian cincin, gelang, dan strap HP saya buat dengan penuh cinta dan ketelitian agar kalian bisa tampil percaya diri, lucu, dan stylish setiap hari!&rdquo;
                </p>
              </div>

              {/* CEO Narrative Story */}
              <div className="space-y-4 font-sans text-xs sm:text-sm text-lavender-700 leading-relaxed font-medium">
                <p>
                  Halo semuanya, selamat datang di <strong>Bead n Bliss</strong>! Brand aksesoris manik ini lahir dari kecintaan saya terhadap seni merangkai manik-manik buatan tangan (handmade). Berawal dari hobi membuat cincin dan gelang cantik untuk teman-teman terdekat, kini Bead n Bliss hadir untuk menjangkau siapa saja yang menginginkan aksesoris manis berkualitas dengan harga yang sangat ramah di kantong pelajar.
                </p>
                <p>
                  Mulai dari <strong>Rp 2.000-an saja</strong>, setiap helai manik kristal, mutiara lavender, akrilik pita, hingga gantungan mermaid dirakit secara teliti satu per satu. Anda juga bebas berkonsultasi langsung dengan saya untuk memilih warna, ukuran, atau request custom yang sesuai dengan selera Anda!
                </p>
              </div>

              {/* Highlights & Strengths Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-lavender-100">
                <div className="p-3 bg-lavender-50/60 rounded-2xl text-center">
                  <Scissors size={20} className="mx-auto text-magenta-500 mb-1" />
                  <span className="block font-display font-black text-sm text-lavender-900">100% Handmade</span>
                  <span className="text-[10px] text-lavender-500 font-bold">Rangkaian Tangan Teliti</span>
                </div>

                <div className="p-3 bg-lavender-50/60 rounded-2xl text-center">
                  <Palette size={20} className="mx-auto text-magenta-500 mb-1" />
                  <span className="block font-display font-black text-sm text-lavender-900">Custom Desain</span>
                  <span className="text-[10px] text-lavender-500 font-bold">Warna & Ukuran Bebas</span>
                </div>

                <div className="p-3 bg-lavender-50/60 rounded-2xl text-center col-span-2 sm:col-span-1">
                  <Smile size={20} className="mx-auto text-magenta-500 mb-1" />
                  <span className="block font-display font-black text-sm text-lavender-900">Mulai Rp 2rb</span>
                  <span className="text-[10px] text-lavender-500 font-bold">Ramah Kantong Pelajar</span>
                </div>
              </div>

              {/* Direct Communication Buttons */}
              <div className="mt-8 pt-6 border-t border-lavender-150 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/6285971105122?text=Halo%20CEO%20Bead%20n%20Bliss,%20saya%20mau%20tanya-tanya%20dan%20order%20aksesoris%20manik%20cantik%20dong!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-magenta-500 to-lavender-600 hover:from-magenta-600 hover:to-lavender-700 text-white font-sans font-bold text-xs sm:text-sm shadow-md shadow-magenta-200 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Ngobrol Langsung via WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/beadandbliss._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-magenta-50 text-magenta-600 border-2 border-magenta-300 font-sans font-bold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 transition-all"
                >
                  <Instagram size={16} />
                  <span>Follow Instagram @beadandbliss._</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

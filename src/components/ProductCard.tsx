import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Check, ShoppingBag, Eye, X, MessageCircle, Instagram } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductCardProps {
  targetProductId?: string | null;
  onTargetHandled?: () => void;
}

export default function ProductCard({ targetProductId, onTargetHandled }: ProductCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveImage(product.image);
  };

  useEffect(() => {
    if (targetProductId) {
      const target = PRODUCTS.find((p) => p.id === targetProductId);
      if (target) {
        openProduct(target);
      }
      onTargetHandled?.();
    }
  }, [targetProductId, onTargetHandled]);

  const toggleFavorite = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-800 font-sans font-bold text-xs tracking-wider mb-4 border border-lavender-200">
            <Sparkles size={12} className="text-lavender-600" />
            <span>Temukan Akesoris Yang Kamu Suka</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-lavender-900 tracking-tight mb-4">
            Koleksi Manik-Manik Ter-
            <span className="bg-gradient-to-r from-magenta-500 to-lavender-600 bg-clip-text text-transparent">
              Cute & Aesthetic
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-lavender-600 font-medium">
            Setiap untaian manik dirajut khusus dengan perpaduan warna yang colorfull dan vibrant, menghasilkan harmoni visual yang cute dan stylish. Pilih favoritmu hari ini!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => {
            const isFav = favorites.includes(product.id);
            
            // Extract core theme styling for each product card from the design HTML
            let cardStyleClass = "bg-lavender-50/50 hover:bg-lavender-50 rounded-[36px] border-4 border-white shadow-xl";
            if (product.id === 'cincin-manik') {
              cardStyleClass = "bg-[#F5D0FE] text-lavender-900 rounded-[36px] border-4 border-white shadow-xl hover:bg-[#f2c7fc] transition-colors";
            } else if (product.id === 'gelang-manik') {
              cardStyleClass = "bg-[#E0F2FE] text-lavender-900 rounded-[36px] border-4 border-white shadow-xl hover:bg-[#cee9fc] transition-colors";
            } else if (product.id === 'strap-hp-manik') {
              cardStyleClass = "bg-gradient-to-r from-[#E9D5FF] to-[#F5D0FE] text-lavender-900 rounded-[36px] border-4 border-white shadow-xl hover:brightness-95 transition-all";
            } else if (product.id === 'embroidery-bracelet') {
              cardStyleClass = "bg-[#FCE7F3] text-lavender-900 rounded-[36px] border-4 border-white shadow-xl hover:bg-[#fbcfe8] transition-colors";
            }

            return (
              <motion.div
                key={product.id}
                id={`product-${product.id}`}
                whileHover={{ y: -6 }}
                className={`group relative p-5 flex flex-col justify-between transition-all duration-300 ${cardStyleClass}`}
              >
                {/* Sale / Style Badge */}
                <span className="absolute top-7 left-7 z-10 px-3 py-1 rounded-full bg-magenta-500/95 text-white font-sans font-bold text-[11px] shadow-md tracking-wide max-w-[65%] truncate">
                  {product.style}
                </span>

                {/* Love Button */}
                <button
                  onClick={(e) => toggleFavorite(product.id, e)}
                  aria-label="Add to wishlist"
                  className="absolute top-7 right-7 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm text-lavender-400 hover:text-magenta-500 shadow-md border border-lavender-100 transition-all duration-200"
                >
                  <Heart size={16} className={`${isFav ? 'fill-magenta-500 text-magenta-500' : ''}`} />
                </button>

                {/* Main Product Image Container */}
                <div 
                  onClick={() => openProduct(product)}
                  className="cursor-pointer overflow-hidden rounded-2xl bg-white border-2 border-lavender-100 aspect-[4/3] flex items-center justify-center relative group-hover:shadow-md transition-all duration-500"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Image Overlays on Hover */}
                  <div className="absolute inset-0 bg-lavender-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full font-sans font-bold text-xs text-lavender-900 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye size={14} />
                      Detail Spek
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-5">
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white border border-lavender-200 text-[10px] font-bold text-lavender-600 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Price */}
                  <h3 
                    onClick={() => openProduct(product)}
                    className="font-display font-extrabold text-lg sm:text-xl text-lavender-900 group-hover:text-magenta-600 cursor-pointer transition-colors leading-snug mb-1"
                  >
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-3 mb-4">
                    <span className="font-sans font-black text-base text-magenta-600 bg-magenta-50 px-3 py-1 rounded-lg border border-magenta-100">
                      {product.price}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-lavender-500">
                      ✨ Custom PO 1-3 hari
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="font-sans text-xs sm:text-sm text-lavender-600 leading-relaxed font-medium mb-5 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="border-t border-lavender-100/80 pt-4 flex items-center gap-2">
                    {/* View Specs */}
                    <button
                      onClick={() => openProduct(product)}
                      className="flex items-center justify-center gap-1 px-3.5 py-2.5 border-2 border-lavender-200 hover:border-magenta-500/70 text-lavender-600 hover:text-magenta-600 rounded-full font-sans font-bold text-xs transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Eye size={14} />
                      <span>Spek</span>
                    </button>
                    {/* Order Now (CTA linking to both IG & WA) */}
                    <button
                      onClick={() => openProduct(product)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-gradient-to-r from-lavender-500 to-magenta-500 hover:from-lavender-600 hover:to-magenta-600 text-white rounded-full font-sans font-black text-xs shadow-md shadow-lavender-200 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                    >
                      <ShoppingBag size={14} />
                      <span>Pesan</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Modal Cover */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => { setSelectedProduct(null); setActiveImage(null); }}
                className="fixed inset-0 bg-lavender-900/60 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border-4 border-lavender-100 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => { setSelectedProduct(null); setActiveImage(null); }}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-lavender-50 text-lavender-600 hover:text-magenta-500 hover:bg-magenta-100 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left Side: Product Image Display */}
                  <div className="md:col-span-12 bg-lavender-50/40 p-6 flex flex-col justify-center items-center border-b border-lavender-100">
                    <div className="bg-white p-3 rounded-2xl shadow-md border-2 border-lavender-100 w-full max-w-md aspect-[4/3] flex items-center justify-center">
                      <img
                        src={activeImage || selectedProduct.image}
                        alt={selectedProduct.name}
                        className="rounded-xl w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Multiple-image thumbnails */}
                    {selectedProduct.images && selectedProduct.images.length > 1 && (
                      <div className="flex gap-2.5 mt-4 justify-center">
                        {selectedProduct.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`w-14 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                              (activeImage || selectedProduct.image) === img 
                                ? 'border-magenta-500 scale-105 shadow-sm' 
                                : 'border-lavender-200 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img 
                              src={img} 
                              alt={`Aesthetic view ${idx + 1}`} 
                              className="w-full h-full object-cover" 
                              referrerPolicy="no-referrer" 
                            />
                          </button>
                        ))}
                      </div>
                    )}
                    {/* Badge */}
                    <div className="mt-4 px-4 py-1.5 bg-magenta-50 border border-magenta-100 rounded-lg text-center">
                      <span className="block text-[10px] font-mono font-bold text-magenta-500 uppercase tracking-widest">Gaya Aksesoris</span>
                      <span className="font-display font-extrabold text-xs text-lavender-900">{selectedProduct.style}</span>
                    </div>
                  </div>

                  {/* Right Side: Product Description & Detail */}
                  <div className="md:col-span-12 p-6 sm:p-8">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {selectedProduct.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-lavender-100 border border-lavender-200 text-[9px] font-extrabold text-lavender-700 tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-display font-black text-xl sm:text-2xl text-lavender-900 mb-1 leading-snug">
                      {selectedProduct.name}
                    </h3>
                    
                    <div className="inline-block px-3 py-1 bg-magenta-500 text-white rounded-lg font-sans font-black text-sm mb-4">
                      {selectedProduct.price}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-lavender-600 mb-5 leading-relaxed font-semibold">
                      {selectedProduct.longDescription}
                    </p>

                    {/* Materials List */}
                    <div className="mb-6 bg-lavender-50 p-4 rounded-2xl border border-lavender-100/80">
                      <h4 className="font-display font-black text-xs text-lavender-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Sparkles size={12} className="text-magenta-500" />
                        <span>Bahan & Keunikan:</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {selectedProduct.materials.map((mat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-medium text-lavender-700">
                            <Check size={12} className="text-magenta-500 mt-0.5 flex-shrink-0" />
                            <span>{mat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Order Button Links */}
                    <div>
                      <span className="block font-sans font-bold text-[11px] text-lavender-500 mb-2 uppercase tracking-wide">PILIHAN PEMESANAN ADMIN:</span>
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href="https://wa.me/6285971105122"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-sans font-black text-xs py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                        >
                          <MessageCircle size={14} />
                          <span>Pesan via WA</span>
                        </a>
                        <a
                          href="https://www.instagram.com/beadandbliss._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-gradient-to-tr from-pink-500 to-magenta-600 hover:from-pink-600 hover:to-magenta-700 text-white font-sans font-black text-xs py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                        >
                          <Instagram size={14} />
                          <span>Pesan via IG Direct</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

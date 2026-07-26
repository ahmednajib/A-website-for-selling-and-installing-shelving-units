import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "966570575469";
  const whatsappMessage = encodeURIComponent("السلام عليكم، أود طلب تسعيرة لتوريد وتفصيل رفوف صينية جديدة بجدة ومكة.");

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 px-3 sm:px-6 lg:px-8">
      {/* 2026 Premium Floating Glass Bar */}
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl sm:rounded-3xl border border-zinc-800/90 px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/80 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo (Right side in RTL) */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-amber-500/40 shadow-lg shadow-amber-500/20 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300">
              <picture>
                <source srcSet="/images/logo-icon.webp" type="image/webp" />
                <img 
                  src="/images/logo-icon.jpg" 
                  alt="الرفوف المتميزة" 
                  width="40" 
                  height="40" 
                  loading="eager"
                  fetchpriority="high"
                  decoding="async" 
                  className="w-full h-full object-cover" 
                />
              </picture>
            </div>
            <div>
              <div className="text-base font-extrabold text-zinc-100 flex items-center gap-2 tracking-tight">
                <span>الرفوف المتميزة</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  جدة ومكة
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium">توريد وتفصيل كافة أنواع الرفوف</p>
            </div>
          </a>

          {/* Centered Pill Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 bg-zinc-900/90 border border-zinc-800/80 rounded-full px-4 py-1 shadow-inner">
            <a href="#hero" className="px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all">الرئيسية</a>
            <a href="#catalog" className="px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all">الكتالوج</a>
            <a href="#spec-builder" className="px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all">طلب تفصيل</a>
            <a href="#coverage" className="px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all">مناطق الخدمة</a>
            <a href="#faq" className="px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all">الأسئلة الشائعة</a>
          </nav>

          {/* Left Action CTA Buttons (Fast WhatsApp Quote) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={`tel:0570575469`}
              className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-amber-400 text-xs font-bold flex items-center gap-1.5 transition-all hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0570575469</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-emerald-950/50 btn-glow-emerald transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>طلب تسعيرة</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/80 transition-colors"
            aria-label="فتح القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-zinc-800/80 space-y-3">
            <nav className="flex flex-col space-y-1.5 font-bold text-zinc-200 text-xs text-right">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-400 transition-colors">الرئيسية</a>
              <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-400 transition-colors">كتالوج المنتجات</a>
              <a href="#spec-builder" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-400 transition-colors">طلب تفصيل وتسعيرة</a>
              <a href="#coverage" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-400 transition-colors">مناطق التغطية</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-amber-500/10 hover:text-amber-400 transition-colors">الأسئلة الشائعة</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

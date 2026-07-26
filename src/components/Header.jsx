import React, { useState } from 'react';
import { Menu, X, Layers } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 px-4 sm:px-6 lg:px-8">
      {/* 2026 Floating Glass Container */}
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl border border-zinc-800/80 px-6 py-3 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-zinc-950 font-black shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform duration-300">
              <Layers className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-base font-extrabold text-zinc-100 flex items-center gap-2">
                <span>الرفوف المتميزة</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-zinc-800/80 text-amber-400 border border-zinc-700/60">جدة ومكة</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-normal">توريد وتفصيل كافة أنواع الرفوف</p>
            </div>
          </a>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-8 text-xs font-bold text-zinc-300 flex-1 mx-4">
            <a href="#hero" className="hover:text-amber-400 transition-colors py-1">الرئيسية</a>
            <a href="#catalog" className="hover:text-amber-400 transition-colors py-1">الكتالوج</a>
            <a href="#spec-builder" className="hover:text-amber-400 transition-colors py-1">طلب تفصيل</a>
            <a href="#coverage" className="hover:text-amber-400 transition-colors py-1">مناطق الخدمة</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors py-1">الأسئلة الشائعة</a>
          </nav>

          {/* Empty Spacer to balance flex layout visually */}
          <div className="hidden md:block w-36 shrink-0"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="فتح القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-zinc-800/80 space-y-3">
            <nav className="flex flex-col space-y-2 font-medium text-zinc-200 text-xs">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-zinc-800/60 text-right">الرئيسية</a>
              <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-zinc-800/60 text-right">كتالوج المنتجات</a>
              <a href="#spec-builder" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-zinc-800/60 text-right">طلب تفصيل وتسعيرة</a>
              <a href="#coverage" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-zinc-800/60 text-right">مناطق التغطية</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl hover:bg-zinc-800/60 text-right">الأسئلة الشائعة</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  const phoneNumber = "0570575469";
  const whatsappNumber = "966570575469";
  const whatsappMessage = encodeURIComponent("السلام عليكم، أود طلب تسعيرة واستفسار عن تفصيل وتركيب الرفوف بجدة / مكة.");

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:right-6 sm:left-auto z-50 flex items-center gap-2.5 pointer-events-none">
      
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="pointer-events-auto flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>اتصال: {phoneNumber}</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-95"
        title="تواصل عبر الواتساب"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">واتساب مباشر</span>
      </a>

    </div>
  );
}

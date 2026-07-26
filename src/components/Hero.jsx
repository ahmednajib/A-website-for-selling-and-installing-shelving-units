import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Truck, Wrench, Package, ArrowLeft, CheckCircle } from 'lucide-react';

export default function Hero() {
  const phoneNumber = "0570575469";
  const whatsappNumber = "966570575469";
  const whatsappMessage = encodeURIComponent("السلام عليكم، أود طلب تسعيرة لتوريد وتفصيل رفوف صينية جديدة بجدة ومكة.");

  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden ambient-light-top">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* 2026 Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>فنيو التركيب والتوريد متواجدون اليوم في جدة ومكة المكرمة • المقر: الخمرة</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              حلول التخزين المتكاملة <br />
              <span className="shimmer-text">توريد وتفصيل الرفوف</span> <br />
              <span className="text-zinc-300 text-2xl sm:text-3xl font-bold">بأسعار مغرية وتنافسية</span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
              نوفر رفوفاً صينية جديدة عالية الجودة ومطابقة لأعلى المواصفات للمنازل، البقالات، الصيدليات، والمستودعات. 
              المقاس القياسي الأكثر طلباً: 
              <strong className="text-amber-400 font-medium px-1">(ارتفاع 2م × عرض 2م × عمق 60 سم على 4 أرفف بحمولة 300 كجم للرف)</strong>، 
              مع إمكانية تفصيل جميع الأبعاد والمساحات.
            </p>

            {/* Spec Features Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/80 text-right space-y-1">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <p className="font-bold text-xs text-zinc-200">حمولة عالية</p>
                <p className="text-[11px] text-zinc-400">300 كجم لكل رف</p>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/80 text-right space-y-1">
                <Wrench className="w-5 h-5 text-amber-400" />
                <p className="font-bold text-xs text-zinc-200">تركيب وتثبيت</p>
                <p className="text-[11px] text-zinc-400">فنيون متخصصون</p>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/80 text-right space-y-1">
                <Package className="w-5 h-5 text-amber-400" />
                <p className="font-bold text-xs text-zinc-200">جميع المقاسات</p>
                <p className="text-[11px] text-zinc-400">جديد صيني نخب أول</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>طلب تسعيرة فورية عبر الواتساب</span>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-amber-400 font-extrabold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال مباشر: {phoneNumber}</span>
              </a>
            </div>

            {/* Note */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>مقرنا الرئيسي في الخمرة بجدة، ونسعد بخدمتكم وتلبية طلباتكم يومياً بجدة ومكة.</span>
            </div>

          </div>

          {/* Right Product Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-2.5 rounded-3xl border border-zinc-800 shadow-2xl relative group">
              <img
                src="/images/shelf-heavy-duty.jpg"
                alt="رفوف صينية جديدة عالية الجودة"
                className="w-full h-[420px] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Overlay Glass Tags */}
              <div className="absolute top-5 right-5 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 px-3.5 py-2 rounded-xl text-right">
                <span className="text-[11px] font-bold text-amber-400 block">المقاس القياسي الأكثر طلباً</span>
                <span className="text-xs font-extrabold text-white">2م ارتفاع × 2م عرض (عمق 60 سم)</span>
              </div>

              <div className="absolute bottom-5 right-5 left-5 bg-zinc-950/90 backdrop-blur-md border border-zinc-800/80 p-4 rounded-xl text-right shadow-2xl space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-amber-500 text-zinc-950 text-[11px] font-black px-2.5 py-0.5 rounded-md">
                    حمولة 300 كجم / للرف
                  </span>
                  <span className="text-xs text-zinc-300 font-bold">4 أرفف فولاذية متينة</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  هيكل فولاذي متين مقاوم للصدأ، مناسب للمستودعات، البقالات، الصيدليات، والمنازل.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

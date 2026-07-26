import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Wrench, Package, CheckCircle2, Sparkles, Truck, Star } from 'lucide-react';

export default function Hero() {
  const phoneNumber = "0570575469";
  const whatsappNumber = "966570575469";
  const whatsappMessage = encodeURIComponent("السلام عليكم، أود طلب تسعيرة لتوريد وتفصيل رفوف صينية جديدة بجدة ومكة.");

  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-20 overflow-hidden bg-grid-pattern ambient-light-top">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Content Column (Right side in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-amber-500/30 text-zinc-200 text-xs font-semibold backdrop-blur-xl shadow-lg shadow-black/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>فنيو التوريد والتركيب متواجدون اليوم بجدة ومكة • المقر: الخمرة</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              حلول التخزين المتكاملة <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                توريد وتفصيل الرفوف
              </span> <br />
              <span className="text-zinc-200 text-2xl sm:text-3xl font-extrabold">بأسعار مغرية وتنافسية</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-2xl">
              نوفر رفوفاً صينية جديدة عالية الجودة ومطابقة لأعلى مواصفات التحمل للمستودعات، البقالات، الصيدليات، والمنازل. 
              المقاس القياسي الأكثر طلباً: 
              <strong className="text-amber-400 font-bold px-1 inline-block">
                (ارتفاع 2م × عرض 2م × عمق 60 سم على 4 أرفف بحمولة 300 كجم/رف)
              </strong> 
              مع إمكانية التفصيل لكافة المساحات.
            </p>

            {/* 3 Spec Key Highlight Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/90 text-right space-y-1 hover:border-amber-500/40 transition-all">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="font-extrabold text-xs text-zinc-100">حمولة 300 كجم</p>
                <p className="text-[11px] text-zinc-400 font-medium">لكل رف صلب</p>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/90 text-right space-y-1 hover:border-amber-500/40 transition-all">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Wrench className="w-4 h-4" />
                </div>
                <p className="font-extrabold text-xs text-zinc-100">تركيب وتثبيت</p>
                <p className="text-[11px] text-zinc-400 font-medium">فنيون متخصصون</p>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/90 text-right space-y-1 hover:border-amber-500/40 transition-all">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
                <p className="font-extrabold text-xs text-zinc-100">جديد صيني</p>
                <p className="text-[11px] text-zinc-400 font-medium">نخب أول ممتاز</p>
              </div>
            </div>

            {/* Hero Dual CTA Actions (Hidden on Phones to keep mobile view sleek) */}
            <div className="hidden sm:flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-sm shadow-xl btn-glow-emerald transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>طلب تسعيرة فورية عبر الواتساب</span>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-500/50 text-amber-400 font-extrabold text-sm shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال مباشر: {phoneNumber}</span>
              </a>
            </div>

            {/* Quick Guarantees Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-zinc-400 pt-2 border-t border-zinc-800/80">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>توصيل وتركيب فوري لجميع مناطق جدة ومكة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ضمان الجودة والمتانة الفولاذية</span>
              </div>
            </div>

          </div>

          {/* Product Showcase Visual Column (Left side in RTL) */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Glow Ring Behind Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-amber-500/5 to-transparent rounded-3xl blur-2xl transform scale-105 pointer-events-none"></div>

            {/* Showcase Card Wrapper */}
            <div className="glass-panel p-3 rounded-3xl border border-zinc-800/90 shadow-2xl relative group overflow-hidden">
              
              {/* Product Showcase Image */}
              <div className="relative rounded-2xl overflow-hidden bg-zinc-950">
                <picture>
                  <source srcSet="/images/shelf-heavy-duty.webp" type="image/webp" />
                  <img
                    src="/images/shelf-heavy-duty.jpg"
                    alt="رفوف صينية جديدة عالية الجودة بجدة ومكة"
                    width="600"
                    height="420"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    className="w-full h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute top-6 right-6 bg-zinc-950/90 backdrop-blur-xl border border-amber-500/40 px-4 py-2.5 rounded-2xl shadow-xl text-right space-y-0.5">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-[11px] font-extrabold">المقاس القياسي الأكثر طلباً</span>
                </div>
                <span className="text-xs font-black text-white block">2م ارتفاع × 2م عرض (عمق 60 سم)</span>
              </div>

              {/* Floating Badge Top Left */}
              <div className="absolute top-6 left-6 bg-amber-500 text-zinc-950 px-3 py-1.5 rounded-xl font-black text-xs shadow-lg flex items-center gap-1">
                <span>300 كجم / للرف</span>
              </div>

              {/* Floating Bottom Specifications Card */}
              <div className="absolute bottom-6 right-6 left-6 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/90 p-4 rounded-2xl text-right shadow-2xl space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-zinc-800/80 pb-2">
                  <span className="text-xs font-extrabold text-white">4 أرفف فولاذية متينة</span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-md">
                    جديد صيني نخب أول
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-normal">
                  هيكل صلب مقاوم للصدأ، مصمم للتخزين الثقيل بالبقاليات، المستودعات، الصيدليات، والمنازل.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

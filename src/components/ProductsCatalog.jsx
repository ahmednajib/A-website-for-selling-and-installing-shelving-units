import React from 'react';
import { MessageCircle, Building2, Store, Box, Home, Tag, Sparkles, Check } from 'lucide-react';

export default function ProductsCatalog() {
  const whatsappNumber = "966570575469";

  const products = [
    {
      id: "heavy-duty",
      title: "رفوف المستودعات والتخزين الثقيل",
      category: "مستودعات ومصانع",
      icon: Building2,
      image: "/images/shelf-heavy-duty.jpg",
      imageWebp: "/images/shelf-heavy-duty.webp",
      badge: "حمولة 300 كجم / رف",
      dimensions: "2م ارتفاع × 2م عرض (عمق 60 سم)",
      levels: "4 أرفف متينة",
      description: "رفوف فولاذية فائقة الصلابة للتخزين الثقيل في المستودعات والورش.",
      tags: ["حمولة 300 كجم", "4 أرفف صلبة", "تثبيت وتوصيل فوري"]
    },
    {
      id: "supermarket",
      title: "رفوف البقالات والسوبرماركت",
      category: "متاجر وتموينات",
      icon: Store,
      image: "/images/shelf-supermarket.jpg",
      imageWebp: "/images/shelf-supermarket.webp",
      badge: "حواف حمراء مميزة",
      dimensions: "ارتفاعات متنوعة × عرض 90-100 سم",
      levels: "4 إلى 5 أرفف",
      description: "رفوف عرض احترافية للمتاجر مع حواف حماية وتنسيق جذاب للمنتجات.",
      tags: ["أشرطة حماية حمراء", "سهلة التنظيف", "تنسيق متكامل للمحلات"]
    },
    {
      id: "pharmacy",
      title: "رفوف الصيدليات والمعارض",
      category: "صيدليات ومراكز طبية",
      icon: Box,
      image: "/images/shelf-light-duty.jpg",
      imageWebp: "/images/shelf-light-duty.webp",
      badge: "أبيض ناصع أنيق",
      dimensions: "تفصيل بحسب أبعاد المساحة",
      levels: "أرفف قابلة للتعديل",
      description: "رفوف بيضاء أنيقة متوافقة مع اشتراطات الصيدليات والمراكز الطبية.",
      tags: ["دهان مقاوم للصدأ", "رؤية واضحة", "مظهر احترافي فاخر"]
    },
    {
      id: "home-storage",
      title: "رفوف التخزين للمنازل والمطابخ",
      category: "منازل ومطابخ",
      icon: Home,
      image: "/images/shelf-home-storage.jpg",
      imageWebp: "/images/shelf-home-storage.webp",
      badge: "مرنة وسهلة التجميع",
      dimensions: "مقاسات منزلية مخصصة",
      levels: "3 إلى 5 أرفف",
      description: "حلول تخزين منزلية عملية لترتيب الأواني والتخزين بالمطابخ والمستودعات.",
      tags: ["مقاومة للرطوبة", "قوة تحمل ممتازة", "تركيب فوري بالمنزل"]
    }
  ];

  const handleOrderWhatsApp = (productTitle) => {
    const message = encodeURIComponent(`السلام عليكم، أود الاستفسار وطلب تسعيرة لـ: (${productTitle}) بجدة / مكة.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="catalog" className="py-20 bg-zinc-950/90 border-t border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-bold shadow-md">
            <Tag className="w-3.5 h-3.5" />
            <span>تشكيلة واسعة بكافة المقاسات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            كتالوج الرفوف الصينية الجديدة <span className="text-amber-400 font-black">(جدة ومكة)</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            نوفر لكم أفضل موديلات الرفوف الفولاذية للمستودعات، البقالات، الصيدليات، والمنازل بأسعار تنافسية.
          </p>
        </div>

        {/* Product Cards Grid - Clean, Spacious & Eye-Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const IconComp = product.icon;
            return (
              <div 
                key={product.id}
                className="glass-panel-interactive rounded-3xl overflow-hidden flex flex-col justify-between border border-zinc-800/90 hover:border-amber-500/40 group shadow-xl"
              >
                <div>
                  {/* Image Frame with Badge */}
                  <div className="relative h-48 overflow-hidden bg-zinc-950">
                    <picture>
                      <source srcSet={product.imageWebp} type="image/webp" />
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        width="400"
                        height="192"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                    
                    {/* Top Highlight Badge */}
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-zinc-950/90 backdrop-blur-md text-amber-400 border border-zinc-800 text-[11px] font-bold shadow-md">
                      {product.badge}
                    </span>
                  </div>

                  {/* Clean Content Area */}
                  <div className="p-5 space-y-4 text-right">
                    
                    {/* Title & Icon */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-extrabold text-white leading-snug">{product.title}</h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {product.description}
                    </p>

                    {/* Key Dimensions Pill */}
                    <div className="bg-zinc-900/90 px-3 py-2 rounded-xl border border-zinc-800/80 flex items-center justify-between text-xs">
                      <span className="text-zinc-400 font-normal">المقاس:</span>
                      <span className="font-bold text-amber-400 dir-rtl">{product.dimensions}</span>
                    </div>

                    {/* Clean Tags Row */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800/80 text-[11px] font-medium flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Bottom Action Area (Direct & Clean) */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleOrderWhatsApp(product.title)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>طلب تسعيرة عبر الواتساب</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

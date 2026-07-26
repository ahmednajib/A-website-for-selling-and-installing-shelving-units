import React from 'react';
import { Check, MessageCircle, Building2, Store, Box, Home, Tag, ArrowUpRight } from 'lucide-react';

export default function ProductsCatalog() {
  const whatsappNumber = "966570575469";

  const products = [
    {
      id: "heavy-duty",
      title: "رفوف المستودعات والتخزين الثقيل",
      category: "مستودعات ومصانع",
      icon: Building2,
      image: "/images/shelf-heavy-duty.jpg",
      badge: "حمولة 300 كجم للرف",
      dimensions: "2م ارتفاع × 2م عرض × 60 سم عمق",
      levels: "4 أرفف متينة",
      origin: "جديد صيني نخب أول",
      description: "رفوف فولاذية فائقة الصلابة مصممة خصيصاً لتخزين البضائع والمستلزمات الثقيلة في المستودعات والورش.",
      features: [
        "قوة تحمل تصل إلى 300 كجم لكل رف",
        "هيكل متين مقاوم للصدأ والخدش",
        "إمكانية تعديل المسافات بحسب حجم الكراتين",
        "توصيل وتركيب فوري بجدة ومكة"
      ]
    },
    {
      id: "supermarket",
      title: "رفوف البقالات والسوبرماركت",
      category: "متاجر وتموينات",
      icon: Store,
      image: "/images/shelf-supermarket.jpg",
      badge: "حواف حمراء مميزة",
      dimensions: "ارتفاعات متعددة × عرض 90-100 سم",
      levels: "4 إلى 5 أرفف عرض",
      origin: "تصميم عصري جذاب",
      description: "رفوف عرض احترافية للبقالات والسوبرماركت تتميز بأشرطة الحماية الحمراء وسهولة ترتيب المواد الغذائية.",
      features: [
        "أشرطة حمراء أمامية لحفظ المنتجات",
        "ألواح خلفية صلبة وسهلة التنظيف",
        "تحمل ممتاز للمعلبات والمشروبات",
        "تنسيق تام لتجهيز المحلات بالكامل"
      ]
    },
    {
      id: "pharmacy",
      title: "رفوف الصيدليات والمعارض",
      category: "صيدليات ومراكز طبية",
      icon: Box,
      image: "/images/shelf-light-duty.jpg",
      badge: "أبيض ناصع أنيق",
      dimensions: "مقاسات متوفرة حسب المساحة",
      levels: "أرفف قابلة للتعديل",
      origin: "دهان حراري فاخر",
      description: "رفوف بيضاء أنيقة متوافقة مع اشتراطات الصيدليات والمراكز الطبية لتنظيم الأدوية ومستحضرات التجميل.",
      features: [
        "دهان مقاوم للبكتيريا والصدأ",
        "رؤية واضحة للمنتجات وسهولة الوصول",
        "تنسيق مظهر المعرض بشكل احترافي",
        "أسعار مغرية وتفصيل للمساحات"
      ]
    },
    {
      id: "home-storage",
      title: "رفوف التخزين للمنازل والمطابخ",
      category: "منازل ومطابخ",
      icon: Home,
      image: "/images/shelf-light-duty.jpg",
      badge: "مرنة وسهلة التجميع",
      dimensions: "مقاسات منزلية قياسية ومخصصة",
      levels: "3 إلى 5 أرفف",
      origin: "جديد صيني عالي الجودة",
      description: "حلول تخزين منزلية عملية لترتيب الأواني المنزلية، المواد التموينية، وغرف الغسيل والكراجات.",
      features: [
        "استغلال مثالي للمساحات الضيقة",
        "مقاومة للرطوبة وسهلة التنظيف",
        "قوة تحمل ممتازة للأجهزة المنزلية",
        "توصيل وتركيب فوري في منزلكم"
      ]
    }
  ];

  const handleOrderWhatsApp = (productTitle) => {
    const message = encodeURIComponent(`السلام عليكم، أود الاستفسار وطلب تسعيرة لـ: (${productTitle}) بجدة / مكة.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="catalog" className="py-20 bg-zinc-950/80 border-t border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-semibold">
            <Tag className="w-3.5 h-3.5" />
            <span>تشكيلة واسعة بكافة المقاسات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            كتالوج الرفوف الصينية الجديدة <span className="text-amber-400">(جدة ومكة)</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            نوفر لكم أفضل موديلات الرفوف الفولاذية عالية الجودة للمستودعات، البقالات، الصيدليات، والمنازل بأسعار مغرية وتنافسية.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const IconComp = product.icon;
            return (
              <div 
                key={product.id}
                className="glass-panel-interactive rounded-3xl overflow-hidden flex flex-col justify-between border border-zinc-800/80 group"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative h-52 overflow-hidden bg-zinc-950">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-zinc-950/80 backdrop-blur-md text-amber-400 border border-zinc-800 text-xs font-bold shadow-md">
                      {product.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3 text-right">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white">{product.title}</h3>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed min-h-[38px]">
                      {product.description}
                    </p>

                    {/* Specs Box */}
                    <div className="bg-zinc-950/90 p-3 rounded-2xl text-xs space-y-1.5 border border-zinc-800/80">
                      <div className="flex justify-between items-center text-zinc-300">
                        <span className="text-zinc-400 font-normal">المقاس:</span>
                        <span className="font-semibold text-zinc-200 dir-rtl">{product.dimensions}</span>
                      </div>
                      <div className="flex justify-between items-center text-zinc-300">
                        <span className="text-zinc-400 font-normal">الأرفف:</span>
                        <span className="font-semibold text-amber-400">{product.levels}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-1.5 pt-1 text-xs text-zinc-300">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0 space-y-2.5">
                  <div className="bg-zinc-950/90 p-2.5 rounded-xl border border-zinc-800 text-center">
                    <span className="text-xs font-semibold text-amber-400 block">أسعار مغرية وتنافسية</span>
                  </div>

                  <button
                    onClick={() => handleOrderWhatsApp(product.title)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all active:scale-[0.98]"
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

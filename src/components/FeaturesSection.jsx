import React from 'react';
import { ShieldCheck, Truck, Wrench, Coins, MapPin, CheckCircle2, Clock } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: "موقعنا الرئيسي بالخمرة",
      desc: "موقع استراتيجي في حي الخمرة يضمن لك سرعة التوصيل والتركيب المباشر لكافة أحياء جدة ومكة المكرمة."
    },
    {
      icon: ShieldCheck,
      title: "حديد صيني جديد نخب أول",
      desc: "رفوف مصنعة من أمتن أنواع الصاج الفولاذي المطلي حرارياً والمقاوم للصدأ والرطوبة والخدش."
    },
    {
      icon: Truck,
      title: "توصيل وتركيب فوري",
      desc: "فريق عمل متخصص ومجهز بسيارات توصيل لتركيب الرفوف وتثبيتها بدقة واحترافية في الموقع."
    },
    {
      icon: Coins,
      title: "أسعار مغرية وتنافسية",
      desc: "نقدم أفضل العروض والأسعار المنافسة في السوق مع خصومات خاصة وتخفيضات ممتازة للكميات والمشاريع."
    },
    {
      icon: Wrench,
      title: "جميع المقاسات والاستخدامات",
      desc: "نوفر المقاس القياسي (2م × 2م عمق 60 سم) بالإضافة لتفصيل كافة المقاسات والموديلات للمستودعات، البقالات، والصيدليات."
    },
    {
      icon: Clock,
      title: "خدمة يومية واستجابة سريعة",
      desc: "نسعد بخدمتكم وتلبية طلباتكم يومياً من 8 صباحاً حتى 11 مساءً مع استجابة فورية عبر الواتساب والاتصال."
    }
  ];

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>مميزات خدماتنا بجدة ومكة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            لماذا تختار <span className="text-amber-400">مؤسستنا؟</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            نجمع بين الجودة العالية، المتانة الفائقة، والسرعة في التوريد والتركيب مع ضمان أفضل تجربة لتنظيم وتخزين بضائعك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/60 rounded-xl p-5 border border-slate-800 space-y-2.5 text-right hover:border-slate-700 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

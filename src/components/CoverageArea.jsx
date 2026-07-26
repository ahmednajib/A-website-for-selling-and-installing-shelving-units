import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function CoverageArea() {
  const jeddahDistricts = [
    "الخمرة (مقرنا الرئيسي)", "حي الصفا", "حي المروة", "حي الحمدانية", 
    "حي السلامة", "حي الشاطئ", "حي المحجر", "حي غليل", 
    "حي النزلة", "حي الروضة", "حي التيسير", "حي أبحر الشمالية والجنوبية",
    "حي بني مالك", "حي السامر", "حي الفيصلية", "حي النعيم",
    "حي الزهراء", "حي النسيم", "حي الأجاويد", "جميع أحياء شمال وجنوب جدة"
  ];

  const makkahDistricts = [
    "حي العزيزية", "حي الشوقية", "حي العوالي", "حي بطحاء قريش",
    "حي النزهة", "حي شارع الستين", "حي الزاهر", "حي التنعيم",
    "حي المعابدة", "حي الرصيفة", "حي الكعكية", "حي العتيبية",
    "حي الشرايع", "حي الخالدية", "جميع أحياء ومناطق مكة المكرمة"
  ];

  const whatsappNumber = "966570575469";
  const phoneNumber = "0570575469";

  return (
    <section id="coverage" className="py-16 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold">
            <Navigation className="w-3.5 h-3.5" />
            <span>نصلكم أينما كنتم في جدة ومكة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            مناطق التغطية والخدمة <span className="text-amber-400">(جدة ومكة المكرمة)</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            موقعنا في **حي الخمرة بجدة** يتيح لنا السرعة في التواجد لتوريد وتركيب الرفوف لكافة المستودعات، المحلات، والمنازل.
          </p>
        </div>

        {/* Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Jeddah Card */}
          <div className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">تغطية محافظة جدة بالكامل</h3>
                <p className="text-xs text-amber-400 font-medium">توصيل وتركيب فوري من مقرنا بالخمرة</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {jeddahDistricts.map((district, idx) => (
                <div 
                  key={idx} 
                  className={`p-2 rounded-lg border text-xs font-semibold text-right flex items-center gap-1.5 ${
                    district.includes("الخمرة") 
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-400'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">{district}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Makkah Card */}
          <div className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">تغطية أحياء مكة المكرمة</h3>
                <p className="text-xs text-amber-400 font-medium">توصيل سريع وتركيب محترف</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {makkahDistricts.map((district, idx) => (
                <div 
                  key={idx} 
                  className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 text-xs font-semibold text-right flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">{district}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action strip */}
        <div className="mt-8 bg-slate-900/90 p-4 sm:p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-sm font-bold text-slate-100">هل موقعك في منطقة أخرى؟</h4>
            <p className="text-xs text-slate-400">نصل لكافة القرى والمناطق التابعة لمحافظتي جدة ومكة المكرمة.</p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("السلام عليكم، أود التأكد من خدمة التوصيل والتركيب في موقعي.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تأكيد التوصيل واتساب</span>
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال: {phoneNumber}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

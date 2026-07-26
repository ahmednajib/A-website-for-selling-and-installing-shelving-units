import React, { useState } from 'react';
import { Sliders, MessageCircle, Phone, CheckCircle2, MapPin, Package, Layers } from 'lucide-react';

export default function ShelfSpecBuilder() {
  const whatsappNumber = "966570575469";
  const phoneNumber = "0570575469";

  const [shelfType, setShelfType] = useState('مستودعات 300 كجم (2م × 2م عمق 60 سم)');
  const [city, setCity] = useState('جدة');
  const [district, setDistrict] = useState('حي الخمرة');
  const [quantity, setQuantity] = useState('طقم واحد');
  const [tiers, setTiers] = useState('4 أرفف (المقاس القياسي)');
  const [needInstallation, setNeedInstallation] = useState('نعم، التوصيل والتركيب بجدة/مكة');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `السلام عليكم ورحمة الله وبركاته،
أود طلب تسعيرة لتوريد وتفصيل رفوف بالمواصفات التالية:

📌 *نوع الرف:* ${shelfType}
📐 *عدد الأرفف:* ${tiers}
📦 *الكمية المطلوبة:* ${quantity}
📍 *المدينة والحي:* ${city} - ${district}
🚚 *خدمة التركيب:* ${needInstallation}
${notes ? `📝 *ملاحظات إضافية:* ${notes}` : ''}

يرجى تزويدي بأفضل تسعيرة متوفرة وشكراً.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="spec-builder" className="py-20 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            <span>تسعيرة مخصصة لمواصفاتك</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            استمارة تحديد <span className="text-amber-400">قياسات ومواصفات الرفوف</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            حدد القياسات والكمية المطلوبة وسيقوم فريقنا بتزويدكم بأفضل تسعيرة منافسة شاملة التوصيل والتركيب.
          </p>
        </div>

        {/* Builder Form Glass Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Shelf Type Selection */}
            <div>
              <label className="block text-sm font-bold text-white mb-3 text-right">
                1. اختر نوع الرف والاستخدام المطلوب:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "مستودعات 300 كجم (2م × 2م عمق 60 سم)",
                  "رفوف بقالات وسوبرماركت (حواف حمراء)",
                  "رفوف صيدليات ومعارض تجارية",
                  "رفوف تخزين منزلية للمطابخ والغرف",
                  "تفصيل مقاسات مخصصة حسب الطلب"
                ].map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setShelfType(option)}
                    className={`p-3.5 rounded-2xl border text-xs font-semibold text-right transition-all flex items-center justify-between ${
                      shelfType === option
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400 shadow-md'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <span>{option}</span>
                    {shelfType === option && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Segmented Pill Toggles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tiers Segmented Pill */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300 text-right">
                  عدد الأرفف المطلوبة:
                </label>
                <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  {["3 أرفف", "4 أرفف (المقاس القياسي)", "5 أرفف", "6 أرفف أو أكثر"].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTiers(t)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                        tiers === t
                          ? 'bg-amber-500 text-zinc-950 font-bold shadow'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Segmented Pill */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300 text-right">
                  الكمية المطلوبة:
                </label>
                <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  {[
                    "طقم واحد",
                    "2 إلى 5 أطقم",
                    "6 إلى 10 أطقم",
                    "تجهيز مشروع / كميات"
                  ].map((q) => (
                    <button
                      type="button"
                      key={q}
                      onClick={() => setQuantity(q)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                        quantity === q
                          ? 'bg-amber-500 text-zinc-950 font-bold shadow'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Step 3: Location Segmented Pill */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300 text-right">
                  المدينة:
                </label>
                <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  {["جدة", "مكة المكرمة"].map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setCity(c)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        city === c
                          ? 'bg-amber-500 text-zinc-950 shadow'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300 text-right">
                  الحي السكني أو المنطقة:
                </label>
                <input
                  type="text"
                  placeholder="مثال: الخمرة، الصفا، العزيزية..."
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3 text-xs text-white font-medium focus:border-amber-500 focus:outline-none placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-zinc-300 text-right">
                ملاحظات أو أبعاد خاصة (اختياري):
              </label>
              <textarea
                rows="2"
                placeholder="اكتب أي أبعاد أو استفسارات ترغب بها..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3 text-xs text-white font-medium focus:border-amber-500 focus:outline-none placeholder:text-zinc-600 resize-none"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-950/50 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>إرسال المواصفات للحصول على التسعيرة عبر الواتساب</span>
              </button>

              <a
                href={`tel:${phoneNumber}`}
                className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-amber-400 hover:bg-zinc-800 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال مباشر: {phoneNumber}</span>
              </a>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

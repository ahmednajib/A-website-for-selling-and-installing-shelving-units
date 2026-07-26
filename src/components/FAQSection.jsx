import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const whatsappNumber = "966570575469";

  const faqs = [
    {
      q: "ما هي مواصفات الرف الصيني القياسي المتوفر لديكم؟",
      a: "الرف الصيني القياسي يأتي بمقاس ارتفاع مترين (2م) × عرض مترين (2م) بعمق 60 سم، ويتكون من 4 أرفف متينة مصنعة من الحديد الفولاذي المقوى، بقدرة تحمل تصل إلى 300 كجم لكل رف."
    },
    {
      q: "هل تتوفر خدمة تفصيل الرفوف حسب المقاس للمحلات والمستودعات؟",
      a: "نعم بالتأكيد، نوفر خدمات توريد وتفصيل الرفوف بكافة المقاسات والمواصفات الخاصة بالبقالات، الصيدليات، المستودعات، والمنازل بحسب المساحة المطلوبة."
    },
    {
      q: "أين يقع موقعكم الرئيسي وكيف يتم التوصيل والتركيب؟",
      a: "موقعنا الرئيسي يقع في حي الخمرة بجدة، ونوفر خدمة التوصيل والتركيب السريع لجميع أحياء ومناطق جدة ومكة المكرمة."
    },
    {
      q: "كيف يمكنني طلب تسعيرة واستشارات الفنيين؟",
      a: "يمكنكم تزويدنا بالمواصفات عبر زر الواتساب المباشر أو الاتصال بنا على الرقم 0570575469 للحصول على أفضل تسعيرة منافسة واستشارة فورية."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>الإجابات الشاملة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            الأسئلة الشائعة حول توريد وتركيب الرفوف
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-amber-500/40 bg-slate-900/90' : 'border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/70'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-right font-bold text-sm sm:text-base text-slate-200 flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Footer CTA */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-xs text-slate-400">لديك استفسار آخر؟ نسعد بخدمتك المباشرة عبر الواتساب.</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("السلام عليكم، لدي استفسار إضافي حول تفصيل وتركيب الرفوف.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>استفسر فوراً عبر الواتساب</span>
          </a>
        </div>

      </div>
    </section>
  );
}

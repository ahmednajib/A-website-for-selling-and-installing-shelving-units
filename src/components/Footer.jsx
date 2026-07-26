import React from 'react';
import { Layers, MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export default function Footer() {
  const phoneNumber = "0570575469";
  const whatsappNumber = "966570575469";

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs pt-12 pb-24 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Layers className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-base font-bold text-zinc-100 block">مؤسسة الرفوف المتميزة</span>
                <span className="text-[11px] text-amber-400 font-medium">جدة ومكة المكرمة</span>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              المؤسسة المتخصصة في توريد وتفصيل وتركيب الرفوف الصينية الجديدة عالية الجودة للمستودعات، البقالات، الصيدليات، والمنازل بأسعار مغرية وتنافسية.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-zinc-200 border-b border-zinc-800 pb-2">روابط التنقل</h4>
            <ul className="space-y-1.5 font-normal">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition-colors">كتالوج الرفوف</a></li>
              <li><a href="#spec-builder" className="hover:text-amber-400 transition-colors">استمارة طلب تسعيرة</a></li>
              <li><a href="#coverage" className="hover:text-amber-400 transition-colors">مناطق الخدمة بجدة ومكة</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-zinc-200 border-b border-zinc-800 pb-2">خدمات الرفوف</h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>• رفوف مستودعات حمولة 300 كجم</li>
              <li>• رفوف بقالات وسوبرماركت (حواف حمراء)</li>
              <li>• رفوف صيدليات ومراكز طبية</li>
              <li>• رفوف تخزين للمنازل والمطابخ</li>
              <li>• تفصيل وتوفير كافة المقاسات</li>
              <li>• توصيل وتركيب فوري ومباشر</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-zinc-200 border-b border-zinc-800 pb-2">التواصل والموقع</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-200">المقر الرئيسي:</p>
                  <p className="text-zinc-400">حي الخمرة - جدة (نغطي جدة ومكة)</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${phoneNumber}`} className="font-bold text-zinc-200 hover:text-amber-400 dir-ltr">
                  {phoneNumber}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:underline dir-ltr">
                  +966 57 057 5469
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>يومياً من 8:00 صباحاً حتى 11:00 مساءً</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
          <p className="text-zinc-400 text-xs">
            © {new Date().getFullYear()} مؤسسة الرفوف المتميزة لتوريد وتركيب الرفوف بجدة ومكة المكرمة.
          </p>
          <div className="text-xs text-zinc-400">
            <span>الخمرة • جدة • مكة المكرمة</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

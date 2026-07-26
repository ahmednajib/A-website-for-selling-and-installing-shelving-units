# 📦 موقع توريد وتفصيل وتركيب الرفوف
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![WebP Performance](https://img.shields.io/badge/Image_Performance-WebP_Optimized-00C853?style=for-the-badge)

تطبيق ويب متكامل وعصري لمؤسسة **الرفوف المتميزة** المخصصة في توريد، تفصيل، وتركيب كافة أنواع الرفوف الفولاذية والصينية الجديدة بجدة ومكة المكرمة.

---

## ✨ المميزات الرئيسية (Key Features)

- 🎨 **تصميم عصري وجذاب (2026 Dark Glassmorphism)**: واجهة زجاجية داكنة فائقة السلاسة مع مؤثرات إضاءة وتوافق تام مع الهواتف والأجهزة اللوحية.
- 📐 **حاسبة مخصصة لطلب التفصيل والتسعيرة (`ShelfSpecBuilder`)**: تمكّن العميل من اختيار نوع الرف، المقاس، عدد الأرفف، والكمية وتوليد طلب تسعيرة تلقائي عبر الواتساب.
- 🏬 **كتالوج منتجات تفاعلي خفيف (`ProductsCatalog`)**: عرض منظم لرفوف المستودعات، السوبرماركت، الصيدليات، والمنازل دون تكتل نصوص.
- 🚀 **سرعة تحميل استثنائية (Ultra-Fast Image Optimization)**: تحويل واعتماد صيغ WebP المخفضة بنسبة **88%** مع دعم التحميل المسبق `Preload` و `Lazy Loading`.
- 📱 **تجربة هاتف محسّنة**: إخفاء العناصر المزدحمة على الجوال والاعتماد على شريط تواصل عائم ومريح أسفل الشاشة (`FloatingContact`).
- 📍 **تغطية شاملة لمناطق الخدمة (`CoverageArea`)**: توضيح نطاق التوصيل والتركيب الفوري في جدة (المقر الرئيسي: الخمرة) ومكة المكرمة.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts (Alexandria & Cairo)
- **Image Optimization**: Python PIL WebP Conversion Pipeline

---

## 📁 هيكلية المشروع (Project Structure)

```text
├── public/
│   └── images/               # صور المنتجات والشعار بصيغ WebP و JPG المحسّنة
├── src/
│   ├── components/
│   │   ├── Header.jsx        # شريط التصفح العلوي الزجاجي (Floating Pill Header)
│   │   ├── Hero.jsx          # واجهة الموقع الرئيسية والعروض
│   │   ├── ProductsCatalog.jsx # كتالوج المنتجات
│   │   ├── ShelfSpecBuilder.jsx # نموذج طلب تفصيل وتحديد المواصفات
│   │   ├── FeaturesSection.jsx # مميزات التعامل والمؤسسة
│   │   ├── CoverageArea.jsx  # خريطة ومناطق التغطية (جدة ومكة)
│   │   ├── FAQSection.jsx    # الأسئلة الشائعة
│   │   ├── Footer.jsx        # التذييل وحقوق النشر
│   │   └── FloatingContact.jsx # شريط التواصل العائم للهواتف
│   ├── App.jsx               # المكون الرئيسي للتطبيق
│   ├── main.jsx              # مدخل التطبيق
│   └── index.css             # التنسيقات العامة والـ Design System
├── index.html                # ملف HTML الرئيسي مع الميتا والـ SEO
├── package.json              # الاعتمادات والسكربتات
└── vite.config.js            # إعدادات Vite
```

---

## 🚀 التشغيل والتطوير المحلي (Local Setup)

### 1. استنسخ المستودع (Clone Repository):
```bash
git clone https://github.com/USERNAME/REPOSITORY_NAME.git
cd REPOSITORY_NAME
```

### 2. تثبيت الحزم والاعتمادات (Install Dependencies):
```bash
npm install
```

### 3. تشغيل الخادم المحلي (Run Dev Server):
```bash
npm run dev
```

افتح المتصفح على العنوان: `http://localhost:5173`

---

## 📦 بناء نسخة الإنتاج (Production Build)

لبناء النسخة النهائية الجاهزة للنشر على Vercel أو Netlify أو أي خادم استضافة:

```bash
npm run build
```
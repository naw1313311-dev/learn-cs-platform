# LearnCS Platform

منصة تعليمية متكاملة لتعليم الحاسب الآلي والبرمجة، مبنية باستخدام Next.js و Tailwind CSS.

## المميزات
- صفحات تعليمية رئيسية
- عرض الدورات ومعلوماتها
- صفحات التفاعل: تسجيل الدخول، لوحة التحكم، المسارات، المدرسين، التواصل
- واجهة عربية كاملة مع دعم RTL
- تصميم حديث ومتجاوب

## التقنيات
- Next.js
- TypeScript
- Tailwind CSS

## التشغيل
```bash
npm install
npm run dev
```

ثم افتح المتصفح على:
```bash
http://localhost:3000
```

## الهيكل العام
```text
app/
  about/
  contact/
  courses/
  dashboard/
  login/
  tracks/
  teachers/
  globals.css
  layout.tsx
  page.tsx
components/
  Navbar.tsx
  Hero.tsx
  FeatureSection.tsx
  StatsBar.tsx
  CourseCard.tsx
  Footer.tsx
data/
  courses.ts
```

## ملاحظة
هذا هو إصدار MVP أولي للمنصة، ويمكن توسيعه لاحقًا بإضافة:
- نظام تسجيل مستخدم كامل
- قاعدة بيانات PostgreSQL
- مصادقة JWT/NextAuth
- محرر أكواد مباشر
- اختبارات تلقائية
- صفحـات إدارة ومحتوى

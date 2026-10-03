import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LearnCS | منصة تعليم الحاسب الآلي',
  description: 'منصة تعليمية متكاملة لتعليم البرمجة والحاسب الآلي',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

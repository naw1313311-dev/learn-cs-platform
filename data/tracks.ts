export type Track = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: string;
};

export const tracks: Track[] = [
  {
    slug: 'computer-fundamentals',
    title: 'أساسيات الحاسب الآلي',
    description: 'تعلم المفاهيم الأساسية للأنظمة، النظم التشغيلية، والبرامج الرقمية.',
    duration: '3 أسابيع',
    level: 'مبتدئ',
  },
  {
    slug: 'programming',
    title: 'البرمجة',
    description: 'الانتقال من التفكير المنطقي إلى كتابة الأكواد بشكل احترافي.',
    duration: '6 أسابيع',
    level: 'مبتدئ',
  },
  {
    slug: 'algorithms',
    title: 'الخوارزميات',
    description: 'التفكير العميق، التحليل، والتحسين في تنفيذ الحلول.',
    duration: '5 أسابيع',
    level: 'متوسط',
  },
  {
    slug: 'databases',
    title: 'قواعد البيانات',
    description: 'تصميم الجداول، الاستعلامات، والأمان في نظم المعلومات.',
    duration: '4 أسابيع',
    level: 'متوسط',
  },
  {
    slug: 'networking',
    title: 'الشبكات',
    description: 'فهم الاتصال بين الأنظمة، البروتوكولات، والتطبيقات.',
    duration: '4 أسابيع',
    level: 'متوسط',
  },
  {
    slug: 'cybersecurity',
    title: 'الأمن السيبراني',
    description: 'حماية الأنظمة، الكشف عن التهديدات، ومبادئ الدفاع الرقمي.',
    duration: '6 أسابيع',
    level: 'متقدم',
  },
];

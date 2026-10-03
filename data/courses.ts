export type Course = {
  slug: string;
  title: string;
  description: string;
  level: string;
  lessons: number;
  duration: string;
  overview: string[];
};

export const courses: Course[] = [
  {
    slug: 'intro-programming',
    title: 'مقدمة في البرمجة',
    description: 'تعرف على المفاهيم الأساسية للبرمجة وكتابة أولى البرامج بأسلوب مبسط.',
    level: 'مبتدئ',
    lessons: 18,
    duration: '4 أسابيع',
    overview: ['المتغيرات', 'الوظائف', 'الحلقات', 'هيكل البيانات الأساسية'],
  },
  {
    slug: 'algorithms',
    title: 'الخوارزميات',
    description: 'دراسة الخوارزميات وهياكل البيانات وكيفية تحليل الأداء.',
    level: 'متوسط',
    lessons: 24,
    duration: '6 أسابيع',
    overview: ['الفرز', 'البحث', 'التعقيد الزمني', 'الأشجار'],
  },
  {
    slug: 'web-development',
    title: 'تطوير الويب',
    description: 'تعلّم بناء مواقع ويب من الصفر باستخدام HTML، CSS، JavaScript.',
    level: 'مبتدئ',
    lessons: 20,
    duration: '5 أسابيع',
    overview: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    slug: 'databases',
    title: 'قواعد البيانات',
    description: 'فهم تصميم قواعد البيانات والاستعلامات والنسخ الاحتياطي.',
    level: 'متوسط',
    lessons: 16,
    duration: '4 أسابيع',
    overview: ['SQL', 'التصميم', 'العلاقات', 'الأمان'],
  },
  {
    slug: 'networking',
    title: 'الشبكات',
    description: 'أساسيات الشبكات، البروتوكولات، والأمان في الأنظمة.',
    level: 'متوسط',
    lessons: 14,
    duration: '3 أسابيع',
    overview: ['TCP/IP', 'DNS', 'الـ HTTP', 'الأمان'],
  },
  {
    slug: 'cybersecurity',
    title: 'الأمن السيبراني',
    description: 'أساسيات الأمن السيبراني وكيفية حماية الأنظمة من الهجمات.',
    level: 'متقدم',
    lessons: 18,
    duration: '5 أسابيع',
    overview: ['التهديدات', 'الحماية', 'التشفير', 'الإجابة للحوادث'],
  },
];

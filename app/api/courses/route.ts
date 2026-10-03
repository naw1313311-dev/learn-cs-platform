export async function GET() {
  return Response.json({
    success: true,
    platform: 'LearnCS',
    courses: 87,
    students: 12480,
    tracks: ['أساسيات الحاسب', 'البرمجة', 'الخوارزميات', 'قواعد البيانات'],
  });
}

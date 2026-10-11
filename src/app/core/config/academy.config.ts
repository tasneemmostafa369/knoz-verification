export interface AcademyConfig {
  nameAr?: string;
  nameEn?: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export const ACADEMY_CONFIG: AcademyConfig = {
  nameAr: 'أكاديمية كنوز',
  nameEn: 'Knoz Academy',
  logoUrl: '/assets/logo.jpeg',
  primaryColor: '#0F392B',    // اللون الأساسي (كحلي ملكي / أزرق عميق)
  secondaryColor: '#C8A559',  // اللون الثانوي (ذهبي دافئ)
};

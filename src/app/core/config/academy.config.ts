export interface AcademyConfig {
  nameAr?: string;
  nameEn?: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export const ACADEMY_CONFIG: AcademyConfig = {
  nameAr: 'أكاديمية تسنيم',
  nameEn: 'Tasneem Academy',
  logoUrl: '/assets/logo.jpeg',
  primaryColor: '#1E3A8A',    // اللون الأساسي (كحلي ملكي / أزرق عميق)
  secondaryColor: '#FBBF24',  // اللون الثانوي (ذهبي دافئ)
};

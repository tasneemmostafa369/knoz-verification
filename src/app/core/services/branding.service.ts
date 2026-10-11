import { Injectable, signal, computed } from '@angular/core';
import { ACADEMY_CONFIG, AcademyConfig } from '../config/academy.config';
import { Language } from '../mock/dictionary';

@Injectable({
  providedIn: 'root'
})
export class BrandingService {
  private readonly config = signal<AcademyConfig>(ACADEMY_CONFIG);

  readonly nameAr = computed(() => this.config().nameAr ?? '');
  readonly nameEn = computed(() => this.config().nameEn ?? '');
  readonly logoUrl = computed(() => this.config().logoUrl ?? '');
  readonly primaryColor = computed(() => this.config().primaryColor ?? '#1E3A8A');
  readonly secondaryColor = computed(() => this.config().secondaryColor ?? '#FBBF24');

  getAcademyName(lang: Language): string {
    return lang === 'ar' ? this.nameAr() : this.nameEn();
  }

  init(): void {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    root.style.setProperty('--brand-primary', this.primaryColor());
    root.style.setProperty('--brand-secondary', this.secondaryColor());

    // Update document title if present
    const defaultTitle = this.nameAr() || this.nameEn();
    if (defaultTitle) {
      document.title = `${defaultTitle} | نظام التحقق من الشهادات`;
    }

    // Update favicon if logoUrl is provided
    if (this.logoUrl()) {
      let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = this.logoUrl();
    }
  }
}

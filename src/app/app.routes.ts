import { Routes } from '@angular/router';
import { CertificateVerificationComponent } from './features/certificate-verification/certificate-verification';

export const routes: Routes = [
  {
    path: ':sspId',
    component: CertificateVerificationComponent
  },
  {
    path: '',
    component: CertificateVerificationComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ImgToWebpComponent } from './views/img-to-webp/img-to-webp.component';
import { FromWebpComponent } from './views/from-webp/from-webp.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => HomeComponent,
    data: { animationState: '1' },
  },
  {
    path: 'to-webp',
    loadComponent: () => ImgToWebpComponent,
    data: { animationState: '2' },
  },
  {
    path: 'from-webp',
    loadComponent: () => FromWebpComponent,
    data: { animationState: '3' },
  },
];

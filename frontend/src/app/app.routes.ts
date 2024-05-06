import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { SettingsComponent } from './views/settings/settings.component';
import { GalleryComponent } from './views/gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => HomeComponent,
    data: { animationState: '1' },
  },
  { path: 'settings', loadComponent: () => SettingsComponent },
  { path: 'gallery', loadComponent: () => GalleryComponent },
];

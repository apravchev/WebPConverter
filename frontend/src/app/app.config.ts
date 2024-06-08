import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UploadEffects } from './store/effects/upload.effects';
import { GalleryEffects } from './store/effects/gallery.effects';
import { GalleryReducer } from './store/reducers/gallery.reducer';
import { DialogService } from 'primeng/dynamicdialog';
import { ImageEffects } from './store/effects/image.effects';
import { ImageReducer } from './store/reducers/image.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ Gallery: GalleryReducer, Image: ImageReducer }),
    provideEffects(UploadEffects, GalleryEffects, ImageEffects),
    DialogService,
    provideAnimations(),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};

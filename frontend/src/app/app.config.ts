import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UploadEffects } from './store/effects/upload.effects';
import { UPLOAD_REDUCER } from './store/reducers/upload.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ Upload: UPLOAD_REDUCER }),
    provideEffects(UploadEffects),
    provideAnimations(),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UploadActions } from '../actions/upload.actions';
import { exhaustMap, first, map } from 'rxjs';
import { ImageHandlerService } from '../../services/image_handler.service';
import { GalleryActions } from '../actions/gallery.actions';
import { ApiResponse } from '../../models/apiResponse';

@Injectable({ providedIn: 'root' })
export class GalleryEffects {
  onGalleryLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadActions.success),
      exhaustMap(() =>
        this.iService.getImages().pipe(
          first(),
          map((res: any) => ({
            type: '[Gallery] loadsuccess',
            files: res?.files || [],
          }))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private iService: ImageHandlerService
  ) {}
}

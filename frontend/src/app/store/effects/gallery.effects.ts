import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UploadActions } from '../actions/upload.actions';
import { exhaustMap, first, map } from 'rxjs';
import { ImageHandlerService } from '../../services/image_handler.service';
import { GalleryActions } from '../actions/gallery.actions';

@Injectable({ providedIn: 'root' })
export class GalleryEffects {
  onGalleryFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GalleryActions.searchattempt),
      exhaustMap((body) =>
        this.iService.filterImages(body).pipe(
          first(),
          map((res: any) => ({
            type: '[Gallery] loadsuccess',
            files: res?.files || [],
          }))
        )
      )
    )
  );
  onGalleryLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadActions.success),
      exhaustMap(() =>
        this.iService.getImages().pipe(
          first(),
          map((res: any) => ({
            type: '[Gallery] loadsuccess',
            files: res?.result?.rows || [],
          }))
        )
      )
    )
  );
  onGalleryLoadWithParams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GalleryActions.loadattempt),
      exhaustMap((body) =>
        this.iService.getImages().pipe(
          first(),
          map((res: any) => ({
            type: '[Gallery] loadsuccess',
            files: res?.result?.rows || [],
            page: res?.result?.page || 0,
            perPage: res?.result?.perPage || 10,
            pages: res?.result?.totalPages || 0,
            count: res?.result?.count || 0,
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

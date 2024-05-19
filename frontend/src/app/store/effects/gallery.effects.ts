import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UploadActions } from '../actions/upload.actions';
import { exhaustMap, first, map } from 'rxjs';
import { ImageHandlerService } from '../../services/image_handler.service';
import { GalleryActions } from '../actions/gallery.actions';
import { PaginationData } from '../../models/paginationData';
import { FileInfo } from '../../models/fileInfo';

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
          first<any>(),
          map((res: { result: { files: FileInfo[] } & PaginationData }) => ({
            type: '[Gallery] loadsuccess',
            files: res?.result?.files || [],
            first: res?.result?.first || 0,
            rows: res?.result?.rows || 0,
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

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UploadActions } from '../actions/upload.actions';
import { exhaustMap, first, map, withLatestFrom } from 'rxjs';
import { ImageHandlerService } from '../../services/imageHandler.service';
import { GalleryActions } from '../actions/gallery.actions';
import { PaginationData } from '../../models/paginationData';
import { FileInfo } from '../../models/fileInfo';
import { Store } from '@ngrx/store';
import { getPaginationData } from '../selectors/gallery.selectors';

@Injectable({ providedIn: 'root' })
export class GalleryEffects {
  onGalleryLoadWithParams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        GalleryActions.changeParams,
        UploadActions.success,
        GalleryActions.changeFilter
      ),
      withLatestFrom(this.store.select(getPaginationData)),
      exhaustMap((res) => {
        console.log(res);
        return this.iService.getImages(res[1], res[1].filter).pipe(
          first<any>(),
          map((res: { files: FileInfo[] } & PaginationData) => ({
            type: '[Gallery] loadsuccess',
            files: res?.files || [],
            count: res?.count || 0,
          }))
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private iService: ImageHandlerService,
    private store: Store
  ) {}
}

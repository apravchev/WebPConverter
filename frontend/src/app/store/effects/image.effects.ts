import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ImageDeleteActions, ImageLoadActions } from '../actions/image.actions';
import { exhaustMap, first, map, pipe } from 'rxjs';
import { ImageHandlerService } from '../../services/imageHandler.service';

@Injectable({ providedIn: 'root' })
export class ImageEffects {
  onImageLoad$ = createEffect(() =>
    this.$actions.pipe(
      ofType(ImageLoadActions.attempt),
      exhaustMap((data) =>
        this.iService.loadImage(data.id).pipe(
          first(),
          map((res: any) => ({
            type: '[Image Load] success',
            image: res.image,
            children: res.children,
          }))
        )
      )
    )
  );
  onImageDelete$ = createEffect(() =>
    this.$actions.pipe(
      ofType(ImageDeleteActions.attempt),
      exhaustMap((data) =>
        this.iService.deleteImage(data.id).pipe(
          first(),
          map(() => ({
            type: '[Image Delete] success',
          }))
        )
      )
    )
  );
  constructor(
    private $actions: Actions,
    private iService: ImageHandlerService
  ) {}
}

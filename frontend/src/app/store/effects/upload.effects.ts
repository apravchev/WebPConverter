import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UploadActions } from '../actions/upload.actions';
import { ImageHandlerService } from '../../services/image_handler.service';
import { exhaustMap, first, map } from 'rxjs';
import { ApiResponse } from '../../models/api.response.model';

@Injectable({ providedIn: 'root' })
export class UploadEffects {
  onFilesUpload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadActions.attempt),
      exhaustMap((res) => {
        const data: FormData = new FormData();
        res.files.forEach((file) => data.append('files', file, file.name));
        return this.ihService.uploadFiles(data).pipe(
          first(),
          map((res: any) => ({ type: '[Upload] success', res }))
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private ihService: ImageHandlerService
  ) {}
}

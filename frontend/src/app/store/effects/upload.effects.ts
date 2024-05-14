import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UploadActions } from '../actions/upload.actions';
import { ImageHandlerService } from '../../services/image_handler.service';
import { Observable, catchError, exhaustMap, first, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadEffects {
  private uploadFiles(files: File[]): Observable<any> {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    return this.ihService
      .uploadFData(formData)
      .pipe(catchError((error) => of(error)));
  }
  onFilesUpload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadActions.attempt),
      exhaustMap((action) =>
        this.uploadFiles(action.files).pipe(
          map((res: any) => UploadActions.success({ res })),
          first()
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ihService: ImageHandlerService
  ) {}
}

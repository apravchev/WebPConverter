import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UploadState } from '../reducers/upload.reducer';

const UploadAccessor = createFeatureSelector<UploadState>('Upload');
export const toWebpFiles$ = createSelector(
  UploadAccessor,
  (state: UploadState) => state?.toWebp?.files || []
);

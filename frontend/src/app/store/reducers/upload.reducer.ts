import { createReducer, on } from '@ngrx/store';
import { FileInfo } from '../../models/fileInfo';
import { UploadActions } from '../actions/upload.actions';

class UploadStatus {
  files?: FileInfo[];
  pages = 0;
  current = 0;
  perPage = 0;
}
export class UploadState {
  toWebp?: UploadStatus;
  fromWebp?: UploadStatus;
}
const INITIAL_STATE: UploadState = {
  toWebp: {
    files: [],
    pages: 0,
    current: 0,
    perPage: 0,
  },
};
export const UPLOAD_REDUCER = createReducer(
  INITIAL_STATE,
  on(UploadActions.success, (state, res) => ({
    ...state,
    toWebp: {
      ...state.toWebp,
      files: res.res.files || [],
      current: 0,
      pages: 0,
      perPage: 0,
    },
  }))
);

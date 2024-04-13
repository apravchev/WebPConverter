import { createReducer } from '@ngrx/store';
import { UploadedFile } from '../../models/uploaded.file.model';
export class UploadState {
  toWebp?: {
    files: UploadedFile[];
    pages: number;
    current: number;
  };
}
const INITIAL_STATE: UploadState = {
  toWebp: {
    files: [],
    pages: 0,
    current: 0,
  },
};
export const UPLOAD_REDUCER = createReducer(INITIAL_STATE);

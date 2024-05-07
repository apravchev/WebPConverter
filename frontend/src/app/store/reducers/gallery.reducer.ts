import { createReducer } from '@ngrx/store';
import { FileFilter } from '../../models/fileFilter';
import { FileInfo } from '../../models/fileInfo';

export class GalleryState {
  files: FileInfo[] = [];
  loaded: boolean = false;
  page: number = 1;
  total: number = 1;
  count: number = 0;
  filter: FileFilter = {
    format: false,
    search: false,
    date: false,
    size: false,
  };
}
const initialState: GalleryState = {
  files: [],
  loaded: false,
  count: 0,
  page: 1,
  total: 1,
  filter: { format: false, search: false, date: false, size: false },
};
export const GalleryReducer = createReducer(initialState);

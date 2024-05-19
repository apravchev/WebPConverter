import { createReducer, on } from '@ngrx/store';
import { FileFilter } from '../../models/fileFilter';
import { FileInfo } from '../../models/fileInfo';
import { GalleryActions } from '../actions/gallery.actions';
import { PaginationData } from '../../models/paginationData';

export class GalleryState extends PaginationData {
  files: FileInfo[] = [];
  loaded: boolean = false;
  filter: FileFilter = {};
}
const initialState: GalleryState = {
  files: [],
  loaded: false,
  count: 0,
  first: 0,
  rows: 0,
  filter: {},
};
export const GalleryReducer = createReducer(
  initialState,
  on(GalleryActions.loadsuccess, (state, res) => ({
    ...state,
    files: res.files || [],
    loaded: true,
    count: res.count || state.count,
    first: res.first || state.first,
    rows: res.rows || state.rows,
  }))
);

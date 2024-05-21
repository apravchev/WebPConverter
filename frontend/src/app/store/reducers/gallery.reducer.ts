import { createReducer, on } from '@ngrx/store';
import { FileFilter } from '../../models/fileFilter';
import { FileInfo } from '../../models/fileInfo';
import { GalleryActions } from '../actions/gallery.actions';
import { PaginationData } from '../../models/paginationData';

export class GalleryState extends PaginationData {
  files: FileInfo[] = [];
  loading: boolean = false;
  filter: FileFilter = {};
}
const initialState: GalleryState = {
  files: [],
  loading: false,
  count: 0,
  first: 0,
  rows: 0,
  filter: {},
};
export const GalleryReducer = createReducer(
  initialState,
  on(GalleryActions.changeParams, (state, res) => ({
    ...state,
    loading: true,
    first: res.first,
    rows: res.rows,
  })),
  on(GalleryActions.loadsuccess, (state, res) => ({
    ...state,
    files: res.files || [],
    loading: false,
    count: res.count || state.count,
  }))
);

import { createReducer, on } from '@ngrx/store';
import { FileFilter } from '../../models/fileFilter';
import { FileInfo } from '../../models/fileInfo';
import { GalleryActions } from '../actions/gallery.actions';
import { PaginationData } from '../../models/paginationData';
import { Loadable } from './loadable.class';

export class GalleryState extends PaginationData implements Loadable {
  files: FileInfo[] = [];
  filter: FileFilter = {};
  loading: boolean = false;
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
  on(GalleryActions.changeFilter, (state, res) => ({
    ...state,
    loading: true,
    filter: {
      ...initialState.filter,
      ...res,
    },
  })),
  on(GalleryActions.loadsuccess, (state, res) => ({
    ...state,
    files: res.files || [],
    loading: false,
    count: res.count || state.count,
  }))
);

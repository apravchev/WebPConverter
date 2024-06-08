import { createReducer } from '@ngrx/store';
import { Loadable } from './loadable.class';
import { FileInfo } from '../../models/fileInfo';

export class ImageState implements Loadable {
  id: String = '';
  loading: boolean = false;
  image?: FileInfo;
  children?: FileInfo[] = [];
}
const initialState: ImageState = {
  id: '',
  loading: false,
  children: [],
};

export const ImageReducer = createReducer(initialState);

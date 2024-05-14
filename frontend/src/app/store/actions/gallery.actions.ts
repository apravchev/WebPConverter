import { createActionGroup, props } from '@ngrx/store';
import { FileInfo } from '../../models/fileInfo';

export const GalleryActions = createActionGroup({
  source: 'Gallery',
  events: {
    loadattempt: props<{ page?: number; perPage?: number }>(),
    loadsuccess: props<{
      page: number;
      total: number;
      count: number;
      files: FileInfo[];
    }>(),
  },
});

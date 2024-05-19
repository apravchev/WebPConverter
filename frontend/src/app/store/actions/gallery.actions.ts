import { createActionGroup, props } from '@ngrx/store';
import { FileInfo } from '../../models/fileInfo';
import { FileFilter } from '../../models/fileFilter';

export const GalleryActions = createActionGroup({
  source: 'Gallery',
  events: {
    searchattempt: props<FileFilter>(),
    loadattempt: props<{ page?: number; perPage?: number }>(),
    loadsuccess: props<{
      page: number;
      total: number;
      count: number;
      pages: number;
      files: FileInfo[];
    }>(),
  },
});

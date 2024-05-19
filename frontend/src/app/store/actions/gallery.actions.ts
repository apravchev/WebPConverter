import { createActionGroup, props } from '@ngrx/store';
import { FileInfo } from '../../models/fileInfo';
import { FileFilter } from '../../models/fileFilter';
import { PaginationData } from '../../models/paginationData';

export const GalleryActions = createActionGroup({
  source: 'Gallery',
  events: {
    loadattempt: props<
      {
        filter: FileFilter;
      } & PaginationData
    >(),
    loadsuccess: props<
      {
        files: FileInfo[];
      } & PaginationData
    >(),
  },
});

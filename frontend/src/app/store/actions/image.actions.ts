import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { FileInfo } from '../../models/fileInfo';
import { BasicActions } from './basic.actions';

export const ImageLoadActions = createActionGroup({
  source: 'Image Load',
  events: {
    ...BasicActions,
    attempt: props<{ id: String }>(),
    success: props<{ image: FileInfo; children: FileInfo[] }>(),
  },
});
export const ImageDeleteActions = createActionGroup({
  source: 'Image Delete',
  events: {
    ...BasicActions,
    attempt: props<{ id: String }>(),
    success: emptyProps(),
  },
});

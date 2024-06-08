import { createActionGroup, props } from '@ngrx/store';
import { ApiResponse } from '../../models/apiResponse';
import { BasicActions } from './basic.actions';

export const UploadActions = createActionGroup({
  source: 'Upload',
  events: {
    ...BasicActions,
    attempt: props<{ files: File[] }>(),
    success: props<{ res: ApiResponse }>(),
  },
});

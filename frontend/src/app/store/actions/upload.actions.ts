import { createActionGroup, props } from '@ngrx/store';
import { ApiResponse } from '../../models/apiResponse';

export const UploadActions = createActionGroup({
  source: 'Upload',
  events: {
    attempt: props<{ files: File[] }>(),
    success: props<{ res: ApiResponse }>(),
    error: props<{ res: ApiResponse }>(),
  },
});

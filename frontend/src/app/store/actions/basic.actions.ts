import { emptyProps, props } from '@ngrx/store';
import { ApiError } from '../../models/api/errorResponse';

export const BasicActions = {
  attempt: emptyProps(),
  error: props<ApiError>(),
};

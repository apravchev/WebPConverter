import { createActionGroup, props } from '@ngrx/store';
import { FileFormat } from '../../models/fileFormat';
import { BasicActions } from './basic.actions';

export const FormatsLoadActions = createActionGroup({
  source: 'Formats Load',
  events: {
    ...BasicActions,
    success: props<{ formats: FileFormat }>(),
  },
});

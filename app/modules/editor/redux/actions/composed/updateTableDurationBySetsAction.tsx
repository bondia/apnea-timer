import calculateSetsDuration from '../../../helpers/sets/calculateSetsDuration';
import { TableSetListType } from '../../../editorTypes';
import setEditorTableDuration, { SetEditorTableDurationAction } from '../setEditorTableDuration';

export type UpdateTableDurationBySetsTypeAction = (sets: TableSetListType) => SetEditorTableDurationAction;

export const updateTableDurationBySetsAction: UpdateTableDurationBySetsTypeAction = sets => {
  const duration = calculateSetsDuration(sets);
  return setEditorTableDuration(duration);
};

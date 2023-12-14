import calculateSetsDuration from '../../../helpers/sets/calculateSetsDuration';
import { TableSetListType } from '../../../editorTypes';
import setEditorTableDurationAction, { SetEditorTableDurationAction } from '../setEditorTableDurationAction';

export type UpdateTableDurationBySetsTypeAction = (sets: TableSetListType) => SetEditorTableDurationAction;

export const updateTableDurationBySetsAction: UpdateTableDurationBySetsTypeAction = sets => {
  const duration = calculateSetsDuration(sets);
  return setEditorTableDurationAction(duration);
};

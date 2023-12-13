import { AnyAction } from 'redux';
import calculateSetsDuration from '../../../helpers/sets/calculateSetsDuration';
import setEditorTableDuration from '../setEditorTableDuration';
import { TableSetListType } from '../../../editorTypes';

export type UpdateTableDurationBySetsTypeAction = (sets: TableSetListType) => AnyAction;

export const updateTableDurationBySetsAction: UpdateTableDurationBySetsTypeAction = sets => {
  const duration = calculateSetsDuration(sets);
  return setEditorTableDuration(duration);
};

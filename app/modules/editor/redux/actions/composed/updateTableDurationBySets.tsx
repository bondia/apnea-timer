import { AnyAction } from 'redux';
import calculateSetsDuration from '../../../helpers/sets/calculateSetsDuration';
import setEditorTableDuration from '../setEditorTableDuration';
import { TableSetListType } from '../../../editorTypes';

export type UpdateTableDurationBySetsType = (sets: TableSetListType) => AnyAction;

export const updateTableDurationBySets: UpdateTableDurationBySetsType = sets => {
  const duration = calculateSetsDuration(sets);
  return setEditorTableDuration(duration);
};

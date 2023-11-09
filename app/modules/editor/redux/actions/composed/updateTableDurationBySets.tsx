import { AnyAction } from 'redux';
import { CronoSetType } from '../../../../crono/redux/CronoTypes';
import calculateSetsDuration from '../../../pure/sets/calculateSetsDuration';
import setEditorTableDuration from '../setEditorTableDuration';

export type UpdateTableDurationBySetsType = (sets: CronoSetType[]) => AnyAction;

export const updateTableDurationBySets: UpdateTableDurationBySetsType = sets => {
  const duration = calculateSetsDuration(sets);
  return setEditorTableDuration(duration);
};

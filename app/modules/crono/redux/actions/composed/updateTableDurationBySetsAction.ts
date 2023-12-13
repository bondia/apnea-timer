import calculateSetsDuration from '../../../../editor/helpers/sets/calculateSetsDuration';
import { CronoSetListType } from '../../CronoTypes';
import setTableDurationAction, { SetTableDurationAction } from '../setTableDurationAction';

export type UpdateTableDurationBySetsTypeAction = (sets: CronoSetListType) => SetTableDurationAction;

export const updateTableDurationBySetsAction: UpdateTableDurationBySetsTypeAction = sets => {
  const duration = calculateSetsDuration(sets);
  return setTableDurationAction(duration);
};

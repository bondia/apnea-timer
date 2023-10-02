import calculateSetsDuration from '../../../editor/pure/sets/calculateSetsDuration';
import { CronoSetType } from '../CronoTypes';
import setTableDurationAction, { SetTableDurationAction } from '../actions/setTableDurationAction';

/**
 * Due some sets, calculate table duration and update it
 * @param  {[type]} sets [description]
 * @return {[type]}      [description]
 */
const updateTableDurationBySetsAction = (sets: CronoSetType[]): SetTableDurationAction => {
  const duration = calculateSetsDuration(sets);
  return setTableDurationAction(duration);
};

export default updateTableDurationBySetsAction;

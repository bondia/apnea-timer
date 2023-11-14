import { ImmutableJSType } from '../../../../redux/types';
import calculateSetsDuration from '../../../editor/helpers/sets/calculateSetsDuration';
import { CronoSetListType } from '../CronoTypes';
import setTableDurationAction, { SetTableDurationAction } from '../actions/setTableDurationAction';

/**
 * Due some sets, calculate table duration and update it
 * @param  {[type]} sets [description]
 * @return {[type]}      [description]
 */
const updateTableDurationBySetsAction = (sets: ImmutableJSType): SetTableDurationAction => {
  const duration = calculateSetsDuration(sets.toJS<CronoSetListType>());
  return setTableDurationAction(duration);
};

export default updateTableDurationBySetsAction;

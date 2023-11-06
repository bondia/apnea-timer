import Immutable from 'immutable';
import { TableTypeEnum } from '../enums';
import calculateSetsDuration from './sets/calculateSetsDuration';
import createEnduranceSets from './sets/createEnduranceSets';
import createInitialSets from './sets/createInitialSets';

/**
 * Table Creation
 * @param  Integer base
 * @param  String type
 * @return Immutable
 */
const createTable = (base: number, baseBreaks: number, type: TableTypeEnum, enduranceLaps: number) => {
  const sets =
    type === TableTypeEnum.TABLE_TYPE_ENDURANCE
      ? createEnduranceSets(base, baseBreaks, enduranceLaps)
      : createInitialSets(base, type);

  // skeleton
  let state = Immutable.fromJS({
    trainingTable: {
      base,
      baseBreaks,
      type,
      duration: 0,
      enduranceLaps,
    },
    sets,
  });

  // calculate table duration
  // TODO: Remove immutable js
  const duration = calculateSetsDuration(state.get('sets'));
  state = state.setIn(['trainingTable', 'duration'], duration);
  return state;
};

export default createTable;

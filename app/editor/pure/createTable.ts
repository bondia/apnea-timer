import Immutable from 'immutable';
import { TableType } from '../enums';
import calculateSetsDuration from './sets/calculateSetsDuration';
import createEnduranceSets from './sets/createEnduranceSets';
import createInitialSets from './sets/createInitialSets';
import { CronoSetType } from '../../crono/redux/CronoTypes';

function createEditorSkeleton(base = 1, baseBreaks = 1, type = TableType.TABLE_TYPE_CO2, enduranceLaps = null) {
  return Immutable.fromJS({
    trainingTable: {
      base,
      baseBreaks,
      type,
      duration: 0,
      enduranceLaps,
    },
    sets: [],
  });
}

/**
 * Table Creation
 * @param  Integer base
 * @param  String type
 * @return Immutable
 */
export default function createTable(base, baseBreaks, type, enduranceLaps) {
  // skeleton
  let state = createEditorSkeleton(base, baseBreaks, type, enduranceLaps);
  // sets
  const sets =
    type === TableType.TABLE_TYPE_ENDURANCE
      ? createEnduranceSets(base, baseBreaks, enduranceLaps)
      : createInitialSets(base, type);
  state = state.set('sets', sets);
  // calculate table duration
  const duration = calculateSetsDuration(sets as unknown as CronoSetType[]);
  state = state.setIn(['trainingTable', 'duration'], duration);
  return state;
}

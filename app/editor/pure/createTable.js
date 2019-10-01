import Immutable from 'immutable';

import * as enums from '../enums';

import createInitialSets from './sets/createInitialSets';
import createEnduranceSets from './sets/createEnduranceSets';
import calculateSetsDuration from './sets/calculateSetsDuration';

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
        type === enums.TABLE_TYPE_ENDURANCE
            ? createEnduranceSets(base, baseBreaks, enduranceLaps)
            : createInitialSets(base, type);
    state = state.set('sets', sets);
    // calculate table duration
    const duration = calculateSetsDuration(sets);
    state = state.setIn(['trainingTable', 'duration'], duration);
    return state;
}

function createEditorSkeleton(base = 1, baseBreaks = 1, type = enums.TABLE_TYPE_CO2, enduranceLaps = null) {
    return Immutable.fromJS({
        trainingTable: {
            base: base,
            baseBreaks: baseBreaks,
            type: type,
            duration: 0,
            enduranceLaps: enduranceLaps
        },
        sets: []
    });
}

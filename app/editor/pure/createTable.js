import Immutable from 'immutable';

import * as enums from '../enums';

import setTableDuration from '../utils/mutations/setTableDuration';
import createInitialSets from './sets/createInitialSets';

/**
 * Table Creation
 * @param  Integer base
 * @param  String type
 * @return Immutable
 */
export default function createTable(base, type) {
    // skeleton
    let state = createEditorSkeleton(base, type);
    // sets
    const sets = createInitialSets(base, type);
    state = state.set('sets', sets);
    // calculate table duration
    state = setTableDuration(state);
    return state;
}

function createEditorSkeleton(base=1, type=enums.TABLE_TYPE_CO2) {
    return Immutable.fromJS({
        trainingTable: {
            base: base,
            type: type,
            duration: 0
        },
        sets: []
    });
}

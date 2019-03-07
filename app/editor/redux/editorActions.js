import reduxActions from 'app/main/enums/reduxActions';
import * as enums from '../enums';

import createTable from '../pure/createTable';
import updateSetsForTableType from '../pure/sets/updateSetsForTableType';
import calculateSetsDuration from '../pure/sets/calculateSetsDuration';
import updateSetDurationForKey from '../pure/sets/updateSetDurationForKey';

/**
 * Create Endurance table
 */
export function createEnduranceTable(base, baseBreaks) {
    const newState = createTable(base, baseBreaks, enums.TABLE_TYPE_ENDURANCE);
    return setInitialState(newState);
}

/**
 * Change table type action
 */
export function changeTableType(base, tableType) {
    const newState = createTable(base, null, tableType);
    return setInitialState(newState);
}

/**
 * Change table base action
 */
export function changeTableBase(value) {
    return (dispatch, getState) => {
        const { editor } = getState();
        const baseBreaks = editor.getIn(['trainingTable', 'baseBreaks']);

        // change table base
        const base = value < 5 ? 5 : value;
        dispatch(setTableBase(base));

        // update sets with new base
        const tableType = editor.getIn(['trainingTable', 'type']);
        let sets = editor.get('sets');
        sets = updateSetsForTableType(sets, base, baseBreaks, tableType);
        dispatch(replaceSets(sets));

        // update table duration
        dispatch(updateTableDurationBySets(sets));
    };
}

/**
 * Change table base breaks action
 */
export function changeTableBaseBreaks(value) {
    return (dispatch, getState) => {
        const { editor } = getState();
        const base = editor.getIn(['trainingTable', 'base']);

        // change table base breaks
        const baseBreaks = value < 5 ? 5 : value;
        dispatch(setTableBaseBreak(baseBreaks));

        // update sets with new base
        const tableType = editor.getIn(['trainingTable', 'type']);
        let sets = editor.get('sets');
        sets = updateSetsForTableType(sets, base, baseBreaks, tableType);
        dispatch(replaceSets(sets));

        // update table duration
        dispatch(updateTableDurationBySets(sets));
    };
}

/**
 * Changing sets times
 */
export function increaseTimeItem(key, amount) {
    return changeTimeItem(key, amount);
}

export function decreaseTimeItem(key, amount) {
    return changeTimeItem(key, -amount);
}

function changeTimeItem(key, amount) {
    return (dispatch, getState) => {
        const { editor } = getState();

        // find item
        const item = editor.getIn(['sets']).find(i => i.get('pos') === key);
        if (!item) {
            return;
        }

        // decide new duration
        const duration = amount + item.get('duration');
        const tableType = editor.getIn(['trainingTable', 'type']);
        const sets = updateSetDurationForKey(editor.get('sets'), tableType, key, duration);
        dispatch(replaceSets(sets));

        // update table duration
        dispatch(updateTableDurationBySets(sets));
    };
}

/**
 * Due some sets, calculatetable duration and update it
 * @param  {[type]} sets [description]
 * @return {[type]}      [description]
 */
function updateTableDurationBySets(sets) {
    const duration = calculateSetsDuration(sets);
    return setTableDuration(duration);
}

/** BASIC ACTIONS */

function setInitialState(state) {
    return { type: reduxActions.EDITOR_SET_INITIAL_STATE, state };
}

function setTableBase(base) {
    return { type: reduxActions.EDITOR_SET_TABLE_BASE, base };
}

function setTableBaseBreak(baseBreaks) {
    return { type: reduxActions.EDITOR_SET_TABLE_BASE_BREAKS, baseBreaks };
}

function setTableDuration(duration) {
    return { type: reduxActions.EDITOR_SET_TABLE_DURATION, duration };
}

function replaceSets(sets) {
    return { type: reduxActions.EDITOR_REPLACE_SETS, sets };
}

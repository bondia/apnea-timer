import reduxActions from 'app/main/enums/reduxActions';

import createTable from '../pure/createTable';
import updateSetsForTableType from '../pure/sets/updateSetsForTableType';
import calculateSetsDuration from '../pure/sets/calculateSetsDuration';
import updateSetDurationForKey from '../pure/sets/updateSetDurationForKey';

/**
 * Change table type action
 */
export function changeTableType(base, tableType) {
    const newState = createTable(base, tableType);
    return setInitialState(newState);
}

/**
 * Change table base action
 */
export function changeTableBase(value) {
    return (dispatch, getState) => {
        const { editor } = getState();

        // change table base
        const base = value < 5 ? 5 : value;
        dispatch(setTableBase(value));

        // update sets with new base
        const tableType = editor.getIn(['trainingTable', 'type']);
        let sets = editor.get('sets');
        sets = updateSetsForTableType(sets, base, tableType);
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

function setTableDuration(duration) {
    return { type: reduxActions.EDITOR_SET_TABLE_DURATION, duration };
}

function replaceSets(sets) {
    return { type: reduxActions.EDITOR_REPLACE_SETS, sets };
}

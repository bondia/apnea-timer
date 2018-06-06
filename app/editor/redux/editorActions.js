import reduxActions from 'app/main/enums/reduxActions';

import updateSetsForTableType from '../pure/sets/updateSetsForTableType';
import { setTableType, updateDurationAtKey, getRemainingTableDuration } from '../utils/mutations';

/** LOGICAL ACTIONS */

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

        // recalculate duration
        const duration = getRemainingTableDuration(sets);
        dispatch(setTableDuration(duration));
    };
}

/**
 * Change table type action
 * TODO: Refactor that
 */
export function changeTableType(base, tableType) {
    return (dispatch, getState) => {
        const { editor } = getState();
        const newState = setTableType(editor, base, tableType);
        dispatch(replaceState(newState));
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

// TODO: Refactor that
function changeTimeItem(key, amount) {
    return (dispatch, getState) => {
        const { editor } = getState();
        const newState = updateDurationAtKey(editor, key, amount);
        dispatch(replaceState(newState));
    };
}

/** BASIC ACTIONS */

function setTableBase(base) {
    return { type: reduxActions.EDITOR_SET_TABLE_BASE, base };
}

function setTableDuration(duration) {
    return { type: reduxActions.EDITOR_SET_TABLE_DURATION, duration };
}

function replaceSets(sets) {
    return { type: reduxActions.EDITOR_REPLACE_SETS, sets };
}

// TODO: remove that
function replaceState(state) {
    return { type: reduxActions.EDITOR_REPLACE_STATE, state };
}

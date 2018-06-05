import reduxActions from 'app/main/enums/reduxActions';
import * as enums from '../enums';
import { setTableType, updateDurationAtKey, getRemainingTableDuration } from '../utils/mutations';

/**
 * Change table base action
 * TODO: Refactor that
 */
function changeTableBase(value) {
    return (dispatch, getState) => {
        const { editor } = getState();
        // decide base and set it
        const base = value < 5 ? 5 : value;
        dispatch(setTableBase(value));
        // update sets with new base
        const tableType = editor.getIn(['trainingTable', 'type']);
        let sets = editor.get('sets');
        // update sets for co2
        if (enums.TABLE_TYPE_CO2 === tableType) {
            sets = sets.map(s => (s.get('type') == enums.SET_TYPE_HOLD ? s.set('duration', base) : s));
        }
        // update sets for o2
        if (enums.TABLE_TYPE_O2 === tableType) {
            sets = sets.map(s => (s.get('type') == enums.SET_TYPE_PREPARE ? s.set('duration', base) : s));
        }
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
function changeTableType(base, tableType) {
    return (dispatch, getState) => {
        const { editor } = getState();
        const newState = setTableType(editor, base, tableType);
        dispatch(replaceState(newState));
    };
}

/**
 * Changing sets times
 */
function increaseTimeItem(key, amount) {
    return changeTimeItem(key, amount);
}

function decreaseTimeItem(key, amount) {
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

export { changeTableBase, changeTableType, increaseTimeItem, decreaseTimeItem };

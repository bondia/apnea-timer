import reduxActions from 'app/main/enums/reduxActions';

import editorToCrono from '../pure/editorToCrono';
import calculateSetsDuration from 'app/editor/pure/sets/calculateSetsDuration';

export function initTable(data) {
    return dispatch => {
        // convert traning table to a crono table
        const crono = editorToCrono(data);
        dispatch(setInitialState(crono));
        // make sure all durations are correctly calculated
        const sets = crono.get('sets');
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
    return { type: reduxActions.CRONO_SET_INITIAL_STATE, state };
}

function setTableDuration(duration) {
    return { type: reduxActions.CRONO_SET_TABLE_DURATION, duration };
}

/** TODO REFACTORING */

let timer = null;
export function startCrono(mode) {
    return dispatch => {
        clearInterval(timer);
        dispatch(setCronoMode(mode));
        timer = setInterval(() => dispatch(handleTick()), 1000);
    };
}

export function finishCrono() {
    clearInterval(timer);
    timer = null;
    return { type: reduxActions.CRONO_FINISH };
}

function setCronoMode(mode) {
    return { type: reduxActions.CRONO_SET_MODE, mode };
}

function handleTick() {
    return { type: reduxActions.CRONO_TICK_UP };
}

export function skipSet(key) {
    return { type: reduxActions.CRONO_SET_SKIP, key };
}

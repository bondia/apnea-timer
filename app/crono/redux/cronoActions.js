import reduxActions from 'app/main/enums/reduxActions';
import * as enums from 'app/editor/enums';

import editorToCrono from '../pure/editorToCrono';
import decideCurrentSet from '../pure/decideCurrentSet';
import findRunningSet from '../pure/findRunningSet';
import calculateAverageContractions from '../pure/calculateAverageContractions';
import calculateSetsDuration from 'app/editor/pure/sets/calculateSetsDuration';
/**
 * Prepare initial crono
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
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
 * Start crono
 * @param  {[type]} mode [description]
 * @return {[type]}      [description]
 */
let timer = null;
export function startCrono(mode) {
    return dispatch => {
        clearInterval(timer);
        dispatch(setCronoMode(mode));
        timer = setInterval(() => dispatch(handleTick()), 1000);
    };
}

/**
 * Skips a single set
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export function skipSet(key) {
    return (dispatch, getState) => {
        // clear interval
        clearInterval(timer);

        // disable set by key
        let { crono } = getState();
        crono = crono.updateIn(['sets'], sets =>
            sets.map(s => {
                return s.get('pos') === key ? s.setIn(['running', 'mode'], enums.SET_MODE_SKIPED) : s;
            })
        );

        // activate new set
        const newCrono = decideCurrentSet(crono);
        dispatch(setInitialState(newCrono));

        // recalculate table duration
        dispatch(updateTableDurationBySets(crono.get('sets')));

        // start interval again
        const found = crono.get('sets').filter(s => s.getIn(['running', 'mode']) === enums.SET_MODE_INITIAL);
        if (found.size > 0) {
            timer = setInterval(() => dispatch(handleTick()), 1000);
        }
    };
}

/**
 * Track first contraction
 * @return {[type]} [description]
 */
export function trackContraction() {
    return (dispatch, getState) => {
        const { crono } = getState();
        let currentSet = findRunningSet(crono.get('sets'));
        const duration = currentSet.get('duration');
        const countdown = currentSet.getIn(['running', 'countdown']);
        currentSet = currentSet.setIn(['running', 'contraction'], duration - countdown);
        dispatch(replaceSet(currentSet));
        dispatch(updateContractionsAverage());
    };
}

function updateContractionsAverage() {
    return (dispatch, getState) => {
        const { crono } = getState();
        const sets = crono.get('sets');
        const contractions = calculateAverageContractions(sets);
        dispatch(setContractions(contractions));
    };
}

/**
 * Handle clock tics
 * @return {[type]} [description]
 */
function handleTick() {
    return (dispatch, getState) => {
        let { crono } = getState();
        // add clock tick
        const clock = crono.getIn(['running', 'clock']) + 1;
        crono = crono.setIn(['running', 'clock'], clock);

        // add current set tick
        const step = crono.getIn(['running', 'step']);
        const time = crono.getIn(['sets', step, 'running', 'countdown']) - 1;
        crono = crono.setIn(['sets', step, 'running', 'countdown'], time);

        // decide current set
        crono = decideCurrentSet(crono);
        if (crono.getIn(['running', 'step']) < 0) {
            clearInterval(timer);
            timer = null;
        }
        dispatch(setInitialState(crono));

        // recalculate table duration
        dispatch(updateTableDurationBySets(crono.get('sets')));
    };
}

/**
 * Clean state
 */
export function clearCrono() {
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    }
    return setInitialState(null);
}

/**
 * Due some sets, calculate table duration and update it
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

function setCronoMode(mode) {
    return { type: reduxActions.CRONO_SET_RUNNING_MODE, mode };
}

function setTableDuration(duration) {
    return { type: reduxActions.CRONO_SET_RUNNING_TABLE_DURATION, duration };
}

function setContractions(contractions) {
    return { type: reduxActions.CRONO_SET_RUNNING_CONTRACTIONS, contractions };
}

function replaceSet(set) {
    return { type: reduxActions.CRONO_REPLACE_SET, set };
}

function replaceSets(sets) {
    return { type: reduxActions.CRONO_REPLACE_SETS, sets };
}

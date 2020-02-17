import reduxActions from '../../main/enums/reduxActions';
import * as enums from '../../editor/enums';

import generateTimestamp from '../../common/utils/time/generateTimestamp';
import editorToCrono from '../pure/editorToCrono';
import decideCurrentSet from '../pure/decideCurrentSet';
import findRunningSet from '../pure/findRunningSet';
import calculateAverageContractions from '../pure/calculateAverageContractions';
import calculateSetsDuration from '../../editor/pure/sets/calculateSetsDuration';
import { InitTableType, StartCronoType, SkipSetType, TrackContractionType, ClearCronoType } from './CronoActionsTypes';

/**
 * Prepare initial crono
 */
export const initTable: InitTableType = (data: object) => {
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
 */
let timer = null;
const timerRefresh = 200;
export const startCrono: StartCronoType = (mode: string) => {
    return dispatch => {
        clearInterval(timer);
        dispatch(setCronoStartTimestamp(generateTimestamp()));
        dispatch(setCronoMode(mode));
        timer = setInterval(() => dispatch(handleTick()), timerRefresh);
    };
}

/**
 * Skips a single set
 */
export const skipSet: SkipSetType = (key: number) => {
    return (dispatch, getState) => {
        // current timestamp
        const currentTimestamp = generateTimestamp();

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
        const newCrono = decideCurrentSet(crono, currentTimestamp);
        dispatch(setInitialState(newCrono));

        // recalculate table duration
        dispatch(updateTableDurationBySets(crono.get('sets')));

        // check if there are some sets still in initial mode
        const found = crono.get('sets').filter(s => s.getIn(['running', 'mode']) === enums.SET_MODE_INITIAL);
        if (found.size <= 0) {
            dispatch(setCronoMode(enums.CRONO_MODE_FINISHED));
            return;
        }

        timer = setInterval(() => dispatch(handleTick()), timerRefresh);
    };
}

/**
 * Track first contraction
 */
 export const trackContraction: TrackContractionType = () => {
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
    return (dispatch: any, getState: any) => {
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

        // current timestamp
        const currentTimestamp = generateTimestamp();

        // add clock tick
        const startTimestamp = crono.getIn(['running', 'startTimestamp']);
        const clock = Math.round((currentTimestamp - startTimestamp) / 1000);
        crono = crono.setIn(['running', 'clock'], clock);

        // add current set tick
        const step = crono.getIn(['running', 'step']);
        let currentSet = crono.getIn(['sets', step]);
        let setRunning = currentSet.get('running');

        // make sure set has a start timestamp
        if (setRunning.get('startTimestamp') === null) {
            setRunning = setRunning.set('startTimestamp', startTimestamp);
        }

        // calculate countdown
        const setPlannedDuration = currentSet.get('duration');
        const setStartTimestamp = setRunning.get('startTimestamp');
        const setTimeSpent = Math.round((currentTimestamp - setStartTimestamp) / 1000);
        setRunning = setRunning.set('countdown', setPlannedDuration - setTimeSpent);

        // replace set
        currentSet = currentSet.set('running', setRunning);
        crono = crono.setIn(['sets', step], currentSet);

        // decide current set
        crono = decideCurrentSet(crono, currentTimestamp);
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
export const clearCrono: ClearCronoType = () => {
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
function updateTableDurationBySets(sets: object[]): object {
    const duration = calculateSetsDuration(sets);
    return setTableDuration(duration);
}

/** BASIC ACTIONS */

function setInitialState(state: object): object {
    return { type: reduxActions.CRONO_SET_INITIAL_STATE, state };
}

function setCronoStartTimestamp(startTimestamp: number): object {
    return { type: reduxActions.CRONO_SET_START_TIMESTAMP, startTimestamp };
}

function setCronoMode(mode: string): object {
    return { type: reduxActions.CRONO_SET_RUNNING_MODE, mode };
}

function setTableDuration(duration: number): object {
    return { type: reduxActions.CRONO_SET_RUNNING_TABLE_DURATION, duration };
}

function setContractions(contractions: number): object {
    return { type: reduxActions.CRONO_SET_RUNNING_CONTRACTIONS, contractions };
}

function replaceSet(set: object): object {
    return { type: reduxActions.CRONO_REPLACE_SET, set };
}

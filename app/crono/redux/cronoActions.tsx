import Immutable from 'immutable';
import generateTimestamp from '../../common/utils/time/generateTimestamp';
import { CronoMode, SetMode } from '../../editor/enums';
import { StoreThunkAction } from '../../main/redux/types';
import decideCurrentSet from '../pure/decideCurrentSet';
import setCronoModeAction from './actions/setCronoModeAction';
import setCronoStartTimestampAction from './actions/setCronoStartTimestampAction';
import setInitialStateAction from './actions/setInitialStateAction';
import initTableAction from './creators/initTableAction';
import trackContractionAction from './creators/trackContractionAction';
import updateTableDurationBySetsAction from './creators/updateTableDurationBySetsAction';
import { CronoActionsTypes, CronoStateType } from './cronoTypes';

/**
 * Start crono
 */
let timer = null;
const timerRefresh = 200;

export type StartCronoType = (mode: CronoMode) => StoreThunkAction;

const startCrono: StartCronoType = (mode: CronoMode) => {
  return (dispatch) => {
    clearInterval(timer);
    dispatch(setCronoStartTimestampAction(generateTimestamp()));
    dispatch(setCronoModeAction(mode));
    timer = setInterval(() => dispatch(handleTick()), timerRefresh);
  };
};

/**
 * Skips a single set
 */
export type SkipSetType = (key: number) => StoreThunkAction;

const skipSet: SkipSetType = (key: number) => {
  return (dispatch, getState) => {
    // current timestamp
    const currentTimestamp = generateTimestamp();

    // clear interval
    clearInterval(timer);

    // disable set by key
    let { crono } = getState();
    crono = crono.updateIn(['sets'], (sets) =>
      sets.map((s) => {
        return s.get('pos') === key
          ? s.setIn(['running', 'mode'], SetMode.SET_MODE_SKIPED)
          : s;
      })
    );

    // activate new set
    const cronoState: CronoStateType = crono.toJS();
    const newCrono = decideCurrentSet(cronoState, currentTimestamp);
    const newCronoImmutable = Immutable.fromJS(newCrono);

    dispatch(setInitialStateAction(newCronoImmutable));

    // recalculate table duration
    dispatch(updateTableDurationBySetsAction(crono.get('sets')));

    // check if there are some sets still in initial mode
    const found = crono
      .get('sets')
      .filter((s) => s.getIn(['running', 'mode']) === SetMode.SET_MODE_INITIAL);
    if (found.size <= 0) {
      dispatch(setCronoModeAction(CronoMode.CRONO_MODE_FINISHED));
      return;
    }

    timer = setInterval(() => dispatch(handleTick()), timerRefresh);
  };
};

/**
 * Handle clock tics
 * @return {[type]} [description]
 */
const handleTick = (): StoreThunkAction => {
  return (dispatch, getState): void => {
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
    const setTimeSpent = Math.round(
      (currentTimestamp - setStartTimestamp) / 1000
    );
    setRunning = setRunning.set('countdown', setPlannedDuration - setTimeSpent);

    // replace set
    currentSet = currentSet.set('running', setRunning);
    crono = crono.setIn(['sets', step], currentSet);

    // decide current set
    const cronoState: CronoStateType = crono.toJS();
    const newCrono = decideCurrentSet(cronoState, currentTimestamp);
    crono = Immutable.fromJS(newCrono);

    if (crono.getIn(['running', 'step']) < 0) {
      clearInterval(timer);
      timer = null;
    }
    dispatch(setInitialStateAction(crono));

    // recalculate table duration
    dispatch(updateTableDurationBySetsAction(crono.get('sets')));
  };
};

/**
 * Clean state
 */
export type ClearCronoType = () => object;

const clearCrono: ClearCronoType = () => {
  if (timer != null) {
    clearInterval(timer);
    timer = null;
  }
  return setInitialStateAction(null);
};

export const cronoActions: CronoActionsTypes = {
  initTable: initTableAction,
  startCrono,
  skipSet,
  trackContraction: trackContractionAction,
  clearCrono
};

import Immutable from 'immutable';
import { Action } from 'redux';
import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { ImmutableJSType, StoreThunkAction } from '../../../redux/types';
import generateTimestamp from '../../../utils/time/generateTimestamp';
import decideCurrentSet from '../pure/decideCurrentSet';
import setCronoModeAction from './actions/setCronoModeAction';
import setCronoStartTimestampAction from './actions/setCronoStartTimestampAction';
import setInitialStateAction from './actions/setInitialStateAction';
import initTableAction from './creators/initTableAction';
import trackContractionAction from './creators/trackContractionAction';
import updateTableDurationBySetsAction from './creators/updateTableDurationBySetsAction';
import { CronoActionsTypes, CronoStateType } from './CronoTypes';
import { startTimer, stopTimer } from '../timer';
import handleTick from './actions/handleTick';

const startTimerDispatch = () => dispatch => startTimer(() => dispatch(handleTick()));

/**
 * Start crono
 */
export type StartCronoType = (mode: CronoModeEnum) => StoreThunkAction;

const startCrono: StartCronoType = (mode: CronoModeEnum) => {
  return dispatch => {
    stopTimer();
    dispatch(setCronoStartTimestampAction(generateTimestamp()));
    dispatch(setCronoModeAction(mode));
    dispatch(startTimerDispatch());
  };
};

/**
 * Skips a single set
 */

export const skipSet = (key: number): StoreThunkAction => {
  return (dispatch, getState) => {
    // current timestamp
    const currentTimestamp = generateTimestamp();

    stopTimer();

    // disable set by key
    let { crono } = getState();
    crono = crono.updateIn<ImmutableJSType>(['sets'], sets =>
      sets.map(s => {
        if (s.get('pos') === key) {
          return s
            .setIn<ImmutableJSType>(['running', 'mode'], SetModeEnum.SET_MODE_SKIPED)
            .setIn<ImmutableJSType>(['running', 'endTimestamp'], currentTimestamp);
        }
        return s;
      }),
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
      .get<ImmutableJSType>('sets')
      .filter<ImmutableJSType>(s => s.getIn(['running', 'mode']) === SetModeEnum.SET_MODE_INITIAL);
    if (found.size <= 0) {
      dispatch(setCronoModeAction(CronoModeEnum.CRONO_MODE_FINISHED));
      return;
    }
    dispatch(startTimerDispatch());
  };
};

export type SkipSetType = typeof skipSet;

/**
 * Clean state
 */
const clearCrono = (): Action => {
  stopTimer();
  return setInitialStateAction(null);
};

export const cronoActions: CronoActionsTypes = {
  initTable: initTableAction,
  startCrono,
  skipSet,
  trackContraction: trackContractionAction,
  clearCrono,
};

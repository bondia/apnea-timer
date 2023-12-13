import Immutable from 'immutable';
import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { ImmutableJSType, StoreThunkAction } from '../../../redux/types';
import generateTimestamp from '../../../utils/time/generateTimestamp';
import decideCurrentSet from '../helpers/decideCurrentSet';
import setCronoModeAction from './actions/setCronoModeAction';
import setCronoStartTimestampAction from './actions/setCronoStartTimestampAction';
import setInitialStateAction from './actions/setInitialStateAction';
import updateTableDurationBySetsAction from './actions/composed/updateTableDurationBySetsAction';
import { CronoStateType } from './CronoTypes';
import { startTimer, stopTimer } from '../cronoTimer';
import handleTick from './actions/composed/handleTick';

/**
 * Start crono
 */
export type StartCronoType = (mode: CronoModeEnum) => StoreThunkAction;

export const startCrono: StartCronoType = (mode: CronoModeEnum) => {
  return dispatch => {
    stopTimer();
    dispatch(setCronoStartTimestampAction(generateTimestamp()));
    dispatch(setCronoModeAction(mode));
    startTimer(() => dispatch(handleTick()));
  };
};

/**
 * Skips a single set
 */
export type SkipSetType = (key: number) => StoreThunkAction;

export const skipSet: SkipSetType = (key: number) => (dispatch, getState) => {
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
  dispatch(updateTableDurationBySetsAction());

  // check if there are some sets still in initial mode
  const found = crono
    .get<ImmutableJSType>('sets')
    .filter<ImmutableJSType>(s => s.getIn(['running', 'mode']) === SetModeEnum.SET_MODE_INITIAL);
  if (found.size <= 0) {
    dispatch(setCronoModeAction(CronoModeEnum.CRONO_MODE_FINISHED));
    return;
  }
  startTimer(() => dispatch(handleTick()));
};

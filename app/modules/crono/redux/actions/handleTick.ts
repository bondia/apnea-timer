import Immutable from 'immutable';
import { ImmutableJSType, StoreThunkAction } from '../../../../redux/types';
import generateTimestamp from '../../../../utils/time/generateTimestamp';
import { CronoStateType } from '../CronoTypes';
import decideCurrentSet from '../../pure/decideCurrentSet';
import setInitialStateAction from './setInitialStateAction';
import updateTableDurationBySetsAction from '../creators/updateTableDurationBySetsAction';
import { stopTimer } from '../../timer';

const handleTick = (): StoreThunkAction => {
  return (dispatch, getState): void => {
    let { crono } = getState();

    // current timestamp
    const currentTimestamp = generateTimestamp();

    // add clock tick
    const startTimestamp = crono.getIn<number>(['running', 'startTimestamp']);
    const clock = Math.round((currentTimestamp - startTimestamp) / 1000);
    crono = crono.setIn(['running', 'clock'], clock);

    // add current set tick
    const step = crono.getIn<number>(['running', 'step']);
    let currentSet = crono.getIn<ImmutableJSType>(['sets', step]);
    let setRunning = currentSet.get<ImmutableJSType>('running');

    // make sure set has a start timestamp
    if (setRunning.get<number>('startTimestamp') === null) {
      setRunning = setRunning.set<ImmutableJSType>('startTimestamp', startTimestamp);
    }

    // calculate countdown
    const setPlannedDuration = currentSet.get<number>('duration');
    const setStartTimestamp = setRunning.get<number>('startTimestamp');
    const setTimeSpent = Math.round((currentTimestamp - setStartTimestamp) / 1000);
    setRunning = setRunning.set('countdown', setPlannedDuration - setTimeSpent);

    // replace set
    currentSet = currentSet.set('running', setRunning);
    crono = crono.setIn(['sets', step], currentSet);

    // decide current set
    const cronoState: CronoStateType = crono.toJS();
    const newCrono = decideCurrentSet(cronoState, currentTimestamp);
    crono = Immutable.fromJS(newCrono);

    if (crono.getIn<number>(['running', 'step']) < 0) {
      stopTimer();
    }
    dispatch(setInitialStateAction(crono));

    // recalculate table duration
    dispatch(updateTableDurationBySetsAction(crono.get('sets')));
  };
};

export default handleTick;

import Immutable from 'immutable';
import { StoreThunkAction } from '../../../../../redux/types';
import generateTimestamp from '../../../../../utils/time/generateTimestamp';
import { CronoStateType } from '../../CronoTypes';
import decideCurrentSet from '../../../helpers/decideCurrentSet';
import setInitialStateAction from '../setInitialStateAction';
import updateTableDurationBySetsAction from './updateTableDurationBySetsAction';
import { stopTimer } from '../../../timer';

export type HandleTickAction = () => StoreThunkAction;

// remove immutable js
const handleTick: HandleTickAction = () => {
  return (dispatch, getState): void => {
    const { crono: cronoImmutable } = getState();
    const crono = cronoImmutable.toJS<CronoStateType>();

    const currentTimestamp = generateTimestamp();

    const {
      running: { startTimestamp: cronoStartTimestamp, step },
      sets,
    } = crono;

    const newSets = sets.map(set => {
      const { pos, running, duration } = set;
      if (pos !== step) {
        return set;
      }

      const { startTimestamp } = running;
      const setStartTimestamp = startTimestamp === null ? cronoStartTimestamp : startTimestamp;

      // current timestamp
      const setTimeSpent = Math.round((currentTimestamp - setStartTimestamp) / 1000);

      return {
        ...set,
        running: {
          ...set.running,
          // make sure set has a start timestamp
          // TODO: Why the cronoStartTimestamp?
          startTimestamp: setStartTimestamp,
          // calculate countdown
          countdown: duration - setTimeSpent,
        },
      };
    });

    // new crono
    const cronoState: CronoStateType = {
      ...crono,
      sets: newSets,
      running: {
        ...crono.running,
        // add clock tick
        clock: Math.round((currentTimestamp - cronoStartTimestamp) / 1000),
      },
    };

    // decide current set
    const newCrono = decideCurrentSet(cronoState, currentTimestamp);
    if (newCrono.running.step < 0) {
      stopTimer();
    }

    dispatch(setInitialStateAction(Immutable.fromJS(newCrono)));

    // recalculate table duration
    dispatch(updateTableDurationBySetsAction());
  };
};

export default handleTick;

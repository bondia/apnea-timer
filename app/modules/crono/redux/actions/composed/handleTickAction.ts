import { StoreThunkAction } from '../../../../../redux/types';
import generateTimestamp from '../../../../../utils/time/generateTimestamp';
import { CronoStateType } from '../../../cronoTypes';
import decideCurrentSet from '../../../helpers/decideCurrentSet';
import setInitialStateAction from '../setInitialStateAction';
import updateTableDurationBySetsAction from './updateTableDurationBySetsAction';
import { stopTimer } from '../../../helpers/cronoTimer';

export type HandleTickAction = () => StoreThunkAction;

const handleTick: HandleTickAction = () => {
  return (dispatch, getState): void => {
    const { crono } = getState();

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
        clock: (currentTimestamp - cronoStartTimestamp) / 1000,
      },
    };

    // decide current set
    const newCrono = decideCurrentSet(cronoState, currentTimestamp);
    if (newCrono.running.step < 0) {
      stopTimer();
    }

    dispatch(setInitialStateAction(newCrono));
    dispatch(updateTableDurationBySetsAction());
  };
};

export default handleTick;

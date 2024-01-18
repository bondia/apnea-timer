import { now } from 'lodash';
import { StoreThunkAction } from '../../../../../redux/types';
import { CronoModeEnum } from '../../../../editor/enums';
import { CronoStateType } from '../../../cronoTypes';
import { stopTimer } from '../../../helpers/cronoTimer';
import decideCurrentSet from '../../../helpers/decideCurrentSet';
import setInitialStateAction from '../setInitialStateAction';
import handleFinishTableAction from './handleFinishTableAction';
import updateTableDurationBySetsAction from './updateTableDurationBySetsAction';

type HandleTickAction = () => StoreThunkAction;

const handleTick: HandleTickAction = () => {
  return (dispatch, getState): void => {
    const { crono } = getState();
    if (!crono) {
      return;
    }

    if (crono.running.mode === CronoModeEnum.CRONO_MODE_FINISHED) {
      stopTimer();
      return;
    }

    const currentTimestamp = now();

    const {
      running: { startTimestamp: cronoStartTimestamp, step },
      sets,
    } = crono;

    const newSets = sets.map(set => {
      const {
        pos,
        running: {
          startTimestamp,
          targetEndTimestamp,
          originalDurationMiliseconds,
        },
        duration,
      } = set;
      if (pos !== step || !cronoStartTimestamp) {
        return set;
      }

      const setStartTimestamp =
        startTimestamp === -1 && cronoStartTimestamp
          ? cronoStartTimestamp
          : startTimestamp;

      const setTargetEnd =
        targetEndTimestamp === -1
          ? setStartTimestamp + originalDurationMiliseconds
          : targetEndTimestamp;

      // current timestamp
      const setTimeSpent = Math.round(
        (currentTimestamp - setStartTimestamp) / 1000,
      );

      return {
        ...set,
        running: {
          ...set.running,
          // make sure set has a start timestamp
          startTimestamp: setStartTimestamp,
          targetEndTimestamp: setTargetEnd,
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
        clock: !cronoStartTimestamp
          ? -1
          : (currentTimestamp - cronoStartTimestamp) / 1000,
      },
    };

    const newCrono = decideCurrentSet(cronoState, currentTimestamp);
    dispatch(setInitialStateAction(newCrono));
    dispatch(updateTableDurationBySetsAction());
    dispatch(handleFinishTableAction());
  };
};

export default handleTick;

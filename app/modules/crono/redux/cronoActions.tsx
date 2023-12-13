import Immutable from 'immutable';
import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { ImmutableJSType, StoreThunkAction } from '../../../redux/types';
import generateTimestamp from '../../../utils/time/generateTimestamp';
import decideCurrentSet from '../helpers/decideCurrentSet';
import setCronoModeAction from './actions/setCronoModeAction';
import setInitialStateAction from './actions/setInitialStateAction';
import updateTableDurationBySetsAction from './actions/composed/updateTableDurationBySetsAction';
import { CronoSetListType, CronoSetType, CronoStateType } from './CronoTypes';

/**
 * Skips a single set
 */
export type SkipSetType = (key: number) => StoreThunkAction;

export const skipSet: SkipSetType = (key: number) => (dispatch, getState) => {
  const crono = getState().crono.toJS<CronoStateType>();
  const { sets } = crono;

  // current timestamp
  const currentTimestamp = generateTimestamp();

  // skip set
  const newSets: CronoSetListType = sets.map<CronoSetType>(set => {
    const { pos } = set;
    if (pos !== key) {
      return set;
    }
    return {
      ...set,
      running: {
        ...set.running,
        mode: SetModeEnum.SET_MODE_SKIPED,
        endTimestamp: currentTimestamp,
      },
    };
  });

  const cronoState = {
    ...crono,
    sets: newSets,
  };

  // activate new set
  const newCrono = decideCurrentSet(cronoState, currentTimestamp);
  const newCronoImmutable = Immutable.fromJS(newCrono);

  dispatch(setInitialStateAction(newCronoImmutable));

  // recalculate table duration
  dispatch(updateTableDurationBySetsAction());

  // check if there are some sets still in initial mode
  const found = newCrono.sets.filter(
    ({ running: { mode } }) => [SetModeEnum.SET_MODE_INITIAL, SetModeEnum.SET_MODE_RUNNING].indexOf(mode) !== -1,
  );
  if (found.length === 0) {
    dispatch(setCronoModeAction(CronoModeEnum.CRONO_MODE_FINISHED));
  }
};

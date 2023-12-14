import Immutable from 'immutable';
import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { StoreThunkAction } from '../../../redux/types';
import generateTimestamp from '../../../utils/time/generateTimestamp';
import decideCurrentSet from '../helpers/decideCurrentSet';
import setCronoModeAction from './actions/setCronoModeAction';
import setInitialStateAction from './actions/setInitialStateAction';
import updateTableDurationBySetsAction from './actions/composed/updateTableDurationBySetsAction';
import { CronoStateType } from './CronoTypes';

/**
 * Skips a single set
 */
export type SkipSetType = (key: number) => StoreThunkAction;

export const skipSet: SkipSetType = (pos: number) => (dispatch, getState) => {
  const crono = getState().crono.toJS<CronoStateType>();

  // current timestamp
  const currentTimestamp = generateTimestamp();

  // activate new set
  const newCrono = decideCurrentSet(crono, currentTimestamp, pos);
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

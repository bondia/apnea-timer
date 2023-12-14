import Immutable from 'immutable';
import { StoreThunkAction } from '../../../redux/types';
import generateTimestamp from '../../../utils/time/generateTimestamp';
import decideCurrentSet from '../helpers/decideCurrentSet';
import setInitialStateAction from './actions/setInitialStateAction';
import updateTableDurationBySetsAction from './actions/composed/updateTableDurationBySetsAction';
import { CronoStateType } from './CronoTypes';
import handleFinishTableAction from './actions/composed/handleFinishTableAction';

/**
 * Skips a single set
 */
export type SkipSetActionType = (key: number) => StoreThunkAction;

const skipSetAction: SkipSetActionType = (pos: number) => (dispatch, getState) => {
  const crono = getState().crono.toJS<CronoStateType>();

  // current timestamp
  const currentTimestamp = generateTimestamp();

  // activate new set
  const newCrono = decideCurrentSet(crono, currentTimestamp, pos);
  const newCronoImmutable = Immutable.fromJS(newCrono);

  dispatch(setInitialStateAction(newCronoImmutable));

  // recalculate table duration
  dispatch(updateTableDurationBySetsAction());

  // handle finish table state
  dispatch(handleFinishTableAction());
};

export default skipSetAction;

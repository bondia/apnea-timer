import { StoreThunkAction } from '../../../../../redux/types';
import generateTimestamp from '../../../../../utils/time/generateTimestamp';
import decideCurrentSet from '../../../helpers/decideCurrentSet';
import setInitialStateAction from '../setInitialStateAction';
import handleFinishTableAction from './handleFinishTableAction';
import updateTableDurationBySetsAction from './updateTableDurationBySetsAction';

/**
 * Skips a single set
 */
type SkipSetActionType = (key: number) => StoreThunkAction;

const skipSetAction: SkipSetActionType = (pos: number) => (dispatch, getState) => {
  const { crono } = getState();
  if (!crono) {
    return;
  }

  // current timestamp
  const currentTimestamp = generateTimestamp();

  // activate new set
  const newCrono = decideCurrentSet(crono, currentTimestamp, pos);
  dispatch(setInitialStateAction(newCrono));

  // recalculate table duration
  dispatch(updateTableDurationBySetsAction());

  // handle finish table state
  dispatch(handleFinishTableAction());
};

export default skipSetAction;

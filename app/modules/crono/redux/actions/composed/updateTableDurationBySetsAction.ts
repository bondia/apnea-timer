import { StoreThunkAction } from '../../../../../redux/types';
import calculateSetsDuration from '../../../../editor/helpers/sets/calculateSetsDuration';
import setTableDurationAction from '../setTableDurationAction';

type UpdateTableDurationBySetsAction = () => StoreThunkAction;

const updateTableDurationBySetsAction: UpdateTableDurationBySetsAction = () => (dispatch, getState) => {
  const { crono } = getState();
  if (!crono) {
    return;
  }
  const { sets } = crono;
  const duration = calculateSetsDuration(sets);
  dispatch(setTableDurationAction(duration));
};

export default updateTableDurationBySetsAction;

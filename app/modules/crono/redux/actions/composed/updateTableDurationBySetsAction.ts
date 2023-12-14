import { StoreThunkAction } from '../../../../../redux/types';
import calculateSetsDuration from '../../../../editor/helpers/sets/calculateSetsDuration';
import setTableDurationAction from '../setTableDurationAction';

export type UpdateTableDurationBySetsAction = () => StoreThunkAction;

const updateTableDurationBySetsAction: UpdateTableDurationBySetsAction = () => (dispatch, getState) => {
  const {
    crono: { sets },
  } = getState();
  const duration = calculateSetsDuration(sets);
  dispatch(setTableDurationAction(duration));
};

export default updateTableDurationBySetsAction;

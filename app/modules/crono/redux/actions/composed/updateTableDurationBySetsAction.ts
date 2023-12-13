import { ImmutableJSType, StoreThunkAction } from '../../../../../redux/types';
import calculateSetsDuration from '../../../../editor/helpers/sets/calculateSetsDuration';
import { CronoSetListType } from '../../CronoTypes';
import setTableDurationAction from '../setTableDurationAction';

export type UpdateTableDurationBySetsAction = () => StoreThunkAction;

// TODO: Remove immutable js
const updateTableDurationBySetsAction: UpdateTableDurationBySetsAction = () => (dispatch, getState) => {
  const { crono } = getState();
  const sets = crono.get<ImmutableJSType>('sets').toJS<CronoSetListType>();
  const duration = calculateSetsDuration(sets);
  dispatch(setTableDurationAction(duration));
};

export default updateTableDurationBySetsAction;

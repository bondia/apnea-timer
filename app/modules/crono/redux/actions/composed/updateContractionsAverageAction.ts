import { ImmutableJSType, StoreThunkAction } from '../../../../../redux/types';
import calculateAverageContractions from '../../../helpers/calculateAverageContractions';
import { CronoSetListType } from '../../CronoTypes';
import setContractionsAction from '../setContractionsAction';

export type UpdateContractionsAverageAction = () => StoreThunkAction;

// TODO: Remove Immutable js
const updateContractionsAverageAction: UpdateContractionsAverageAction = () => (dispatch, getState) => {
  const { crono } = getState();
  const sets = crono.get<ImmutableJSType>('sets').toJS<CronoSetListType>();
  const contractions: number = calculateAverageContractions(sets);
  dispatch(setContractionsAction(contractions));
};

export default updateContractionsAverageAction;

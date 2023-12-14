import { StoreThunkAction } from '../../../../../redux/types';
import calculateAverageContractions from '../../../helpers/calculateAverageContractions';
import setContractionsAction from '../setContractionsAction';

export type UpdateContractionsAverageAction = () => StoreThunkAction;

const updateContractionsAverageAction: UpdateContractionsAverageAction = () => (dispatch, getState) => {
  const {
    crono: { sets },
  } = getState();
  const contractions: number = calculateAverageContractions(sets);
  dispatch(setContractionsAction(contractions));
};

export default updateContractionsAverageAction;

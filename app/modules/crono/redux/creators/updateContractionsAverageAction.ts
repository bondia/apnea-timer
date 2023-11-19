import calculateAverageContractions from '../../helpers/calculateAverageContractions';
import setContractionsAction from '../actions/setContractionsAction';

const updateContractionsAverageAction = () => {
  return (dispatch, getState) => {
    const { crono } = getState();
    const sets = crono.get('sets').toJS();
    const contractions: number = calculateAverageContractions(sets);
    dispatch(setContractionsAction(contractions));
  };
};

export default updateContractionsAverageAction;

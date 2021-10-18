import { Action } from 'redux';
import * as reduxActions from '../../../redux/actions';

interface SetContractionsAction extends Action {
  contractions: number;
}

const setContractionsAction = (contractions: number): SetContractionsAction => {
  return { type: reduxActions.CRONO_SET_RUNNING_CONTRACTIONS, contractions };
};

export default setContractionsAction;

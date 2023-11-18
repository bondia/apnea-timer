import { Action } from 'redux';

export const CRONO_SET_RUNNING_CONTRACTIONS = 'CRONO_SET_RUNNING_CONTRACTIONS';

type SetContractionsAction = Action & {
  contractions: number;
};

const setContractionsAction = (contractions: number): SetContractionsAction => {
  return { type: CRONO_SET_RUNNING_CONTRACTIONS, contractions };
};

export default setContractionsAction;

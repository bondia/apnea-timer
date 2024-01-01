import { Action } from 'redux';
import { CronoStateType } from '../../cronoTypes';

export const CRONO_SET_INITIAL_STATE = 'CRONO_SET_INITIAL_STATE';

type InitialStateAction = Action & {
  state: CronoStateType | null;
};

const setInitialStateAction = (state: CronoStateType | null): InitialStateAction => {
  return { type: CRONO_SET_INITIAL_STATE, state };
};

export default setInitialStateAction;

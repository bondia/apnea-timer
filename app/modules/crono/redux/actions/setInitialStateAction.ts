import { Action } from 'redux';
import { CronoStateType } from '../CronoTypes';

export const CRONO_SET_INITIAL_STATE = 'CRONO_SET_INITIAL_STATE';

export type InitialStateAction = Action & {
  state: CronoStateType;
};

const setInitialStateAction = (state: CronoStateType): InitialStateAction => {
  return { type: CRONO_SET_INITIAL_STATE, state };
};

export default setInitialStateAction;

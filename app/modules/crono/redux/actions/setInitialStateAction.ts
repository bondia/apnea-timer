import { Action } from 'redux';
import { ImmutableJSCronoStateType } from '../CronoTypes';

export const CRONO_SET_INITIAL_STATE = 'CRONO_SET_INITIAL_STATE';

export type InitialStateAction = Action & {
  state: ImmutableJSCronoStateType;
};

const setInitialStateAction = (state: ImmutableJSCronoStateType): InitialStateAction => {
  return { type: CRONO_SET_INITIAL_STATE, state };
};

export default setInitialStateAction;

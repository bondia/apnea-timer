import { Action } from 'redux';
import * as reduxActions from '../../../main/enums/reduxActions';
import { ImmutableJSCronoType } from '../cronoTypes';

export interface InitialStateAction extends Action {
  state: ImmutableJSCronoType;
}

const setInitialStateAction = (state: ImmutableJSCronoType): InitialStateAction => {
  return { type: reduxActions.CRONO_SET_INITIAL_STATE, state };
};

export default setInitialStateAction;

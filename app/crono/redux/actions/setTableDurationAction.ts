import { Action } from 'redux';
import * as reduxActions from '../../../redux/actions';

export interface SetTableDurationAction extends Action {
  duration: number;
}

const setTableDurationAction = (duration: number): SetTableDurationAction => {
  return { type: reduxActions.CRONO_SET_RUNNING_TABLE_DURATION, duration };
};

export default setTableDurationAction;

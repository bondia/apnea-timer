import { Action } from 'redux';
import * as reduxActions from '../../../redux/actions';

interface SetCronoStartTimestampAction extends Action {
  startTimestamp: number;
}

const setCronoStartTimestampAction = (startTimestamp: number): SetCronoStartTimestampAction => {
  return { type: reduxActions.CRONO_SET_START_TIMESTAMP, startTimestamp };
};

export default setCronoStartTimestampAction;
import { AnyAction } from 'redux';
import { defaultEmptyAction } from '../../../redux/types';
import { ImmutableJSCronoStateType } from './CronoTypes';
import { CRONO_SET_INITIAL_STATE } from './actions/setInitialStateAction';
import { CRONO_SET_START_TIMESTAMP } from './actions/setCronoStartTimestampAction';
import { CRONO_SET_RUNNING_MODE } from './actions/setCronoModeAction';
import { CRONO_SET_RUNNING_TABLE_DURATION } from './actions/setTableDurationAction';
import { CRONO_SET_RUNNING_CONTRACTIONS } from './actions/setContractionsAction';
import { CRONO_REPLACE_SET } from './actions/replaceSetAction';

const cronoReducer = (
  state: ImmutableJSCronoStateType = null,
  action: AnyAction = defaultEmptyAction,
): ImmutableJSCronoStateType => {
  // set initial state
  if (action.type === CRONO_SET_INITIAL_STATE) {
    return action.state;
  }

  // set start timestamp
  if (action.type === CRONO_SET_START_TIMESTAMP) {
    return state.setIn(['running', 'startTimestamp'], action.startTimestamp);
  }

  // set crono mode [ auto, coach ]
  if (action.type === CRONO_SET_RUNNING_MODE) {
    return state.setIn(['running', 'mode'], action.mode);
  }

  // set duration
  if (action.type === CRONO_SET_RUNNING_TABLE_DURATION) {
    return state.setIn(['running', 'countdown'], action.duration);
  }

  // set contractions
  if (action.type === CRONO_SET_RUNNING_CONTRACTIONS) {
    return state.setIn(['running', 'contractions'], action.contractions);
  }

  // replace set
  if (action.type === CRONO_REPLACE_SET) {
    const pos = action.set.get('pos');
    return state.updateIn(['sets'], sets => sets.map(s => (s.get('pos') === pos ? action.set : s)));
  }

  return state;
};

export default cronoReducer;

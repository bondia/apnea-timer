import { AnyAction } from 'redux';
import { defaultEmptyAction } from '../../../redux/types';
import { CronoStateType } from '../cronoTypes';
import { CRONO_REPLACE_SET } from './actions/replaceSetAction';
import { CRONO_SET_RUNNING_CONTRACTIONS } from './actions/setContractionsAction';
import { CRONO_SET_RUNNING_MODE } from './actions/setCronoModeAction';
import { CRONO_SET_START_TIMESTAMP } from './actions/setCronoStartTimestampAction';
import { CRONO_SET_INITIAL_STATE } from './actions/setInitialStateAction';
import { CRONO_SET_RUNNING_TABLE_DURATION } from './actions/setTableDurationAction';

const cronoReducer = (
  state: CronoStateType | null = null,
  action: AnyAction = defaultEmptyAction,
): CronoStateType | null => {
  // set initial state
  if (action.type === CRONO_SET_INITIAL_STATE) {
    return action.state;
  }

  if (!state) {
    return state;
  }

  // set start timestamp
  if (action.type === CRONO_SET_START_TIMESTAMP) {
    return {
      ...state,
      running: {
        ...state.running,
        startTimestamp: action.startTimestamp,
      },
    };
  }

  // set crono mode [ auto, coach ]
  if (action.type === CRONO_SET_RUNNING_MODE) {
    return {
      ...state,
      running: {
        ...state.running,
        mode: action.mode,
      },
    };
  }

  // set duration
  if (action.type === CRONO_SET_RUNNING_TABLE_DURATION) {
    return {
      ...state,
      running: {
        ...state.running,
        countdown: action.duration,
      },
    };
  }

  // set contractions
  if (action.type === CRONO_SET_RUNNING_CONTRACTIONS) {
    return {
      ...state,
      running: {
        ...state.running,
        contractions: action.contractions,
      },
    };
  }

  // replace set
  if (action.type === CRONO_REPLACE_SET) {
    const { set: newSet } = action;
    return {
      ...state,
      sets: state.sets.map(oldSet =>
        oldSet.pos === newSet.pos ? newSet : oldSet,
      ),
    };
  }

  return state;
};

export default cronoReducer;

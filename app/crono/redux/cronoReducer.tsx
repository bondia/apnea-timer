import reduxActions from '../../main/enums/reduxActions';
import { ImmutableJSCronoType } from './CronoTypes';

const cronoReducer = (state = null, action): ImmutableJSCronoType => {
    // set initial state
    if (action.type == reduxActions.CRONO_SET_INITIAL_STATE) {
        return action.state;
    }

    // set start timestamp
    if (action.type == reduxActions.CRONO_SET_START_TIMESTAMP) {
        return state.setIn(['running', 'startTimestamp'], action.startTimestamp);
    }

    // set crono mode [ auto, coach ]
    if (action.type == reduxActions.CRONO_SET_RUNNING_MODE) {
        return state.setIn(['running', 'mode'], action.mode);
    }

    // set duration
    if (action.type == reduxActions.CRONO_SET_RUNNING_TABLE_DURATION) {
        return state.setIn(['running', 'countdown'], action.duration);
    }

    // set contractions
    if (action.type == reduxActions.CRONO_SET_RUNNING_CONTRACTIONS) {
        return state.setIn(['running', 'contractions'], action.contractions);
    }

    // replace set
    if (action.type == reduxActions.CRONO_REPLACE_SET) {
        const pos = action.set.get('pos');
        return state.updateIn(['sets'], sets => sets.map(s => (s.get('pos') === pos ? action.set : s)));
    }

    // replace sets
    if (action.type == reduxActions.CRONO_REPLACE_SETS) {
        return state.setIn(['sets'], action.sets);
    }

    return state;
}

export default cronoReducer;

import reduxActions from 'app/main/enums/reduxActions';

import addClockTick from '../util/mutations/addClockTick';
import decideCurrentSet from '../pure/decideCurrentSet';
import addCurrentSetTick from '../util/mutations/addCurrentSetTick';
import setTableDuration from '../util/mutations/setTableDuration';

function cronoReducer(state = null, action) {
    // set initial state
    if (action.type == reduxActions.CRONO_SET_INITIAL_STATE) {
        return action.state;
    }

    // set crono mode [ auto, coach ]
    if (action.type == reduxActions.CRONO_SET_MODE) {
        return state.setIn(['trainingTable', 'running', 'mode'], action.mode);
    }

    // set duration
    if (action.type == reduxActions.CRONO_SET_TABLE_DURATION) {
        return state.setIn(['trainingTable', 'running', 'countdown'], action.duration);
    }

    // set sets
    if (action.type == reduxActions.CRONO_REPLACE_SETS) {
        return state.setIn(['sets'], action.sets);
    }

    /** TODO: REFACTORING */

    // HANDLE CLOCK TICK
    if (action.type == reduxActions.CRONO_TICK_UP) {
        state = addClockTick(state);
        state = addCurrentSetTick(state);
        state = decideCurrentSet(state);
        state = setTableDuration(state);
        return state;
    }

    return state;
}

export default cronoReducer;

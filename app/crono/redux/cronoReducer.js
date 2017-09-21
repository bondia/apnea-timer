import reduxActions from 'app/main/enums/reduxActions';
import * as enums from 'app/editor/enums';
import setTableDuration from 'app/editor/utils/mutations/setTableDuration';

import startCrono from '../util/mutations/startCrono';
import addClockTick from '../util/mutations/addClockTick';
import addCurrentSetTick from '../util/mutations/addCurrentSetTick';
import decideCurrentSet from '../util/mutations/decideCurrentSet';

function cronoReducer(state = null, action) {

    // INIT TABLE
    if (action.type == reduxActions.CRONO_START) {
        state = startCrono(action.data);
        state = setTableDuration(state);
        return state;
    }

    // SET MODE
    if (action.type == reduxActions.CRONO_SET_MODE) {
        return state.setIn([ 'trainingTable', 'running', 'mode' ], action.mode);
    }

    // SKIP SET
    if (action.type == reduxActions.CRONO_SET_SKIP) {
        const key = action.key;
        state = state.updateIn([ 'sets' ], sets => sets.map(s => {
            return s.get('pos') === key ? s.setIn([ 'running', 'mode' ], enums.SET_MODE_SKIPED) : s;
        }));
        state = decideCurrentSet(state);
        return state;
    }

    // HANDLE CLOCK TICK
    if (action.type == reduxActions.CRONO_TICK_UP) {
        state = addClockTick(state);
        state = addCurrentSetTick(state);
        state = decideCurrentSet(state);
        state = setTableDuration(state);
        return state;
    }

    // HANDLE CRONO FINISH
    if (action.type == reduxActions.CRONO_FINISH) {
        return null;
    }

    return state;
};

export default cronoReducer;

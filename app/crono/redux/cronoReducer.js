import reduxActions from 'app/main/enums/reduxActions'
import * as enums from 'app/editor/enums'
import setTableDuration from 'app/editor/utils/mutations/setTableDuration'

import startCrono from '../util/mutations/startCrono';
import addClockTick from '../util/mutations/addClockTick';
import addCurrentSetTick from '../util/mutations/addCurrentSetTick';
import decideCurrentSet from '../util/mutations/decideCurrentSet';

export default train = (state = null, action) => {

    // INIT TABLE
    if (action.type == reduxActions.CRONO_START) {
        return startCrono(action.data);
    }

    // SKIP SET
    if (action.type == reduxActions.CRONO_SET_SKIP) {
        const key = action.key
        return state.updateIn([ 'sets' ], sets => sets.map(s => s.get('pos') === key ? s.setIn([ 'running', 'mode' ], enums.SET_MODE_SKIPED) : s))
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
        return null
    }

    return state
}

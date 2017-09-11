import Immutable from 'immutable'
import reduxActions from 'app/main/enums/reduxActions'
import * as enums from 'app/editor/enums'
import notificationService from '../services/NotificationService'
import { setTableDuration } from 'app/editor/services/tableMutations'

export default train = (state = null, action) => {

    // INIT TABLE
    if (action.type == reduxActions.CRONO_INIT) {
        state = action.data
        state = state.set('step', 0)
        return state.setIn([ 'table', 'sets', 0, 'mode' ], enums.SET_MODE_RUNNING)
    }

    // SKIP SET
    if (action.type == reduxActions.CRONO_SET_SKIP) {
        const key = action.key
        return state.updateIn([ 'table', 'sets' ], sets => sets.map(s => s.get('pos') === key ? s.set('mode', enums.SET_MODE_SKIPED) : s))
    }

    // HANDLE CLOCK TICK
    if (action.type == reduxActions.CRONO_TICK_UP) {

        // update clock
        state = state.setIn([ 'clock' ], state.getIn([ 'clock' ]) + 1)

        // change step time
        let step = state.get('step')
        let time = state.getIn([ 'table', 'sets', step, 'duration' ]) - 1
        state = state.setIn([ 'table', 'sets', step, 'duration' ], time)

        if (time == 30) {
            notificationService.playF2();
        }

        if (time == 15) {
            notificationService.playA2();
        }

        // finish step and run the next one
        if (time == 0 || state.getIn([ 'table', 'sets', step, 'mode' ]) === enums.SET_MODE_SKIPED) {
            notificationService.playC3();
            if (time == 0) {
                state = state.setIn([ 'table', 'sets', step, 'mode' ], enums.SET_MODE_FINISHED)
            }
            step = step + 1
            state = state.setIn([ 'table', 'sets', step, 'mode' ], enums.SET_MODE_RUNNING)
        }

        state = state.set('step', step)
        return setTableDuration(state)
    }

    if (action.type == reduxActions.CRONO_FINISH) {
        return null
    }

    return state
}

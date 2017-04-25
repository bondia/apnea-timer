import Immutable from 'immutable'
import { cronoActionsEnum } from './cronoActions'
import { cronoMode, cronoType } from '../enums/tableEnums'

import notificationService from '../services/NotificationService.js'

export default train = (state = null, action) => {

    // INIT TABLE
    if (action.type == cronoActionsEnum.TIMER_INIT) {
        state = action.data
        state = state.set('step', 0)
        return state.setIn([ 'table', 'steps', 0, 'mode' ], cronoMode.MODE_RUNNING)
    }

    // HANDLE CLOCK TICK
    if (action.type == cronoActionsEnum.TIMER_TICK) {

        // update clock
        state = state.setIn([ 'clock' ], state.getIn([ 'clock' ]) + 1)

        // change step time
        let step = state.get('step')
        let time = state.getIn([ 'table', 'steps', step, 'duration' ]) - 1
        state = state.setIn([ 'table', 'steps', step, 'duration' ], time)

        if (time == 30) {
            notificationService.playF2();
        }

        if (time == 15) {
            notificationService.playA2();
        }

        // finish step and run the next one
        if (time == 0) {
            notificationService.playC3();
            state = state.setIn([ 'table', 'steps', step, 'mode' ], cronoMode.MODE_FINISHED)
            step = step + 1
            state = state.setIn([ 'table', 'steps', step, 'mode' ], cronoMode.MODE_RUNNING)
        }

        return state.set('step', step)
    }

    if (action.type == cronoActionsEnum.TIMER_FINISHED) {
        return null
    }

    return state
}

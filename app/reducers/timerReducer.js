import Immutable from 'immutable'
import { timerActions } from '../enums/reduxActions'
import { cronoMode, cronoType } from '../enums/tableEnums'

import notificationService from '../services/NotificationService.js'

export default train = (state = generateTable(5), action) => {

    // CHANGE BASE
    if (action.type == timerActions.TIMER_BASE) {
        return action.base < 5 ? generateTable(5) : generateTable(action.base)
    }

    // INIT TABLE
    if (action.type == timerActions.TIMER_INIT) {
        state = state.set('step', 0)
        return state.setIn([ 'table', 'steps', 0, 'mode' ], cronoMode.MODE_RUNNING)
    }

    // HANDLE CLOCK TICK
    if (action.type == timerActions.TIMER_TICK) {

        // update clock
        state = state.setIn([ 'clock' ], state.getIn([ 'clock' ]) + 1)

        // change step time
        let step = state.get('step')
        let time = state.getIn([ 'table', 'steps', step, 'duration' ]) - 1
        state = state.setIn([ 'table', 'steps', step, 'duration' ], time)

        if (time == 30) {
            notificationService.playSound();
        }

        // finish step and run the next one
        if (time == 0) {
            notificationService.playSound();
            state = state.setIn([ 'table', 'steps', step, 'mode' ], cronoMode.MODE_FINISHED)
            step = step + 1
            // if (state.getIn([ 'table', 'steps' ]).size > step) {
                state = state.setIn([ 'table', 'steps', step, 'mode' ], cronoMode.MODE_RUNNING)
            // } else {
                // state = state.set('finished', true)
            // }
        }

        return state.set('step', step)
    }

    // handle start of table and change of cronos
    // if (action.type == 'crono_start') {

    //     const stamp = new Date()
    //     const step = state.get('step')

    //     // update steps
    //     state = state.updateIn([ 'table', 'steps' ], steps => {
    //         return steps.map((step, key) => {
    //             if (key == step) {
    //                 return step.set('mode', 'finished')
    //             }

    //             if (key == step+1) {
    //                 step = step.set('stamp', stamp)
    //                 return step.set('mode', 'run')
    //             }

    //             return step
    //         })
    //     })
    //     return state.set('step', step+1)
    // }

    return state
}

function generateTable(base) {
    let state = Immutable.fromJS({
        step: -1,
        base: base,
        finished: false,
        clock: 0,
        table: {
            steps: [
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { duration: 12*base-base,   mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { duration: 12*base-2*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { duration: 12*base-3*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { duration: 12*base-4*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { duration: 12*base-5*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { duration: 12*base-6*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },
            ]
        }
    })

    return state
}

import Immutable from 'immutable'
import { timerActions } from '../enums/reduxActions'
import { cronoMode, cronoType } from '../enums/tableEnums'

const defaultState = Immutable.fromJS({
    step: -1,
    clock: 0,
    table: {
        steps: [
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

            { duration: 2*60+12, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

            { duration: 2*60,    mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

            { duration: 1*60+48, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

            { duration: 1*60+36, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

            { duration: 1*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

            { duration: 1*60+12, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
            { duration: 2*60+24, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },
        ]
    }
})

export default train = (state = defaultState, action) => {

    // INIT TABLE
    if (action.type == timerActions.TIMER_INIT) {
        state = state.set('step', 0);
        state = state.setIn([ 'table', 'steps', 0, 'mode' ], cronoMode.MODE_RUNNING)
    }

    // handle clock tick
    if (action.type == timerActions.TIMER_TICK) {
        // update clock
        state = state.setIn([ 'clock' ], state.getIn([ 'clock' ]) + 1)

        // change step time
        let step = state.get('step')
        let time = state.getIn([ 'table', 'steps', step, 'duration' ]) - 1
        state = state.setIn([ 'table', 'steps', step, 'duration' ], time)

        // finish step and run the next one
        if (time == 0) {
            state = state.setIn([ 'table', 'steps', step, 'mode' ], cronoMode.MODE_FINISHED)
            step = step + 1;
            state = state.setIn([ 'table', 'steps', step, 'mode' ], cronoMode.MODE_RUNNING)
        }

        state = state.set('step', step);
        return state
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

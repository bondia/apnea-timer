import Immutable from 'immutable'

import { timerActionsEnum } from './editorActions'
import { cronoMode, cronoType } from 'app/crono/enums/tableEnums'

export default train = (state = generateTable(5), action) => {

    if (action.type == timerActionsEnum.CREATOR_TIMER_BASE) {
        return action.base < 5 ? generateTable(5) : generateTable(action.base)
    }

    if (action.type == timerActionsEnum.CREATOR_ITEM_CHANGE) {
        return state.updateIn([ 'table', 'steps' ], is => {
            return is.map(i => i.get('pos') == action.key ? i.set('duration', i.get('duration') + action.amount) : i)
        })
    }

    return state
}

function generateTable(base) {
    const state = Immutable.fromJS({
        step: -1,
        base: base,
        holdtime: 12*base,
        finished: false,
        clock: 0,
        table: {
            steps: [
                { pos: 0, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 1, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 2, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 3, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 4, duration: 12*base-base,   mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 5, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 6, duration: 12*base-2*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 7, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 8, duration: 12*base-3*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 9, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 10, duration: 12*base-4*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 1, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 11, duration: 12*base-5*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 12, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 13, duration: 12*base-6*base, mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 14, duration: 12*base,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },
            ]
        }
    })

    return state
}

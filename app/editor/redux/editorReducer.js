import Immutable from 'immutable'

import { timerActionsEnum } from './editorActions'
import { cronoMode, cronoType } from 'app/crono/enums/tableEnums'

export default train = (state = generateTable(120), action) => {

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
        holdtime: base,
        finished: false,
        clock: 0,
        table: {
            steps: [
                { pos: 0, duration: 60*2,       mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 1, duration: base,       mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 2, duration: 60*2-10,    mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 3, duration: base,       mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 4, duration: 60*2-20,    mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 5, duration: base,       mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 6, duration: 60*2-30,    mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 7, duration: base,       mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 8, duration: 60*2-40,    mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 9, duration: base,       mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 10, duration: 60*2-50,   mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 11, duration: base,      mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 12, duration: 60,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 13, duration: base,      mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },

                { pos: 14, duration: 50,        mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_PREPARE },
                { pos: 15, duration: base,      mode: cronoMode.MODE_INITIAL, type: cronoType.TYPE_HOLD    },
            ]
        }
    })

    return state
}

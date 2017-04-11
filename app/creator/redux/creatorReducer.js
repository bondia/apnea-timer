import Immutable from 'immutable'

import { timerActionsEnum } from './creatorActions'
import { cronoMode, cronoType } from 'app/crono/enums/tableEnums'

export default train = (state = generateTable(5), action) => {

    if (action.type == timerActionsEnum.CREATOR_TIMER_BASE) {
        return action.base < 5 ? generateTable(5) : generateTable(action.base)
    }

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

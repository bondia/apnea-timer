import Immutable from 'immutable'
import { cronoMode, cronoType } from 'app/crono/enums/tableEnums'
import * as enums from '../enums'

function createTable(base = 1, type = enums.TABLE_TYPE_CO2) {
    const state = Immutable.fromJS({
        type: type,
        step: -1,
        base: base,
        duration: 0,
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

    return setTableDuration(state)
}

function changeBase(state, value) {
    const base = value < 5 ? 5 : value
    state = state.set('base', base)
    state = state.set('holdtime', base)
    state = state.updateIn([ 'table', 'steps' ], s => s.map(s => s.get('type') == cronoType.TYPE_HOLD ? s.set('duration', base) : s))
    return setTableDuration(state)
}

function updateDurationAtKey(state, key, amount) {
    // find item
    const item = state.getIn([ 'table', 'steps' ]).find(i => i.get('pos') === key);
    if (!item) {
        return state
    }
    // decide new duration
    const duration = amount + item.get('duration')
    // update all durations
    state = state.updateIn([ 'table', 'steps' ], items => {
        return items.map(i => decideSetDuration(i, key, duration))
    })
    return setTableDuration(state)
}

function decideSetDuration(item, key, duration) {
    if (item.get('pos') < key && item.get('duration') < duration ||
        item.get('pos') === key ||
        item.get('pos') > key && item.get('duration') > duration) {
        return item.set('duration', duration)
    }
    return item
}

function setTableDuration(data = null) {
    let duration = 0
    data.getIn([ 'table', 'steps' ]).forEach((e) => {
        duration += e.get('duration')
    })
    return data.set('duration', duration)
}

export { createTable, changeBase, updateDurationAtKey, setTableDuration }

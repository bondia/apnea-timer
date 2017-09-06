import Immutable from 'immutable'
import { cronoMode, cronoType } from 'app/crono/enums/tableEnums'

function createTable(base = 1) {
    const state = Immutable.fromJS({
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
    state = state.updateIn([ 'table', 'steps' ], is => {
        return is.map(i => i.get('pos') == key ? i.set('duration', i.get('duration') + amount) : i)
    })
    return setTableDuration(state)
}

function setTableDuration(data = null) {
    let duration = 0
    data.getIn([ 'table', 'steps' ]).forEach((e) => {
        duration += e.get('duration')
    })
    return data.set('duration', duration)
}

export { createTable, changeBase, updateDurationAtKey, setTableDuration }

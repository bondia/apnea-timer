import Immutable from 'immutable'
import * as enums from '../enums'

/**
 * Table Creation
 * @param  Integer base
 * @param  String type
 * @return Immutable
 */
function createTable(base, type) {
    let state = createTableSkeleton(base, type)
    state = createGenericSets(state)
    return setTableDuration(state)
}

function createTableSkeleton(base = 1, type = enums.TABLE_TYPE_CO2) {
    return Immutable.fromJS({
        // Table type O2 or CO2
        type: type,
        // base: represents hold time or recover time depending of the type of table
        base: base,
        // total table duration time based on sets calculation
        duration: 0,
        // flag to show that table is finished
        finished: false,
        // represents the seconds spend since the table started
        clock: 0,
        // table current step
        step: -1,
        table: {
            sets: [ ]
        }
    })
}

function createGenericSets(table) {
    const base = table.get('base')
    const type = table.get('type')
    for (var i = 0; i < 16; i+=2) {
        const prepareTime = type === enums.TABLE_TYPE_CO2 ? 120 - 10 * (i / 2) : base
        const holdTime = type === enums.TABLE_TYPE_O2 ? 60 + 10 * (i / 2) : base
        const preparationSet = Immutable.fromJS({ pos: i,     duration: prepareTime,  mode: enums.SET_MODE_INITIAL, type: enums.SET_TYPE_PREPARE })
        const holdSet = Immutable.fromJS({ pos: i+1,   duration: holdTime,     mode: enums.SET_MODE_INITIAL, type: enums.SET_TYPE_HOLD    })
        table = table.updateIn([ 'table', 'sets'], l =>  l.push(preparationSet))
        table = table.updateIn([ 'table', 'sets'], l =>  l.push(holdSet))
    }
    return table
}

/**
 * Change table base
 * @param  Immutable state
 * @param  Integer  value
 * @return Immutable
 */
function changeTableBase(state, value) {
    const tableType = state.get('type')
    const base = value < 5 ? 5 : value
    state = state.set('base', base)
    // update sets for co2
    if (enums.TABLE_TYPE_CO2 === tableType) {
        state = state.updateIn([ 'table', 'sets' ], s => s.map(s => s.get('type') == enums.SET_TYPE_HOLD ? s.set('duration', base) : s))
    }
    // update sets for o2
    if (enums.TABLE_TYPE_O2 === tableType) {
        state = state.updateIn([ 'table', 'sets' ], s => s.map(s => s.get('type') == enums.SET_TYPE_PREPARE ? s.set('duration', base) : s))
    }
    return setTableDuration(state)
}

/**
 * Change table type
 * @param  Immutable state
 * @param  Integer base
 * @param  String type
 * @return Immutable
 */
function changeTableType(state, base, type) {
    return createTable(base, type)
}

/**
 * Update duration for a set
 * @param  Immutable state
 * @param  Integer key
 * @param  Integer amount
 * @return Immutable
 */
function updateDurationAtKey(state, key, amount) {
    // find item
    const item = state.getIn([ 'table', 'sets' ]).find(i => i.get('pos') === key)
    if (!item) {
        return state
    }
    // decide new duration
    const duration = amount + item.get('duration')
    const tableType = state.get('type')
    // avoid negative numbers
    if (duration <= 0) {
        return state
    }
    // update all durations
    state = state.updateIn([ 'table', 'sets' ], items => {
        return items.map(i => decideSetDuration(tableType, i, key, duration))
    })
    // recalculate table duration
    return setTableDuration(state)
}

function decideSetDuration(tableType, item, key, duration) {
    const type = item.get('type')

    // UPDATE FOR O2 TABLES
    if (enums.TABLE_TYPE_O2 === tableType && enums.SET_TYPE_HOLD === type) {
        if (item.get('pos') < key && item.get('duration') > duration ||
            item.get('pos') === key ||
            item.get('pos') > key && item.get('duration') < duration) {
            return item.set('duration', duration)
        }
    }

    // UPDATE FOR CO2 TABLES
    if (enums.TABLE_TYPE_CO2 === tableType && enums.SET_TYPE_PREPARE === type) {
        if (item.get('pos') < key && item.get('duration') < duration ||
            item.get('pos') === key ||
            item.get('pos') > key && item.get('duration') > duration) {
            return item.set('duration', duration)
        }
    }

    // UPDATE FOR FREE TABLES
    return item.get('pos') === key ? item.set('duration', duration) : item
}

function setTableDuration(data = null) {
    let duration = 0
    data.getIn([ 'table', 'sets' ]).forEach((e) => {
        const mode = e.get('mode')
        if (enums.SET_MODE_INITIAL == mode || enums.SET_MODE_RUNNING == mode) {
            duration += e.get('duration')
        }
    })
    return data.set('duration', duration)
}

export { createTable, changeTableBase, changeTableType, updateDurationAtKey, setTableDuration }

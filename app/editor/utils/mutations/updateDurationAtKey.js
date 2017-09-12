import * as enums from '../../enums'

import setTableDuration from './setTableDuration'

/**
 * Update duration for a set
 * @param  Immutable state
 * @param  Integer key
 * @param  Integer amount
 * @return Immutable
 */
export default function updateDurationAtKey(state, key, amount) {
    // find item
    const item = state.getIn([ 'table', 'sets' ]).find(i => i.get('pos') === key)
    if (!item) {
        return state
    }
    // decide new duration
    const duration = amount + item.get('duration')
    const tableType = state.getIn([ 'entity', 'type' ])
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

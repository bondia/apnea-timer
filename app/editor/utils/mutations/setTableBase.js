import * as enums from '../../enums'
import setTableDuration from './setTableDuration'

/**
 * Change table base
 * @param  Immutable state
 * @param  Integer  value
 * @return Immutable
 */
export default function setTableBase(state, value) {
    const tableType = state.getIn([ 'trainingTable', 'type' ])
    const base = value < 5 ? 5 : value
    state = state.setIn([ 'trainingTable', 'base' ], base)
    // update sets for co2
    if (enums.TABLE_TYPE_CO2 === tableType) {
        state = state.updateIn([ 'sets' ], s => s.map(s => s.get('type') == enums.SET_TYPE_HOLD ? s.set('duration', base) : s))
    }
    // update sets for o2
    if (enums.TABLE_TYPE_O2 === tableType) {
        state = state.updateIn([ 'sets' ], s => s.map(s => s.get('type') == enums.SET_TYPE_PREPARE ? s.set('duration', base) : s))
    }
    return setTableDuration(state)
}

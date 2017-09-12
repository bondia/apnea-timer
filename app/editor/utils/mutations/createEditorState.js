import Immutable from 'immutable'
import * as enums from '../../enums'
import setTableDuration from './setTableDuration'

/**
 * Table Creation
 * @param  Integer base
 * @param  String type
 * @return Immutable
 */
export default function createEditorState(base, type) {
    let state = createEditroSkeleton(base, type)
    state = createInitialSets(state)
    state = setTableDuration(state)
    return state
}

function createEditroSkeleton(base = 1, type = enums.TABLE_TYPE_CO2) {
    return Immutable.fromJS({
        entity: {
            base: base,
            type: type,
            duration: 0,
        },

        table: {
            sets: [ ]
        }
    })
}

function createInitialSets(table) {
    const base = table.getIn([ 'entity', 'base' ])
    const type = table.getIn([ 'entity', 'type' ])
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

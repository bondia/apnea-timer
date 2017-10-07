import Immutable from 'immutable';
import * as enums from '../../enums';
import setTableDuration from './setTableDuration';

/**
 * Table Creation
 * @param  Integer base
 * @param  String type
 * @return Immutable
 */
export default function createEditorState(base, type) {
    let state = createEditroSkeleton(base, type);
    state = createInitialSets(state);
    state = setTableDuration(state);
    return state;
}

function createEditroSkeleton(base = 1, type = enums.TABLE_TYPE_CO2) {
    return Immutable.fromJS({
        trainingTable: {
            base: base,
            type: type,
            duration: 0
        },

        sets: []
    });
}

/**
 * CREATE SETS
 * - pos: Position inside the table
 * - duration: Set duration
 * - type: Hold set or breath up set
 */
function createInitialSets(table) {
    const base = table.getIn(['trainingTable', 'base']);
    const type = table.getIn(['trainingTable', 'type']);
    for (var i = 0; i < 16; i += 2) {
        const prepTime = type === enums.TABLE_TYPE_CO2 ? 120 - 10 * (i / 2) : base;
        const holdTime = type === enums.TABLE_TYPE_O2 ? 60 + 10 * (i / 2) : base;
        const prepSet = Immutable.fromJS({ duration: prepTime, type: enums.SET_TYPE_PREPARE, pos: i });
        const holdSet = Immutable.fromJS({ duration: holdTime, type: enums.SET_TYPE_HOLD, pos: i + 1 });
        table = table.updateIn(['sets'], l => l.push(prepSet));
        table = table.updateIn(['sets'], l => l.push(holdSet));
    }
    return table;
}

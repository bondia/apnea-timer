import Immutable from 'immutable';

import * as enums from '../../enums';

export default function createInitialSets(base=5, tableType=enums.TABLE_TYPE_CO2) {
    let sets = Immutable.List();
    for (var i = 0; i < 16; i += 2) {
        const prepTime = tableType === enums.TABLE_TYPE_CO2 ? 150 - 15 * (i / 2) : base;
        const holdTime = tableType === enums.TABLE_TYPE_O2 ? 60 + 10 * (i / 2) : base;
        const prepSet = Immutable.fromJS({ duration: prepTime, type: enums.SET_TYPE_PREPARE, pos: i });
        const holdSet = Immutable.fromJS({ duration: holdTime, type: enums.SET_TYPE_HOLD, pos: i+1 });
        sets = sets.push(prepSet);
        sets = sets.push(holdSet);
    }
    return sets;
}

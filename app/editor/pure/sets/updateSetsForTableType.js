import * as enums from '../../enums';

import createInitialSets from './createInitialSets';

export default function updateSetsForTableType(sets=null, base=5, tableType=enums.TABLE_TYPE_CO2) {
    // no initial sets
    if (sets == null) {
        return createInitialSets(base, tableType);
    }
    // update sets for co2
    if (enums.TABLE_TYPE_CO2 === tableType) {
        return sets.map(s => (s.get('type') == enums.SET_TYPE_HOLD ? s.set('duration', base) : s));
    }
    // update sets for o2
    if (enums.TABLE_TYPE_O2 === tableType) {
        return sets.map(s => (s.get('type') == enums.SET_TYPE_PREPARE ? s.set('duration', base) : s));
    }
    return sets;
}

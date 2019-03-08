import Immutable from 'immutable';

import * as enums from '../../enums';

export default function createEnduranceSets(base=5, baseBreaks=5) {
    let sets = Immutable.List();
    for (var i = 0; i < 32; i += 2) {
        const holdSet = Immutable.fromJS({ duration: base, type: enums.SET_TYPE_HOLD, pos: i });
        sets = sets.push(holdSet);
        if (i < 30) {
            const prepSet = Immutable.fromJS({ duration: baseBreaks, type: enums.SET_TYPE_PREPARE, pos: i+1 });
            sets = sets.push(prepSet);
        }
    }
    return sets;
}

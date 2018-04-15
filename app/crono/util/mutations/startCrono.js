import Immutable from 'immutable';
import * as enums from 'app/editor/enums';

export default function startCrono(crono) {
    // set running data info
    crono = crono.setIn(
        ['trainingTable', 'running'],
        Immutable.fromJS({
            // represents the seconds spend since the table started
            clock: -1,
            // table current step
            step: 0,
            // cono mode
            mode: enums.CRONO_MODE_AUTO
        })
    );

    // init sets
    return crono.updateIn(['sets'], sets => sets.map(initSet));
}

function initSet(set) {
    const pos = set.get('pos');
    return set.set(
        'running',
        Immutable.fromJS({
            mode: pos === 0 ? enums.SET_MODE_RUNNING : enums.SET_MODE_INITIAL,
            countdown: set.get('duration'),
            countup: 0
        })
    );
}

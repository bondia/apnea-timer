import * as enums from '../../enums';
import setTableDuration from './setTableDuration';

/**
 * Update duration for a set
 * @param  Immutable state
 * @param  Integer key
 * @param  Integer amount
 * @return Immutable
 */
export default function updateDurationAtKey(state, key, amount) {
    // find item
    const item = state.getIn(['sets']).find(i => i.get('pos') === key);
    if (!item) {
        return state;
    }

    // decide new duration
    console.info(amount, item.get('duration'));
    const duration = amount + item.get('duration');
    const tableType = state.getIn(['trainingTable', 'type']);

    // update all durations
    state = state.updateIn(['sets'], items => decideSetsDurations(items, tableType, key, duration));

    // recalculate table duration
    return setTableDuration(state);
}

function decideSetsDurations(sets, tableType, key, newDuration) {
    sets = sets.map(i => decideSetDuration(tableType, i, key, newDuration));
    sets.forEach((item, key) => {
        const duration = item.get('duration');
        const type = item.get('type');

        let relationKey = null;
        let isZombie = duration <= 0;

        if (enums.SET_TYPE_PREPARE === type) {
            relationKey = key + 1;
        }

        if (enums.SET_TYPE_HOLD === type) {
            relationKey = key - 1;
            isZombie = isZombie || sets.getIn([relationKey, 'zombie']) === true;
        }

        sets = sets.setIn([key, 'zombie'], isZombie);
        sets = sets.setIn([relationKey, 'zombie'], isZombie);
    });
    return sets;
}

function decideSetDuration(tableType, item, key, duration) {
    // never less than 0
    if (duration < 0) {
        return item;
    }

    const type = item.get('type');

    // UPDATE FOR O2 TABLES
    if (enums.TABLE_TYPE_O2 === tableType && enums.SET_TYPE_HOLD === type) {
        if (
            (item.get('pos') < key && item.get('duration') > duration) ||
            item.get('pos') === key ||
            (item.get('pos') > key && item.get('duration') < duration)
        ) {
            return item.set('duration', duration);
        }
    }

    // UPDATE FOR CO2 TABLES
    if (enums.TABLE_TYPE_CO2 === tableType && enums.SET_TYPE_PREPARE === type) {
        if (
            (item.get('pos') < key && item.get('duration') < duration) ||
            item.get('pos') === key ||
            (item.get('pos') > key && item.get('duration') > duration)
        ) {
            return item.set('duration', duration);
        }
    }

    // UPDATE FOR FREE TABLES
    return item.get('pos') === key ? item.set('duration', duration) : item;
}

import calculateSetsDuration from '../../pure/sets/calculateSetsDuration';

export default function setTableDuration(table = null) {
    if (!table) {
        return table;
    }

    const sets = table.getIn(['sets']);
    const duration = calculateSetsDuration(sets);

    // update for running table
    if (table.getIn(['trainingTable', 'running'])) {
        return table.setIn(['trainingTable', 'running', 'countdown'], duration);
    }

    // update editor duration
    return table.setIn(['trainingTable', 'duration'], duration);
}

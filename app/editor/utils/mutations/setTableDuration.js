import getRemainingTableDuration from './getRemainingTableDuration';

export default function setTableDuration(table = null) {
    if (!table) {
        return table;
    }

    const sets = table.getIn(['sets']);
    const duration = getRemainingTableDuration(sets);

    // update for runint table
    if (table.getIn(['trainingTable', 'running'])) {
        return table.setIn(['trainingTable', 'running', 'countdown'], duration);
    }

    // update editor duration
    return table.setIn(['trainingTable', 'duration'], duration);
}

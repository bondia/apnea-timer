export default function addClockTick(state) {
    const clock = state.getIn([ 'trainingTable', 'running', 'clock' ]) + 1;
    return state.setIn([ 'trainingTable', 'running', 'clock' ], clock);
}


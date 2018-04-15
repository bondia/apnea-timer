export default function addCurrentSetTick(state) {
    const step = state.getIn(['trainingTable', 'running', 'step']);
    const time = state.getIn(['sets', step, 'running', 'countdown']) - 1;
    return state.setIn(['sets', step, 'running', 'countdown'], time);
}

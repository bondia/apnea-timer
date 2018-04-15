import * as enums from 'app/editor/enums';
import notificationService from 'app/editor/utils/NotificationService';

export default function decideCurrentSet(state) {
    const step = state.getIn(['trainingTable', 'running', 'step']);
    const countdown = state.getIn(['sets', step, 'running', 'countdown']);
    const setMode = state.getIn(['sets', step, 'running', 'mode']);

    playNotificationSound(countdown);

    // handle explicit skiped sets
    if (enums.SET_MODE_SKIPED === setMode) {
        return skipSet(state, step, setMode);
    }

    // do not change current set if not skiped and stil countdown available
    const cronoMode = state.getIn(['trainingTable', 'running', 'mode']);
    if (countdown <= 0 && enums.CRONO_MODE_AUTO === cronoMode) {
        return skipSet(state, step, setMode);
    }

    return state;
}

function skipSet(state, step, setMode) {
    if (enums.SET_MODE_SKIPED !== setMode) {
        state = state.setIn(['sets', step, 'running', 'mode'], enums.SET_MODE_FINISHED);
    }

    step = step + 1;
    state = state.setIn(['sets', step, 'running', 'mode'], enums.SET_MODE_RUNNING);
    state = state.setIn(['trainingTable', 'running', 'step'], step);
    return state;
}

function playNotificationSound(countdown) {
    switch (countdown) {
        case 30:
            notificationService.playF2();
            break;
        case 15:
            notificationService.playA2();
            break;
        case 0:
            notificationService.playC3();
            break;
    }
}

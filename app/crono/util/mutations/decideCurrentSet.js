import * as enums from 'app/editor/enums'
import notificationService from 'app/editor/utils/NotificationService'

export default function decideCurrentSet(state) {
    let step = state.getIn([ 'trainingTable', 'running', 'step' ]);
    const countdown = state.getIn([ 'sets', step, 'running', 'countdown' ]);
    const mode = state.getIn([ 'sets', step, 'running', 'mode' ]);

    playNotificationSound(countdown);

    // do not change current set if not skiped and stil countdown available
    if (countdown > 0 && enums.SET_MODE_SKIPED !== mode) {
        return state;
    }

    if (enums.SET_MODE_SKIPED !== mode) {
        state = state.setIn([ 'sets', step, 'running', 'mode' ], enums.SET_MODE_FINISHED)
    }

    step = step + 1
    state = state.setIn([ 'sets', step, 'running', 'mode' ], enums.SET_MODE_RUNNING)
    state = state.setIn([ 'trainingTable', 'running', 'step'], step)
    return state;
}

function playNotificationSound(countdown) {
    switch(countdown) {
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

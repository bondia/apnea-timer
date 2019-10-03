import * as enums from 'app/editor/enums';
import playSound, { A2, F2, C3 } from 'app/common/utils/playSound';

// TODO: This is tight coupled with the state.
export default function decideCurrentSet(state, currentTimestamp) {
    const step = state.getIn(['running', 'step']);
    const countdown = state.getIn(['sets', step, 'running', 'countdown']);
    const setMode = state.getIn(['sets', step, 'running', 'mode']);

    playNotificationSound(countdown);

    // handle explicit skiped sets
    if (enums.SET_MODE_SKIPED === setMode) {
        return skipSet(state, step, setMode, currentTimestamp);
    }

    // do not change current set if not skiped and stil countdown available
    const cronoMode = state.getIn(['running', 'mode']);
    if (countdown <= 0 && enums.CRONO_MODE_AUTO === cronoMode) {
        return skipSet(state, step, setMode, currentTimestamp);
    }

    return state;
}

function skipSet(state, step, setMode, currentTimestamp) {
    // change set mode
    if (enums.SET_MODE_SKIPED !== setMode) {
        state = state.setIn(['sets', step, 'running', 'endTimestamp'], currentTimestamp);
        state = state.setIn(['sets', step, 'running', 'mode'], enums.SET_MODE_FINISHED);
    }

    // decide next step
    step = step >= state.get('sets').size - 1 ? -1 : step + 1;
    state = state.setIn(['running', 'step'], step);

    // update next set
    if (step >= 0) {
        state = state.setIn(['sets', step, 'running', 'startTimestamp'], currentTimestamp);
        state = state.setIn(['sets', step, 'running', 'mode'], enums.SET_MODE_RUNNING);
    }

    return state;
}

function playNotificationSound(countdown) {
    switch (countdown) {
        case 30:
        case 20:
            playSound(F2);
            break;
        case 10:
        case 5:
            playSound(A2);
            break;
        case 0:
            playSound(C3);
            break;
    }
}

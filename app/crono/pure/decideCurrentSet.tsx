import * as enums from '../../editor/enums';
import playSound, { A2, F2, C3 } from '../../common/utils/playSound';
import { CronoStateType } from '../redux/cronoTypes';

// TODO: This is tight coupled with the state.
export default function decideCurrentSet(state: CronoStateType, currentTimestamp: number) {
    const step: number = state.running.step;
    const countdown: number = state.sets[step].running.countdown;
    const setMode: string = state.sets[step].running.mode;

    playNotificationSound(countdown);

    // handle explicit skiped sets
    if (enums.SET_MODE_SKIPED === setMode) {
        return skipSet(state, step, setMode, currentTimestamp);
    }

    // do not change current set if not skiped and stil countdown available
    const cronoMode: string = state.running.mode;
    if (countdown <= 0 && enums.CRONO_MODE_AUTO === cronoMode) {
        return skipSet(state, step, setMode, currentTimestamp);
    }

    return state;
}

function skipSet(state: CronoStateType, step: number, setMode: string, currentTimestamp: number) {
    // change set mode
    if (enums.SET_MODE_SKIPED !== setMode) {
        state.sets[step].running.endTimestamp = currentTimestamp;
        state.sets[step].running.mode = enums.SET_MODE_FINISHED;
    }

    // decide next step
    step = step >= state.sets.length - 1 ? -1 : step + 1;
    state.running.step = step;

    // update next set
    if (step >= 0) {
        state.sets[step].running.startTimestamp = currentTimestamp;
        state.sets[step].running.mode = enums.SET_MODE_RUNNING;
    }

    return state;
}

function playNotificationSound(countdown: number): void {
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

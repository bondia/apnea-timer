import Immutable from 'immutable'
import { timerActions } from '../enums/reduxActions'

export function changeBase(base) {
    return { type: timerActions.TIMER_BASE, base }
}

let timer = null
export function startCrono() {
    return (dispatch) => {
        dispatch(initTable())
        clearInterval(timer)
        timer = setInterval(() => dispatch(handleTick()), 1000)
    }
}

function finishCrono() {
    clearInterval(timer)
    return { type: timerActions.TIMER_FINISHED }
}

function initTable() {
    return { type: timerActions.TIMER_INIT }
}

function handleTick(text) {
    return { type: timerActions.TIMER_TICK }
}

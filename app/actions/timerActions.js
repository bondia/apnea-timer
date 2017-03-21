import Immutable from 'immutable'
import { timerActions } from '../enums/reduxActions'

/**
 * Start crono
 * @return {[type]} [description]
 */
let timer = null
function startCrono() {
    return (dispatch) => {
        dispatch(initTable())
        initClock(dispatch)
    }
}

function initTable() {
    return { type: timerActions.TIMER_INIT }
}

function initClock(dispatch) {
    clearInterval(timer)
    timer = setInterval(() => dispatch(handleTick()), 1000)
}

function handleTick(text) {
    return { type: timerActions.TIMER_TICK }
}

export { startCrono }

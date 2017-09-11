import Immutable from 'immutable'
import reduxActions from 'app/main/enums/reduxActions'

let timer = null
function startCrono(data) {
    return (dispatch) => {
        dispatch(initTable(data))
        clearInterval(timer)
        timer = setInterval(() => dispatch(handleTick()), 1000)
    }
}

function finishCrono() {
    clearInterval(timer);
    timer = null;
    return { type: reduxActions.CRONO_TIMER_FINISHED }
}

function initTable(data) {
    return { type: reduxActions.CRONO_TIMER_INIT, data }
}

function handleTick(text) {
    return { type: reduxActions.CRONO_TIMER_TICK }
}

export { startCrono, finishCrono }

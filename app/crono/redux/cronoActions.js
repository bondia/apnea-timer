import Immutable from 'immutable'
import reduxActions from 'app/main/enums/reduxActions'

let timer = null
function startCrono(data) {
    return (dispatch) => {
        clearInterval(timer)
        timer = setInterval(() => dispatch(handleTick()), 1000)
    }
}

function finishCrono() {
    clearInterval(timer);
    timer = null;
    return { type: reduxActions.CRONO_FINISH }
}

function initTable(data) {
    return { type: reduxActions.CRONO_START, data }
}

function handleTick(text) {
    return { type: reduxActions.CRONO_TICK_UP }
}

function skipSet(key) {
    return { type: reduxActions.CRONO_SET_SKIP, key }
}

export { initTable, startCrono, finishCrono, skipSet }

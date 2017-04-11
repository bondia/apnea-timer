import Immutable from 'immutable'

const cronoActionsEnum = {
    TIMER_INIT: 1,
    TIMER_STOP: 2,
    TIMER_TICK: 3,
    TIMER_FINISHED: 4,
}

let timer = null
function startCrono(data) {
    return (dispatch) => {
        dispatch(initTable(data))
        clearInterval(timer)
        timer = setInterval(() => dispatch(handleTick()), 1000)
    }
}

function initTable(data) {
    return { type: cronoActionsEnum.TIMER_INIT, data }
}

function handleTick(text) {
    return { type: cronoActionsEnum.TIMER_TICK }
}

export { cronoActionsEnum, startCrono }

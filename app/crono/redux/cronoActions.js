import reduxActions from 'app/main/enums/reduxActions';

let timer = null;
function startCrono(mode) {
    return (dispatch) => {
        clearInterval(timer);
        dispatch(setCronoMode(mode));
        timer = setInterval(() => dispatch(handleTick()), 1000);
    };
}

function finishCrono() {
    clearInterval(timer);
    timer = null;
    return { type: reduxActions.CRONO_FINISH };
}

function initTable(data) {
    return { type: reduxActions.CRONO_START, data };
}

function setCronoMode(mode) {
    return { type: reduxActions.CRONO_SET_MODE, mode };
}

function handleTick() {
    return { type: reduxActions.CRONO_TICK_UP };
}

function skipSet(key) {
    return { type: reduxActions.CRONO_SET_SKIP, key };
}

export { initTable, startCrono, finishCrono, skipSet };

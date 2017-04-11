
const timerActionsEnum = {
    CREATOR_TIMER_BASE: 'CREATOR_TIMER_BASE'
}

function changeBase(base) {
    return { type: timerActionsEnum.CREATOR_TIMER_BASE, base }
}

export { changeBase, timerActionsEnum }

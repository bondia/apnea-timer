
const timerActionsEnum = {
    CREATOR_TIMER_BASE: 'CREATOR_TIMER_BASE',
    CREATOR_ITEM_CHANGE: 'CREATOR_ITEM_CHANGE'
}

function changeBase(base) {
    return { type: timerActionsEnum.CREATOR_TIMER_BASE, base }
}

function increaseTimeItem(key, amount) {
    return changeItem(key, amount)
}

function decreaseTimeItem(key, amount) {
    return changeItem(key, -amount)
}

function changeItem(key, amount) {
    return { type: timerActionsEnum.CREATOR_ITEM_CHANGE, key, amount }
}

export { changeBase, increaseTimeItem, decreaseTimeItem, timerActionsEnum }

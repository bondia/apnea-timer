
const timerActionsEnum = {
    EDITOR_CHANGE_BASE: 'EDITOR_CHANGE_BASE',
    EDITOR_CHANGE_TYPE: 'EDITOR_CHANGE_TYPE',
    EDITOR_CHANGE_TIME_ITEM: 'EDITOR_CHANGE_TIME_ITEM'
}

function changeTableBase(base) {
    return { type: timerActionsEnum.EDITOR_CHANGE_BASE, base }
}

function changeTableType(base, tableType) {
    return { type: timerActionsEnum.EDITOR_CHANGE_TYPE, base, tableType }
}

function increaseTimeItem(key, amount) {
    return changeTimeItem(key, amount)
}

function decreaseTimeItem(key, amount) {
    return changeTimeItem(key, -amount)
}

function changeTimeItem(key, amount) {
    return { type: timerActionsEnum.EDITOR_CHANGE_TIME_ITEM, key, amount }
}

export { changeTableBase, changeTableType, increaseTimeItem, decreaseTimeItem, timerActionsEnum }

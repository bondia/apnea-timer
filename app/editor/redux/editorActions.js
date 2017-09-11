import reduxActions from 'app/main/enums/reduxActions'

function changeTableBase(base) {
    return { type: reduxActions.EDITOR_CHANGE_BASE, base }
}

function changeTableType(base, tableType) {
    return { type: reduxActions.EDITOR_CHANGE_TYPE, base, tableType }
}

function increaseTimeItem(key, amount) {
    return changeTimeItem(key, amount)
}

function decreaseTimeItem(key, amount) {
    return changeTimeItem(key, -amount)
}

function changeTimeItem(key, amount) {
    return { type: reduxActions.EDITOR_CHANGE_TIME_ITEM, key, amount }
}

export { changeTableBase, changeTableType, increaseTimeItem, decreaseTimeItem }

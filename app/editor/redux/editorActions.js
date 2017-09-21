import reduxActions from 'app/main/enums/reduxActions';

function changeTableBase(base) {
    return { type: reduxActions.EDITOR_BASE_CHANGE, base };
}

function changeTableType(base, tableType) {
    return { type: reduxActions.EDITOR_TYPE_CHANGE, base, tableType };
}

function increaseTimeItem(key, amount) {
    return changeTimeItem(key, amount);
}

function decreaseTimeItem(key, amount) {
    return changeTimeItem(key, -amount);
}

function changeTimeItem(key, amount) {
    return { type: reduxActions.EDITOR_SET_DURATION_CHANGE, key, amount };
}

export { changeTableBase, changeTableType, increaseTimeItem, decreaseTimeItem };

import reduxActions from 'app/main/enums/reduxActions';
import { setTableBase, setTableType, updateDurationAtKey } from '../utils/mutations';

/**
 * Change table base action
 * TODO: Refactor that
 */
function changeTableBase(base) {
    return (dispatch, getState) => {
        const { editor } = getState();
        const newState = setTableBase(editor, base);
        dispatch(replaceState(newState));
    };
}

/**
 * Change table type action
 * TODO: Refactor that
 */
function changeTableType(base, tableType) {
    return (dispatch, getState) => {
        const { editor } = getState();
        const newState = setTableType(editor, base, tableType);
        dispatch(replaceState(newState));
    };
}

/**
 * Changing sets times
 */
function increaseTimeItem(key, amount) {
    return changeTimeItem(key, amount);
}

function decreaseTimeItem(key, amount) {
    return changeTimeItem(key, -amount);
}

// TODO: Refactor that
function changeTimeItem(key, amount) {
    return (dispatch, getState) => {
        const { editor } = getState();
        const newState = updateDurationAtKey(editor, key, amount);
        dispatch(replaceState(newState));
    };
}

// TODO: remove that
function replaceState(state) {
    return { type: reduxActions.EDITOR_REPLACE_STATE, state };
}

export { changeTableBase, changeTableType, increaseTimeItem, decreaseTimeItem };

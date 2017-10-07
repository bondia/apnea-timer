import reduxActions from 'app/main/enums/reduxActions';
import { createEditorState, setTableBase, setTableType, updateDurationAtKey } from '../utils/mutations';

export default function editorReducer(state = createEditorState(120), action) {
    if (action.type == reduxActions.EDITOR_BASE_CHANGE) {
        return setTableBase(state, action.base);
    }

    if (action.type == reduxActions.EDITOR_TYPE_CHANGE) {
        return setTableType(state, action.base, action.tableType);
    }

    if (action.type == reduxActions.EDITOR_SET_DURATION_CHANGE) {
        return updateDurationAtKey(state, action.key, action.amount);
    }

    return state;
}

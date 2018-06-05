import reduxActions from 'app/main/enums/reduxActions';
import { createEditorState } from '../utils/mutations';

export default function editorReducer(state=createEditorState(120), action) {

    // set base
    if (action.type == reduxActions.EDITOR_SET_TABLE_BASE) {
        return state.setIn(['trainingTable', 'base'], action.base);
    }

    // set type
    if (action.type == reduxActions.EDITOR_SET_TABLE_TYPE) {
        return state.setIn(['trainingTable', 'type'], action.type);
    }

    // set duration
    if (action.type == reduxActions.EDITOR_SET_TABLE_DURATION) {
        return state.setIn(['trainingTable', 'duration'], action.duration);
    }

    // set sets
    if (action.type == reduxActions.EDITOR_REPLACE_SETS) {
        return state.setIn(['sets'], action.sets);
    }

    // TODO: REFACTORING - This shoudl be gone

    if (action.type == reduxActions.EDITOR_REPLACE_STATE) {
        return action.state;
    }

    return state;
}

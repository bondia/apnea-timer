import { combineReducers } from 'redux';

import editorReducer from '../../editor/redux/editorReducer';
import cronoReducer from '../../crono/redux/cronoReducer';

function initReducers() {
    return combineReducers({
        editor: editorReducer,
        crono: cronoReducer
    });
}

export { initReducers };

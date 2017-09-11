import { combineReducers } from 'redux'

import editorReducer from 'app/editor/redux/editorReducer'
import cronoReducer from 'app/crono/redux/cronoReducer'

function initReducers() {
    return combineReducers({
        editor: editorReducer,
        crono: cronoReducer
    })
}

export { initReducers }

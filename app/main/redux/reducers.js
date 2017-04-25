import { combineReducers } from 'redux'

import editorReducer from 'app/editor/redux/editorReducer'
import cronoReducer from 'app/crono/redux/cronoReducer'

export default combineReducers({
    editor: editorReducer,
    crono: cronoReducer

})

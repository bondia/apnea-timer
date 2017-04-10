import { combineReducers } from 'redux'

import timerReducer from 'app/crono/redux/timerReducer'

export default combineReducers({
    timer: timerReducer
})

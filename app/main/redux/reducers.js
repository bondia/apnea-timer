import { combineReducers } from 'redux'

import creatorReducer from 'app/creator/redux/creatorReducer'
import cronoReducer from 'app/crono/redux/cronoReducer'

export default combineReducers({
    creator: creatorReducer,
    crono: cronoReducer

})

import reduxActions from 'app/main/enums/reduxActions'
import { createTable, changeTableBase, changeTableType, updateDurationAtKey } from '../services/tableMutations'

export default train = (state = createTable(120), action) => {

    if (action.type == reduxActions.EDITOR_CHANGE_BASE) {
        return changeTableBase(state, action.base)
    }

    if (action.type == reduxActions.EDITOR_CHANGE_TYPE) {
        return changeTableType(state, action.base, action.tableType)
    }

    if (action.type == reduxActions.EDITOR_CHANGE_TIME_ITEM) {
        return updateDurationAtKey(state, action.key, action.amount)
    }

    return state
}

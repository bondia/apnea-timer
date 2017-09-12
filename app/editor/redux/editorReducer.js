import reduxActions from 'app/main/enums/reduxActions'
import createEditorState from '../utils/mutations/createEditorState'
import setTableBase from '../utils/mutations/setTableBase'
import setTableType from '../utils/mutations/setTableType'
import updateDurationAtKey from '../utils/mutations/updateDurationAtKey'

export default train = (state = createEditorState(120), action) => {

    if (action.type == reduxActions.EDITOR_BASE_CHANGE) {
        return setTableBase(state, action.base)
    }

    if (action.type == reduxActions.EDITOR_TYPE_CHANGE) {
        return setTableType(state, action.base, action.tableType)
    }

    if (action.type == reduxActions.EDITOR_SET_DURATION_CHANGE) {
        return updateDurationAtKey(state, action.key, action.amount)
    }

    return state
}

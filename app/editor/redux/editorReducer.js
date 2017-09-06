import { timerActionsEnum } from './editorActions'
import { createTable, changeBase, updateDurationAtKey } from '../services/tableMutations'

export default train = (state = createTable(120), action) => {

    if (action.type == timerActionsEnum.CREATOR_TIMER_BASE) {
        return changeBase(state, action.base)
    }

    if (action.type == timerActionsEnum.CREATOR_ITEM_CHANGE) {
        return updateDurationAtKey(state, action.key, action.amount)
    }

    return state
}

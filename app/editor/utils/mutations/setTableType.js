import createEditorState from './createEditorState'

/**
 * Change table type
 * @param  Immutable state
 * @param  Integer base
 * @param  String type
 * @return Immutable
 */
export default function setTableType(state, base, type) {
    return createEditorState(base, type)
}

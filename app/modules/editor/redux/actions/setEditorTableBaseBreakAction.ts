import { AnyAction } from 'redux';
import { EditorStateType } from '../../editorTypes';

export const SET_EDITOR_TABLE_BASE_BREAKS = 'SET_EDITOR_TABLE_BASE_BREAKS';

export type SetEditorTableBaseBreakAction = AnyAction & {
  baseBreaks: number;
};

const setEditorTableBaseBreakAction = (baseBreaks: number): SetEditorTableBaseBreakAction => ({
  type: SET_EDITOR_TABLE_BASE_BREAKS,
  baseBreaks,
});

export const reduceSetEditorTableBaseBreakAction = (
  state: EditorStateType,
  action: SetEditorTableBaseBreakAction,
): EditorStateType => ({
  ...state,
  trainingTable: {
    ...state.trainingTable,
    baseBreaks: action.baseBreaks,
  },
});

export default setEditorTableBaseBreakAction;

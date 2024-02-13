import { AnyAction } from 'redux';
import { EditorStateType } from '../../editorTypes';

export const SET_EDITOR_TABLE_BASE = 'SET_EDITOR_TABLE_BASE';

export type SetEditorTableBaseAction = AnyAction & {
  baseMilliseconds: number;
};

const setEditorTableBaseAction = (
  baseMilliseconds: number,
): SetEditorTableBaseAction => ({
  type: SET_EDITOR_TABLE_BASE,
  baseMilliseconds,
});

export const reduceSetEditorTableBaseAction = (
  state: EditorStateType,
  action: SetEditorTableBaseAction,
): EditorStateType => ({
  ...state,
  trainingTable: {
    ...state.trainingTable,
    baseMilliseconds: action.baseMilliseconds,
  },
});

export default setEditorTableBaseAction;

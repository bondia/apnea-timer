import { AnyAction } from 'redux';
import { MillisecondsType } from '../../../../types';
import { EditorStateType } from '../../editorTypes';

export const SET_EDITOR_TABLE_BASE = 'SET_EDITOR_TABLE_BASE';

export type SetEditorTableBaseAction = AnyAction & {
  base: MillisecondsType;
};

const setEditorTableBaseAction = (
  base: MillisecondsType,
): SetEditorTableBaseAction => ({
  type: SET_EDITOR_TABLE_BASE,
  base,
});

export const reduceSetEditorTableBaseAction = (
  state: EditorStateType,
  action: SetEditorTableBaseAction,
): EditorStateType => ({
  ...state,
  trainingTable: {
    ...state.trainingTable,
    base: action.base,
  },
});

export default setEditorTableBaseAction;

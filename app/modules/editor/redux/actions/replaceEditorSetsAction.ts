import { AnyAction } from 'redux';
import { EditorStateType, TableSetListType } from '../../editorTypes';

export const REPLACE_EDITOR_SETS = 'REPLACE_EDITOR_SETS';

export type ReplaceEditorSetsAction = AnyAction & {
  sets: TableSetListType;
};

const replaceEditorSetsAction = (sets: TableSetListType): ReplaceEditorSetsAction => ({
  type: REPLACE_EDITOR_SETS,
  sets,
});

export const reduceReplaceEditorSetsAction = (
  state: EditorStateType,
  action: ReplaceEditorSetsAction,
): EditorStateType => ({
  ...state,
  sets: action.sets,
});

export default replaceEditorSetsAction;

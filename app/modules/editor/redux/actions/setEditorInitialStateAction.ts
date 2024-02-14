import { AnyAction } from 'redux';
import { EditorStateType } from '../../editorTypes';

export const SET_EDITOR_INITIAL_STATE = 'SET_EDITOR_INITIAL_STATE';

export type SetEditorInitialStateAction = AnyAction & {
  state: EditorStateType;
};

const setEditorInitialStateAction = (
  state: EditorStateType,
): SetEditorInitialStateAction => ({
  type: SET_EDITOR_INITIAL_STATE,
  state,
});

export const reduceSetEditorInitialStateAction = (
  _state: EditorStateType | null,
  action: SetEditorInitialStateAction,
): EditorStateType => action.state;

export default setEditorInitialStateAction;

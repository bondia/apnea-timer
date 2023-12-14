import { AnyAction } from 'redux';
import { EditorStateType } from '../../editorTypes';

export const SET_EDITOR_TABLE_DURATION = 'SET_EDITOR_TABLE_DURATION';

export type SetEditorTableDurationAction = AnyAction & {
  duration: number;
};

const setEditorTableDurationAction = (duration: number): SetEditorTableDurationAction => ({
  type: SET_EDITOR_TABLE_DURATION,
  duration,
});

export const reduceSetEditorTableDurationAction = (
  state: EditorStateType,
  action: SetEditorTableDurationAction,
): EditorStateType => ({
  ...state,
  trainingTable: {
    ...state.trainingTable,
    duration: action.duration,
  },
});

export default setEditorTableDurationAction;

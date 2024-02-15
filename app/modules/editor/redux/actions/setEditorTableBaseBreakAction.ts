import { AnyAction } from 'redux';
import { MillisecondsType } from '../../../../types';
import { EditorStateType } from '../../editorTypes';

export const SET_EDITOR_TABLE_BASE_BREAKS = 'SET_EDITOR_TABLE_BASE_BREAKS';

export type SetEditorTableBaseBreakAction = AnyAction & {
  baseBreaks: MillisecondsType;
};

const setEditorTableBaseBreakAction = (
  baseBreaks: MillisecondsType,
): SetEditorTableBaseBreakAction => ({
  type: SET_EDITOR_TABLE_BASE_BREAKS,
  baseBreaks,
});

export const reduceSetEditorTableBaseBreakAction = (
  state: EditorStateType,
  action: SetEditorTableBaseBreakAction,
): EditorStateType => {
  return {
    ...state,
    trainingTable: {
      ...state.trainingTable,
      baseBreaks: action.baseBreaks,
    },
  };
};

export default setEditorTableBaseBreakAction;

import { AnyAction } from 'redux';

export const SET_EDITOR_TABLE_BASE_BREAKS = 'SET_EDITOR_TABLE_BASE_BREAKS';

export type SetEditorTableBaseBreakAction = AnyAction & {
  baseBreaks: number;
};

const setEditorTableBaseBreakAction = (baseBreaks: number): SetEditorTableBaseBreakAction => ({
  type: SET_EDITOR_TABLE_BASE_BREAKS,
  baseBreaks,
});

export default setEditorTableBaseBreakAction;

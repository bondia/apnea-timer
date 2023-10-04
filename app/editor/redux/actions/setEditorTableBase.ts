import { AnyAction } from 'redux';

export const SET_EDITOR_TABLE_BASE = 'SET_EDITOR_TABLE_BASE';

export type SetEditorTableBaseAction = AnyAction & {
  base: number;
};

const setEditorTableBaseAction = (base: number): SetEditorTableBaseAction => ({
  type: SET_EDITOR_TABLE_BASE,
  base,
});

export default setEditorTableBaseAction;

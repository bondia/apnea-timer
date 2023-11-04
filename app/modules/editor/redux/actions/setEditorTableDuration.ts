import { AnyAction } from 'redux';

export const SET_EDITOR_TABLE_DURATION = 'SET_EDITOR_TABLE_DURATION';

export type SetEditorTableDurationAction = AnyAction & {
  duration: number;
};

const setEditorTableDuration = (duration: number): SetEditorTableDurationAction => ({
  type: SET_EDITOR_TABLE_DURATION,
  duration,
});

export default setEditorTableDuration;

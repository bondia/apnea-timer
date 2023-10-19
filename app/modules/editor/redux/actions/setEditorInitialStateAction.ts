import { AnyAction } from 'redux';
import { ImmutableTrainingTableType } from '../editorTypes';

export const SET_EDITOR_INITIAL_STATE = 'SET_EDITOR_INITIAL_STATE';

export type SetEditorInitialStateAction = AnyAction & {
  state: ImmutableTrainingTableType;
};

const setEditorInitialStateAction = (state: ImmutableTrainingTableType): SetEditorInitialStateAction => ({
  type: SET_EDITOR_INITIAL_STATE,
  state,
});

export default setEditorInitialStateAction;

import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { CronoStateType } from '../modules/crono/cronoTypes';
import { EditorStateType } from '../modules/editor/editorTypes';

export type RootState = {
  editor: EditorStateType;
  crono: CronoStateType | null;
};

export type StoreThunkAction = ThunkAction<void, RootState, undefined, AnyAction>;
export type StoreThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export const defaultEmptyAction = { type: undefined };

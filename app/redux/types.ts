import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { EditorStateType } from '../modules/editor/editorTypes';
import { CronoStateType } from '../modules/crono/redux/CronoTypes';

export type RootState = {
  editor: EditorStateType;
  crono: CronoStateType;
};

export type StoreThunkAction = ThunkAction<void, RootState, undefined, AnyAction>;
export type StoreThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export const defaultEmptyAction = { type: undefined };

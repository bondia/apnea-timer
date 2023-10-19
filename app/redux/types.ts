import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ImmutableJSCronoType } from '../modules/crono/redux/CronoTypes';
import { ImmutableJSEditorStateType } from '../modules/editor/redux/editorTypes';

export type RootState = {
  editor: ImmutableJSEditorStateType;
  crono: ImmutableJSCronoType;
};

export type StoreThunkAction = ThunkAction<void, RootState, undefined, AnyAction>;

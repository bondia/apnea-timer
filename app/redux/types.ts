import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ImmutableJSCronoType } from '../crono/redux/CronoTypes';
import { ImmutableJSEditorStateType } from '../editor/redux/editorTypes';

export type RootState = {
  editor: ImmutableJSEditorStateType;
  crono: ImmutableJSCronoType;
};

export type StoreThunkAction = ThunkAction<void, RootState, undefined, AnyAction>;

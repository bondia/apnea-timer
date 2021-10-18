import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ImmutableJSCronoType } from '../crono/redux/cronoTypes';
import { ImmutableJSEditorStateType } from '../editor/redux/editorTypes';

export interface StoreState {
  editor: ImmutableJSEditorStateType;
  crono: ImmutableJSCronoType;
}

export type StoreThunkAction = ThunkAction<void, StoreState, undefined, AnyAction>;

import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ImmutableJSCronoType } from '../modules/crono/redux/CronoTypes';
import { EditorStateType, ImmutableJSEditorStateType } from '../modules/editor/editorTypes';
import { FixMe } from '../types';

export type RootState = {
  editor: ImmutableJSEditorStateType;
  crono: ImmutableJSCronoType;
};

export type StoreThunkAction = ThunkAction<void, RootState, undefined, AnyAction>;
export type StoreThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

/**
 * TODO: Remove immutable js
 */
export type ImmutableJSType = {
  get: (prop: string) => FixMe;
  getIn: (stack: string[]) => FixMe;
  setIn: (stack: string[], data: FixMe) => FixMe;
  set: (prop: string, data: FixMe) => FixMe;
  update: (stack: string[] | string, cb: (data: FixMe) => FixMe) => FixMe;
  toJS: () => EditorStateType;
};

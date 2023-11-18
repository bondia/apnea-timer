import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ImmutableJSCronoType } from '../modules/crono/redux/CronoTypes';
import { EditorStateType } from '../modules/editor/editorTypes';
import { FixMe } from '../types';

export type RootState = {
  editor: EditorStateType;
  crono: ImmutableJSCronoType;
};

export type StoreThunkAction = ThunkAction<void, RootState, undefined, AnyAction>;
export type StoreThunkDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

// TODO: Find better place
export const defaultEmptyAction = { type: undefined };

/**
 * TODO: Remove immutable js
 */
export type ImmutableJSType = {
  get: <T>(prop: string) => T;
  getIn: <T>(stack: (string | number)[]) => T;
  setIn: <T>(stack: (string | number)[], data: FixMe) => T;
  set: <T>(prop: string, data: FixMe) => T;
  toJS: <T>() => T;
  update: <T>(stack: (string | number)[] | string, cb: (data: FixMe) => FixMe) => T;
  updateIn<T>(arg0: (string | number)[], arg1: (item: ImmutableJSType) => boolean): T;
  find<T>(arg0: (item: ImmutableJSType) => boolean): T;
  filter<T>(arg0: (item: ImmutableJSType) => boolean): T;
  map<T>(arg0: (item: ImmutableJSType) => ImmutableJSType): T;
  size: number;
};

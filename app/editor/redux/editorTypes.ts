import { SetType } from '../enums';
import {
  ChangeEnduranceLapsType,
  ChangeTableBaseBreaksType,
  ChangeTableBaseType,
  ChangeTableTypeType,
  CreateEnduranceTableType,
  DecreaseTimeItemType,
  IncreaseTimeItemType,
} from './editorActions';

export type EditorStateType = {
  trainingTable: TableType;
  sets: TableSetType[];
};

export type TableType = {
  base: number;
  type: string;
  duration: number;
  // endurance
  baseBreaks?: number;
  enduranceLaps?: number;
};

export type TableSetType = {
  duration: number;
  type: SetType;
  pos: number;
};

// REDUX ACTIONS

export type EditorActionsTypes = {
  changeTableType: ChangeTableTypeType;
  changeTableBase: ChangeTableBaseType;
  changeTableBaseBreaks: ChangeTableBaseBreaksType;
  increaseTimeItem: IncreaseTimeItemType;
  decreaseTimeItem: DecreaseTimeItemType;
  createEnduranceTable: CreateEnduranceTableType;
  changeEnduranceLaps: ChangeEnduranceLapsType;
};

/**
 * TODO: Remove immutable js
 */
export type ImmutableJSType = {
  get: (prop: string) => any;
  getIn: (stack: string[]) => any;
  update: (stack: string[] | string, cb: (data: any) => any) => any;
  toJS: () => EditorStateType;
};

export type ImmutableJSEditorStateType = ImmutableJSType;

export type ImmutableJSEditorType = ImmutableJSType;

export type ImmutableJSEditorSetType = TableSetType & ImmutableJSType;

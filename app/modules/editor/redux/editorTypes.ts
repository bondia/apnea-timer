import { FixMe } from '../../../types';
import { TableTypeEnum, SetTypeEnum } from '../enums';
import {
  ChangeEnduranceLapsType,
  EditorChangeTableBaseAction,
  ChangeTableTypeType,
  CreateEnduranceTableType,
} from './editorActions';

export type EditorStateType = {
  trainingTable: TableType;
  sets: TableSetType[];
};

export type TableType = {
  base: number;
  type: TableTypeEnum;
  duration: number;
  // endurance
  baseBreaks?: number;
  enduranceLaps?: number;
};

export type TableSetType = {
  duration: number;
  type: SetTypeEnum;
  pos: number;
};

// REDUX ACTIONS

export type EditorActionsTypes = {
  changeTableType: ChangeTableTypeType;
  changeTableBase: EditorChangeTableBaseAction;
  createEnduranceTable: CreateEnduranceTableType;
  changeEnduranceLaps: ChangeEnduranceLapsType;
};

/**
 * TODO: Remove immutable js
 */
export type ImmutableJSType = {
  get: (prop: string) => FixMe;
  getIn: (stack: string[]) => FixMe;
  setIn: (stack: string[], data: FixMe) => FixMe;
  update: (stack: string[] | string, cb: (data: FixMe) => FixMe) => FixMe;
  toJS: () => EditorStateType;
};

export type ImmutableJSEditorStateType = ImmutableJSType;
export type ImmutableJSEditorType = ImmutableJSType;
export type ImmutableTrainingTableType = ImmutableJSType;
export type ImmutableJSEditorSetType = TableSetType & ImmutableJSType;

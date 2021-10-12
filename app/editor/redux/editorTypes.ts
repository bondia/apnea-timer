import {
  ChangeEnduranceLapsType,
  ChangeTableBaseBreaksType,
  ChangeTableBaseType,
  ChangeTableTypeType,
  CreateEnduranceTableType,
  DecreaseTimeItemType,
  IncreaseTimeItemType,
} from './editorActions';

export interface EditorStateType {
  trainingTable: TableType;
  sets: TableSetType[];
}

export interface TableType {
  base: number;
  type: string;
  duration: number;
  // endurance
  baseBreaks?: number;
  enduranceLaps?: number;
}

export interface TableSetType {
  duration: number;
  type: number;
  pos: number;
}

// REDUX ACTIONS

export interface EditorActionsTypes {
  changeTableType: ChangeTableTypeType;
  changeTableBase: ChangeTableBaseType;
  changeTableBaseBreaks: ChangeTableBaseBreaksType;
  increaseTimeItem: IncreaseTimeItemType;
  decreaseTimeItem: DecreaseTimeItemType;
  createEnduranceTable: CreateEnduranceTableType;
  changeEnduranceLaps: ChangeEnduranceLapsType;
}

/**
 * TODO: Remove immutable js
 */
export interface ImmutableJSType {
  get: (prop: string) => any;
  getIn: (stack: string[]) => any;
  update: (stack: string[] | string, cb: (data: any) => any) => any;
}

export interface ImmutableJSEditorStateType extends ImmutableJSType {
  toJS: () => EditorStateType;
}

export interface ImmutableJSEditorType extends ImmutableJSType {
  toJS: () => TableType;
}

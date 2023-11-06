import { ImmutableJSType } from '../../redux/types';
import { TableTypeEnum, SetTypeEnum } from './enums';

export type EditorStateType = {
  trainingTable: TableType;
  sets: TableSetType[];
};

export type TableType = {
  base: number;
  type: TableTypeEnum;
  duration: number;
  // endurance attributes
  baseBreaks?: number;
  enduranceLaps?: number;
};

export type TableSetType = {
  duration: number;
  type: SetTypeEnum;
  pos: number;
};

// TODO: Removing immubtale
export type ImmutableJSEditorStateType = ImmutableJSType;
export type ImmutableJSEditorType = ImmutableJSType;
export type ImmutableTrainingTableType = ImmutableJSType;
export type ImmutableJSEditorSetType = TableSetType & ImmutableJSType;

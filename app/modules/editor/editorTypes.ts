import { ImmutableJSType } from '../../redux/types';
import { TableTypeEnum, SetTypeEnum } from './enums';

export type EditorStateType = {
  trainingTable: TrainingTableType;
  sets: TableSetType[];
};

export type TrainingTableType = {
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
  zombie: boolean;
};

export type TableSetListType = TableSetType[];

// TODO: Remove immubtale
export type ImmutableJSEditorStateType = ImmutableJSType;
export type ImmutableTrainingTableType = ImmutableJSType;
export type ImmutableJSTableSetType = ImmutableJSType;

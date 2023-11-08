import { ImmutableJSType } from '../../redux/types';
import { TableTypeEnum, SetTypeEnum } from './enums';

export type EditorStateType = {
  trainingTable: TrainingTableType;
  sets: TableSetType[];
};
export type ImmutableJSEditorStateType = EditorStateType & ImmutableJSType;

export type TrainingTableType = {
  base: number;
  type: TableTypeEnum;
  duration: number;
  // endurance attributes
  baseBreaks?: number;
  enduranceLaps?: number;
};
export type ImmutableTrainingTableType = TrainingTableType & ImmutableJSType;

export type TableSetType = {
  duration: number;
  type: SetTypeEnum;
  pos: number;
  zombie: boolean;
};
export type ImmutableJSTableSetType = ImmutableJSType;

export type TableSetListType = TableSetType[];
export type ImmutableJSTableSetListType = ImmutableJSType;

// TODO: Remove immubtale

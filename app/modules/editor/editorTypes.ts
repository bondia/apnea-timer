import { TableTypeEnum, SetTypeEnum } from './enums';

export type EditorStateType = {
  trainingTable: TrainingTableType | EnduranceTrainingTableType;
  sets: TableSetListType;
};

export type TrainingTableType = {
  base: number;
  type: TableTypeEnum;
  duration: number;
};

export type EnduranceTrainingTableType = TrainingTableType & {
  baseBreaks: number;
  enduranceLaps: number;
};

export type TableSetListType = TableSetType[];

export type TableSetType = {
  duration: number;
  type: SetTypeEnum;
  pos: number;
  zombie: boolean;
};

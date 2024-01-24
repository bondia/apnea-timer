import { SetTypeEnum, TableTypeEnum } from './enums';

export type EditorStateType = {
  trainingTable: TrainingTableType | EnduranceTrainingTableType;
  sets: TableSetListType;
};

export type TrainingTableType = {
  // TODO: Use Milliseconds
  base: number;
  type: TableTypeEnum;
  // TODO: Use Milliseconds
  duration: number;
};

export type EnduranceTrainingTableType = TrainingTableType & {
  // TODO: Use Milliseconds
  baseBreaks: number;
  enduranceLaps: number;
};

export type TableSetListType = TableSetType[];

export type TableSetType = {
  // TODO: Use Milliseconds
  duration: number;
  type: SetTypeEnum;
  pos: number;
  zombie: boolean;
};

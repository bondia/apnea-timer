import { TableTypeEnum, SetTypeEnum } from './enums';

export type EditorStateType = {
  trainingTable: TrainingTableType;
  sets: TableSetListType;
};

export type TrainingTableType = {
  base: number;
  type: TableTypeEnum;
  duration: number;
  // TODO: endurance attributes
  baseBreaks?: number;
  enduranceLaps?: number;
};

export type TableSetListType = TableSetType[];

export type TableSetType = {
  duration: number;
  type: SetTypeEnum;
  pos: number;
  zombie: boolean;
};

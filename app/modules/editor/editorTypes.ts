import { MillisecondsType } from '../../types';
import { SetTypeEnum, TableTypeEnum } from './enums';

export type EditorStateType = {
  trainingTable: TrainingTableType | EnduranceTrainingTableType;
  sets: TableSetListType;
};

export type TrainingTableType = {
  base: MillisecondsType;
  type: TableTypeEnum;
  duration: MillisecondsType;
};

export type EnduranceTrainingTableType = TrainingTableType & {
  baseBreaks: MillisecondsType;
  enduranceLaps: number;
};

export type TableSetListType = TableSetType[];

export type TableSetType = {
  duration: MillisecondsType;
  type: SetTypeEnum;
  pos: number;
  zombie: boolean;
};

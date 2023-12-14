import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { TableSetType, TrainingTableType } from '../../editor/editorTypes';

export type CronoStateType = {
  trainingTable: TrainingTableType;
  running: CronoRunningType;
  sets: CronoSetListType;
};

export type CronoRunningType = {
  startTimestamp?: number;
  clock: number;
  step: number;
  mode: CronoModeEnum;
  countdown?: number;
  contractions: number;
};

export type CronoSetListType = CronoSetType[];

export type CronoSetType = TableSetType & {
  running: CronoSetRunningType;
};

export type CronoSetRunningType = {
  startTimestamp?: number;
  endTimestamp?: number;
  mode: SetModeEnum;
  originalCountdown: number;
  countdown: number;
  contraction: number;
};

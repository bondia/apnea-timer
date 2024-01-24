import { TableSetType, TrainingTableType } from '../editor/editorTypes';
import { CronoModeEnum, SetModeEnum } from '../editor/enums';

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
  // TODO: Convert countdown to milliseconds
  countdown?: number;
  // TODO: Convert countdown to milliseconds
  contractions: number;
};

export type CronoSetListType = CronoSetType[];

export type CronoSetType = TableSetType & {
  running: CronoSetRunningType;
};

export type CronoSetRunningType = {
  mode: SetModeEnum;

  // timestamps (miliseconds)
  startTimestamp: number;
  endTimestamp: number;
  targetEndTimestamp: number;
  originalDurationMiliseconds: number;

  /** @deprecated using seconds to calculate */
  countdown: number;

  // TODO: unknown type
  contraction: number;
};

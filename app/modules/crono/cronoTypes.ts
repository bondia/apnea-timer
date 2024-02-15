import { MillisecondsType } from '../../types';
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
  // timestamps (miliseconds)
  contractions: number;
};

export type CronoSetListType = CronoSetType[];

export type CronoSetType = TableSetType & {
  running: CronoSetRunningType;
};

export type CronoSetRunningType = {
  mode: SetModeEnum;
  startTimestamp: MillisecondsType;
  endTimestamp: MillisecondsType;
  targetEndTimestamp: MillisecondsType;
  originalDurationMiliseconds: MillisecondsType;
  contraction: MillisecondsType;
};

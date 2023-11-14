import { Action } from 'redux';
import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { TableSetType, TrainingTableType } from '../../editor/editorTypes';
import { InitTableAction } from './creators/initTableAction';
import { TrackContractionType } from './creators/trackContractionAction';
import { SkipSetType, StartCronoType } from './cronoActions';
import { ImmutableJSType } from '../../../redux/types';

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

/**
 * TODO: Remove immutable js
 */
export type ImmutableJSCronoStateType = ImmutableJSType;
export type ImmutableJSCronoType = ImmutableJSType;
export type ImmutableJSCronoSetType = ImmutableJSType;

// REDUX ACTIONS

export type CronoActionsTypes = {
  initTable: InitTableAction;
  startCrono: StartCronoType;
  skipSet: SkipSetType;
  trackContraction: TrackContractionType;
  clearCrono: () => Action;
};

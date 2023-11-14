import { Action } from 'redux';
import { CronoModeEnum, SetModeEnum } from '../../editor/enums';
import { TableSetType, TrainingTableType } from '../../editor/editorTypes';
import { InitTableAction } from './creators/initTableAction';
import { TrackContractionType } from './creators/trackContractionAction';
import { SkipSetType, StartCronoType } from './cronoActions';
import { ImmutableJSType } from '../../../redux/types';

// TYPES

export type CronoStateType = {
  trainingTable: CronoType;
  running: CronoRunningType;
  sets: CronoSetType[];
};

export type CronoType = TrainingTableType;

export type CronoRunningType = {
  startTimestamp?: number;
  clock: number;
  step: number;
  mode: CronoModeEnum;
  countdown?: number;
  contractions: number;
};

export type CronoSetType = TableSetType &
  ImmutableJSType & {
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

// REDUX ACTIONS

export type CronoActionsTypes = {
  initTable: InitTableAction;
  startCrono: StartCronoType;
  skipSet: SkipSetType;
  trackContraction: TrackContractionType;
  clearCrono: () => Action;
};

/**
 * TODO: Remove immutable js
 */
export type ImmutableJSCronoType = ImmutableJSType;

export type ImmutableJSSetType = ImmutableJSType;

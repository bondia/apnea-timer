import { TableSetType, TableType } from '../../editor/redux/editorTypes';
import { InitTableAction } from './creators/initTableAction';
import {
  ClearCronoType,
  SkipSetType,
  StartCronoType,
  TrackContractionType
} from './cronoActions';

// TYPES

export interface CronoStateType {
  trainingTable: CronoType;
  running: CronoRunningType;
  sets: CronoSetType[];
}

export interface CronoType extends TableType {}

export interface CronoRunningType {
  startTimestamp?: number;
  clock: number;
  step: number;
  mode: string;
  contractions: number;
}

export interface CronoSetType extends TableSetType, ImmutableJSObject {
  running: CronoSetRunningType;
}

export interface CronoSetRunningType {
  startTimestamp?: number;
  endTimestamp?: number;
  mode: string;
  originalCountdown: number;
  countdown: number;
  contraction: number;
}

// REDUX ACTIONS

export interface CronoActionsTypes {
  initTable: InitTableAction;
  startCrono: StartCronoType;
  skipSet: SkipSetType;
  trackContraction: TrackContractionType;
  clearCrono: ClearCronoType;
}

/**
 * TODO: Remove immutable js
 */
export interface ImmutableJSCronoType extends ImmutableJSObject {}

export interface ImmutableJSSetType extends ImmutableJSObject {}

export interface ImmutableJSObject {
  get: (prop: string) => any;
  getIn: (stack: string[]) => any;
  setIn: (stack: string[], value: unknown) => any;
  toJS: <T>() => T;
  updateIn(arg0: string[], arg1: (sets: any) => any): ImmutableJSCronoType;
}

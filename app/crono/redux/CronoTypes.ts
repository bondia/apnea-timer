import { Action } from 'redux';
import { SetMode } from '../../editor/enums';
import { TableSetType, TableType } from '../../editor/redux/editorTypes';
import { InitTableAction } from './creators/initTableAction';
import { TrackContractionType } from './creators/trackContractionAction';
import { SkipSetType, StartCronoType } from './cronoActions';

// TYPES

export interface CronoStateType {
  trainingTable: CronoType;
  running: CronoRunningType;
  sets: CronoSetType[];
}

export type CronoType = TableType;

export interface CronoRunningType {
  startTimestamp?: number;
  clock: number;
  step: number;
  mode: string;
  countdown: number;
  contractions: number;
}

export interface CronoSetType extends TableSetType, ImmutableJSObject {
  running: CronoSetRunningType;
}

export interface CronoSetRunningType {
  startTimestamp?: number;
  endTimestamp?: number;
  mode: SetMode;
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
  clearCrono: () => Action;
}

/**
 * TODO: Remove immutable js
 */
export type ImmutableJSCronoType = ImmutableJSObject;

export type ImmutableJSSetType = ImmutableJSObject;

export interface ImmutableJSObject {
  get: (prop: string) => any;
  getIn: (stack: string[]) => any;
  setIn: (stack: string[], value: unknown) => any;
  toJS: <T>() => T;
  updateIn(arg0: string[], arg1: (sets: any) => any): ImmutableJSCronoType;
}

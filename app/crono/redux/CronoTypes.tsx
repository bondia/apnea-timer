import { TableSetType, TableType } from "../../editor/redux/editorTypes";
import {
    InitTableType,
    StartCronoType,
    SkipSetType,
    TrackContractionType,
    ClearCronoType
} from "./cronoActions";

// TYPES


export interface CronoStateType {
    trainingTable: CronoType;
    running: CronoRunningType;
    sets: CronoSetType[];
}

export interface CronoType extends TableType { }

export interface CronoRunningType {
    startTimestamp?: number;
    clock: number;
    step: number;
    mode: string;
    contractions: number;
}

export interface CronoSetType extends TableSetType {
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
    initTable: InitTableType;
    startCrono: StartCronoType;
    skipSet: SkipSetType;
    trackContraction: TrackContractionType;
    clearCrono: ClearCronoType;
}

/**
 * TODO: Remove immutable js
 */
export interface ImmutableJSCronoType {
    get: (prop: string) => any;
    getIn: (stack: string[]) => any;
}

export interface ImmutableJSSetType {
    get: (prop: string) => any;
    getIn: (stack: string[]) => any;
}
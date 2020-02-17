import {
    InitTableType,
    StartCronoType,
    SkipSetType,
    TrackContractionType,
    ClearCronoType
} from "./cronoActions";

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
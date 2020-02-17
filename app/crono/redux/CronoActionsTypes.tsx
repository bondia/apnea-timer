export interface CronoActionsTypes {
    initTable: InitTableType;
    startCrono: StartCronoType;
    skipSet: SkipSetType;
    trackContraction: TrackContractionType;
    clearCrono: ClearCronoType;
}

export type InitTableType =
    (data: object) => (dispatch: any) => void;

export type StartCronoType =
    (mode: string) => (dispatch: any) => void;

export type SkipSetType =
    (key: number) => (dispatch: any, getState: any) => void;

export type TrackContractionType =
    () => (dispatch: any, getState: any) => void;

export type ClearCronoType =
    () => object;
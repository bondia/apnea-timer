import {
    ChangeTableTypeType,
    ChangeTableBaseType,
    ChangeTableBaseBreaksType,
    IncreaseTimeItemType,
    DecreaseTimeItemType,
    CreateEnduranceTableType,
    ChangeEnduranceLapsType,
} from "../../editor/redux/editorActions";

export interface EditorActionsTypes {
    changeTableType: ChangeTableTypeType;
    changeTableBase: ChangeTableBaseType;
    changeTableBaseBreaks: ChangeTableBaseBreaksType;
    increaseTimeItem: IncreaseTimeItemType;
    decreaseTimeItem: DecreaseTimeItemType;
    createEnduranceTable: CreateEnduranceTableType;
    changeEnduranceLaps: ChangeEnduranceLapsType;
}

/**
 * TODO: Remove immutable js
 */
export interface ImmutableJSEditorType {
    get: (prop: string) => any;
    getIn: (stack: string[]) => any;
    update: (stack: string[] | string, cb: (data: any) => any) => any;
}

export interface ImmutableJSEditorSetType {
    get: (prop: string) => any;
    getIn: (stack: string[]) => any;
}
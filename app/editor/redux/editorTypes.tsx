import {
    CreateEnduranceTableType
} from "../../editor/redux/editorActions";

export interface EditorActionsTypes {
    createEnduranceTable: CreateEnduranceTableType;
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
import { AnyAction } from 'redux';
import { ImmutableJSEditorSetType } from '../../editorTypes';

export const REPLACE_EDITOR_SETS = 'REPLACE_EDITOR_SETS';

export type ReplaceEditorSetsAction = AnyAction & {
  sets: ImmutableJSEditorSetType[];
};

const replaceEditorSets = (sets: ImmutableJSEditorSetType[]): ReplaceEditorSetsAction => ({
  type: REPLACE_EDITOR_SETS,
  sets,
});

export default replaceEditorSets;

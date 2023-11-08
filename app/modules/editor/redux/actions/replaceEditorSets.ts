import { AnyAction } from 'redux';
import { ImmutableJSTableSetType } from '../../editorTypes';

export const REPLACE_EDITOR_SETS = 'REPLACE_EDITOR_SETS';

export type ReplaceEditorSetsAction = AnyAction & {
  sets: ImmutableJSTableSetType[];
};

const replaceEditorSets = (sets: ImmutableJSTableSetType[]): ReplaceEditorSetsAction => ({
  type: REPLACE_EDITOR_SETS,
  sets,
});

export default replaceEditorSets;

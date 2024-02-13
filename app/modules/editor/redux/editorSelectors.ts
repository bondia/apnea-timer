import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/types';

const editor = (state: RootState) => state.editor;

export const editorSelector = createSelector([editor], state => state);

const editorTypeSelector = createSelector(
  [editorSelector],
  state => state.trainingTable.type,
);
export const useEditorTypeSelector = () => useAppSelector(editorTypeSelector);

const editorBaseMilliseconds = createSelector(
  [editorSelector],
  state => state.trainingTable.baseMilliseconds,
);
export const useEditorBaseMillisecondsSelector = () =>
  useAppSelector(editorBaseMilliseconds);

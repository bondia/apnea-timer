import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/types';
import { useAppSelector } from '../../../redux/hooks';

const editor = (state: RootState) => state.editor;

export const editorSelector = createSelector([editor], state => state);

const editorTypeSelector = createSelector([editorSelector], state => state.trainingTable.type);
export const useEditorTypeSelector = () => useAppSelector(editorTypeSelector);

export const editorBaseSelector = createSelector([editorSelector], state => state.trainingTable.base);
export const useEditorBaseSelector = () => useAppSelector(editorBaseSelector);

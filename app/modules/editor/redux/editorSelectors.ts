import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/types';

const editor = (state: RootState) => state.editor;

// eslint-disable-next-line import/prefer-default-export
export const editorSelector = createSelector([editor], state => state);

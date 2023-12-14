import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/types';
import { useAppSelector } from '../../../redux/hooks';

const crono = (state: RootState) => state.crono;

const cronoSelector = createSelector([crono], state => state);

// eslint-disable-next-line import/prefer-default-export
export const useCronoSelector = () => useAppSelector(cronoSelector);

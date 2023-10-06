import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/types';
import { AppDispatch } from '../../../App';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

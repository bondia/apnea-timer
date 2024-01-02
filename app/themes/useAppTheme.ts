import { useTheme } from 'styled-components/native';
import { AppTheme } from './theme.d';

const useAppTheme = () => useTheme() as AppTheme;

export default useAppTheme;

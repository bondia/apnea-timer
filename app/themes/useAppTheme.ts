import { useTheme } from 'styled-components/native';
import defaultTheme from './defaultTheme';
import { AppTheme } from './theme.d';

const useAppTheme = () => {
  const theme = useTheme() as AppTheme;
  return theme || defaultTheme;
};

export default useAppTheme;

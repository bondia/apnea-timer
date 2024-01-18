import { useTheme } from 'styled-components/native';
import defaultTheme from '../themes/defaultTheme';
import { AppTheme } from '../themes/types';

const useAppTheme = () => {
  const theme = useTheme() as AppTheme;
  return theme || defaultTheme;
};

export default useAppTheme;

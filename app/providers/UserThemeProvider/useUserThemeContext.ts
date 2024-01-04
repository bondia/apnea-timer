import { useContext } from 'react';
import { UserThemeContext } from './UserThemeProvider';

const useUserThemeContext = () => useContext(UserThemeContext);

export default useUserThemeContext;

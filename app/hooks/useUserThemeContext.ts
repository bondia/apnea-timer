import { useContext } from 'react';
import { UserThemeContext } from '../providers/UserThemeProvider/UserThemeProvider';

const useUserThemeContext = () => useContext(UserThemeContext);

export default useUserThemeContext;

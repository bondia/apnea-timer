import createElevation from './createElevation';
import defaultTheme from './defaultTheme';
import { AppTheme } from './theme.d';

const darkTheme: AppTheme = {
  colors: {
    // primary
    primary900: '#23036A',
    primary800: '#30009C',
    primary700: '#3700B3',
    primary600: '#5600E8',
    primary500: '#6200EE',
    primary400: '#7F39FB',
    primary300: '#985EFF',
    primary200: '#BB86FC',
    primary100: '#DBB2FF',
    primary050: '#F2E7FE',
    // secondary
    secondary900: '#89CFF3',
    secondary800: '#89CFF3',
    secondary700: '#89CFF3',
    secondary600: '#89CFF3',
    secondary500: '#89CFF3',
    secondary400: '#89CFF3',
    secondary300: '#89CFF3',
    secondary200: '#89CFF3',
    secondary100: '#89CFF3',
    secondary050: '#89CFF3',
    // inverted
    inverted900: 'azure',
    inverted800: 'azure',
    inverted700: 'azure',
    inverted600: 'azure',
    inverted500: 'azure',
    inverted400: 'azure',
    inverted300: 'azure',
    inverted200: 'azure',
    inverted100: 'azure',
    inverted050: 'azure',
    // elements
    background: '#121212',
    surface: '#CDF5FD',
    // states
    error: '#FF635A',
  },

  elevations: {
    ELEVATION_00: '#121212',
    ELEVATION_01: createElevation('#121212', 0.05),
    ELEVATION_02: createElevation('#121212', 0.07),
    ELEVATION_03: createElevation('#121212', 0.08),
    ELEVATION_04: createElevation('#121212', 0.09),
    ELEVATION_05: createElevation('#121212', 0.11),
    ELEVATION_06: createElevation('#121212', 0.12),
    ELEVATION_12: createElevation('#121212', 0.14),
    ELEVATION_16: createElevation('#121212', 0.15),
    ELEVATION_24: createElevation('#121212', 0.16),
  },

  oldColors: {
    ...defaultTheme.oldColors,
  },
};

export default darkTheme;

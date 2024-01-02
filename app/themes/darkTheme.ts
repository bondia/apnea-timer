import defaultTheme from './defaultTheme';
import { AppTheme } from './theme.d';

// https://colorhunt.co/palette/00a9ff89cff3a0e9ffcdf5fd
const darkTheme: AppTheme = {
  colors: {
    ...defaultTheme.colors,

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
    // secondary900: '#89CFF3',
    // secondary800: '#89CFF3',
    // secondary700: '#89CFF3',
    // secondary600: '#89CFF3',
    // secondary500: '#89CFF3',
    // secondary400: '#89CFF3',
    // secondary300: '#89CFF3',
    // secondary200: '#89CFF3',
    // secondary100: '#89CFF3',
    // secondary050: '#89CFF3',
    // inverted
    // inverted900: 'azure',
    // inverted800: 'azure',
    // inverted700: 'azure',
    // inverted600: 'azure',
    // inverted500: 'azure',
    // inverted400: 'azure',
    // inverted300: 'azure',
    // inverted200: 'azure',
    // inverted100: 'azure',
    // inverted050: 'azure',
    // elements
    // background: '#CDF5FD',
    // surface: '#CDF5FD',
    // states
    error: '#FF635A',
  },

  elevations: {
    ...defaultTheme.elevations,
  },

  oldColors: {
    ...defaultTheme.oldColors,
  },
};

export default darkTheme;

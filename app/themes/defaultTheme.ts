import { AppTheme } from './types';
import createElevation from './utils/createElevation';

const defaultTheme: AppTheme = {
  colors: {
    // primary
    primary900: '#004179',
    primary800: '#004c8d',
    primary700: '#0057a2',
    primary600: '#0062b6',
    primary500: '#006dca',
    primary400: '#1a7ccf',
    primary300: '#338ad5',
    primary200: '#4d99da',
    primary100: '#66a7df',
    primary050: '#80b6e5',
    // secondary
    secondary900: '#993639',
    secondary800: '#b33f43',
    secondary700: '#cc484c',
    secondary600: '#e65156',
    secondary500: '#ff5a5f',
    secondary400: '#ff6b6f',
    secondary300: '#ff7b7f',
    secondary200: '#ff8c8f',
    secondary100: '#ff9c9f',
    secondary050: '#ffadaf',
    // inverted
    inverted900: '#ffffff',
    inverted800: '#f2f2f2',
    inverted700: '#e6e6e6',
    inverted600: '#d9d9d9',
    inverted500: '#cccccc',
    inverted400: '#c0c0c0',
    inverted300: '#b3b3b3',
    inverted200: '#a6a6a6',
    inverted100: '#999999',
    inverted050: '#8d8d8d',
    // states
    error: '#ff5a5f',
  },

  oldColors: {
    FONT_COLOR_GREY: '#a8a8a8',
  },

  elevations: {
    ELEVATION_00: '#66a7df',
    ELEVATION_01: createElevation('#66a7df', 0.1),
    ELEVATION_02: createElevation('#66a7df', 0.2),
    ELEVATION_03: createElevation('#66a7df', 0.3),
    ELEVATION_04: createElevation('#66a7df', 0.4),
    ELEVATION_05: createElevation('#66a7df', 0.5),
    ELEVATION_06: createElevation('#66a7df', 0.6),
    ELEVATION_12: createElevation('#66a7df', 0.7),
    ELEVATION_16: createElevation('#66a7df', 0.8),
    ELEVATION_24: createElevation('#66a7df', 0.9),
  },
};

// Rausch
// Hex color:	#FF5A5F
// RGB:	255 90 95

// Babu
// Hex color:	#00A699
// RGB:	0 166 153

// Arches
// Hex color:	#FC642D
// RGB:	252 100 45

// Hof
// Hex color:	#484848
// RGB:	72 72 72

// Foggy
// Hex color:	#767676
// RGB:	118 118 118

export default defaultTheme;

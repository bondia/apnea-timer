import createElevation from './createElevation';
import { AppTheme } from './theme.d';

const defaultTheme: AppTheme = {
  colors: {
    // primary
    primary900: '#008EE6',
    primary800: '#008EE6',
    primary700: '#008EE6',
    primary600: '#008EE6',
    primary500: '#008EE6',
    primary400: '#008EE6',
    primary300: '#008EE6',
    primary200: '#008EE6',
    primary100: '#008EE6',
    primary050: '#008EE6',
    // secondary
    secondary900: '#00A699',
    secondary800: '#00A699',
    secondary700: '#00A699',
    secondary600: '#00A699',
    secondary500: '#00A699',
    secondary400: '#00A699',
    secondary300: '#00A699',
    secondary200: '#00A699',
    secondary100: '#00A699',
    secondary050: '#00A699',
    // inverted
    inverted900: '#484848',
    inverted800: '#484848',
    inverted700: '#484848',
    inverted600: '#484848',
    inverted500: '#484848',
    inverted400: '#767676',
    inverted300: '#767676',
    inverted200: '#767676',
    inverted100: '#767676',
    inverted050: '#767676',
    // elements
    background: '#fff',
    surface: '#767676',
    // states
    error: '#FF5A5F',
  },

  oldColors: {
    FONT_COLOR_GREY: '#a8a8a8',
    FONT_CLOLR_GREY_LIGHT: '#e6e6e6',

    // COLORS
    // http://www.colourlovers.com/palette/459707/brightly_to_nightly
    COLOR_LIGHT: '#008EE6',
    COLOR_NORMAL: '#0084D6',
    COLOR_DARK: '#0070B5',
    COLOR_DARKER: '#00619E',
    COLOR_DARKEST: '#004F80',
  },
  elevations: {
    ELEVATION_00: '#767676',
    ELEVATION_01: createElevation('#767676', 0.1),
    ELEVATION_02: createElevation('#767676', 0.2),
    ELEVATION_03: createElevation('#767676', 0.3),
    ELEVATION_04: createElevation('#767676', 0.4),
    ELEVATION_05: createElevation('#767676', 0.5),
    ELEVATION_06: createElevation('#767676', 0.6),
    ELEVATION_12: createElevation('#767676', 0.7),
    ELEVATION_16: createElevation('#767676', 0.8),
    ELEVATION_24: createElevation('#767676', 0.9),
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

import { AppTheme } from './theme.d';

const defaultTheme: AppTheme = {
  oldColors: {
    // FONTS
    FONT_COLOR_LIGHT: 'azure',

    FONT_COLOR_GREY: '#a8a8a8',
    FONT_CLOLR_GREY_LIGHT: '#e6e6e6',

    // COLORS
    // http://www.colourlovers.com/palette/459707/brightly_to_nightly
    COLOR_LIGHT: '#008EE6',
    COLOR_NORMAL: '#0084D6',
    COLOR_DARK: '#0070B5',
    COLOR_DARKER: '#00619E',
    COLOR_DARKEST: '#004F80',

    // RED
    COLOR_RED_NORMAL: '#FF635A',

    // GREEN
    // http://paletton.com/#uid=1340u0kaFwb2SSx6pHZfDr6ljlq
    COLOR_GREEN_NORMAL: '#4B9376',
  },
  elevations: {
    ELEVATION_00: '#121212',
    ELEVATION_01: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #121212)',
    ELEVATION_02: 'linear-gradient(0deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.07) 100%), #121212)',
    ELEVATION_03: 'linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), #121212)',
    ELEVATION_04: 'linear-gradient(0deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%), #121212)',
    ELEVATION_05: 'linear-gradient(0deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212)',
    ELEVATION_06: 'linear-gradient(0deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.12) 100%), #121212)',
    ELEVATION_12: 'linear-gradient(0deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.14) 100%), #121212)',
    ELEVATION_16: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%), #121212)',
    ELEVATION_24: 'linear-gradient(0deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212)',
  },
};

export default defaultTheme;

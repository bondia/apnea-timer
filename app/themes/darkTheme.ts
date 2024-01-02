import defaultTheme from './defaultTheme';
import { AppTheme } from './theme.d';

const darkTheme: AppTheme = {
  ...defaultTheme,
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

export default darkTheme;

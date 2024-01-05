export type AppTheme = {
  colors: {
    primary900: string;
    primary800: string;
    primary700: string;
    primary600: string;
    primary500: string;
    primary400: string;
    primary300: string;
    primary200: string;
    primary100: string;
    primary050: string;

    secondary900: string;
    secondary800: string;
    secondary700: string;
    secondary600: string;
    secondary500: string;
    secondary400: string;
    secondary300: string;
    secondary200: string;
    secondary100: string;
    secondary050: string;

    inverted900: string;
    inverted800: string;
    inverted700: string;
    inverted600: string;
    inverted500: string;
    inverted400: string;
    inverted300: string;
    inverted200: string;
    inverted100: string;
    inverted050: string;

    error: string;
  };

  elevations: {
    ELEVATION_00: string;
    ELEVATION_01: string;
    ELEVATION_02: string;
    ELEVATION_03: string;
    ELEVATION_04: string;
    ELEVATION_05: string;
    ELEVATION_06: string;
    ELEVATION_12: string;
    ELEVATION_16: string;
    ELEVATION_24: string;
  };

  /** @deprecated */
  oldColors: {
    /** @deprecated */
    FONT_COLOR_GREY: string;
  };
};

export type PropsWithAppTheme<T> = { theme: AppTheme } & T;

export enum ThemeSettingsOptions {
  default = 'default',
  light = 'light',
  dark = 'dark',
}

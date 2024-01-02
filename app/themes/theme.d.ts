export type AppTheme = {
  oldColors: {
    // LIGHT
    FONT_COLOR_LIGHT: string;

    // GREY
    FONT_COLOR_GREY: string;
    FONT_CLOLR_GREY_LIGHT: string;

    // COLORS
    COLOR_LIGHT: string;
    COLOR_NORMAL: string;
    COLOR_DARK: string;
    COLOR_DARKER: string;
    COLOR_DARKEST: string;

    // RED
    COLOR_RED_NORMAL: string;

    // GREEN
    COLOR_GREEN_NORMAL: string;
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
};

type PropsWithAppTheme<T> = { theme: AppTheme } & T;

import {
  createTheme,
  ThemeOptions,
  PaletteColorOptions,
  Components,
  Theme,
} from "@mui/material/styles";
import { mackinac, roboto } from "../fonts";

/* -------------------------------------------------------------------------- */
/*                                Color Palette                               */
/* -------------------------------------------------------------------------- */

// #region Color Palette

/* ------------------------------- Typography ------------------------------- */
export const TEXT_DARK = "hsla(28, 27%, 11%, 1)";
export const TEXT_LIGHT = "hsla(0, 0%, 100%, 1)";

/* -------------------------------- Neutrals -------------------------------- */
// These colors are used as supporting secondary colors in backgrounds, text colors, seperators, models, etc.
export const NEUTRAL_BLACK = {
  50: "hsla(0, 0%, 96%, 1)",
  100: "hsla(0, 0%, 90%, 1)",
  200: "hsla(0, 0%, 80%, 1)",
  300: "hsla(0, 0%, 70%, 1)",
  400: "hsla(0, 0%, 60%, 1)",
  500: "hsla(0, 0%, 50%, 1)",
  600: "hsla(0, 0%, 40%, 1)",
  700: "hsla(0, 0%, 30%, 1)",
  800: "hsla(0, 0%, 20%, 1)",
  900: "hsla(0, 0%, 10%, 1)",
  main: "hsla(0, 0%, 50%, 1)",
  light: "hsla(0, 0%, 96%, 1)",
  dark: "hsla(0, 0%, 10%, 1)",
};

export const NEUTRAL_BROWN = {
  50: "hsla(24, 19%, 94%, 1)",
  100: "hsla(24, 17%, 89%, 1)",
  200: "hsla(27, 10%, 79%, 1)",
  300: "hsla(22, 7%, 70%, 1)",
  400: "hsla(16, 5%, 60%, 1)",
  500: "hsla(18, 5%, 51%, 1)",
  600: "hsla(14, 6%, 41%, 1)",
  700: "hsla(9, 8%, 32%, 1)",
  800: "hsla(13, 12%, 22%, 1)",
  900: "hsla(9, 21%, 13%, 1)",
  main: "hsla(18, 5%, 51%, 1)",
  light: "hsla(24, 19%, 94%, 1)",
  dark: "hsla(9, 21%, 13%, 1)",
} as const;

/* --------------------------------- Primary -------------------------------- */
// The primary color palette is used across all interactive elements such as CTAs, links, inputs, active states, etc.
export const PRIMARY_COLOR: PaletteColorOptions = {
  50: "hsla(28, 50%, 90%, 1)",
  100: "hsla(29, 51%, 85%, 1)",
  200: "hsla(28, 52%, 75%, 1)",
  300: "hsla(27, 51%, 70%, 1)",
  400: "hsla(28, 51%, 65%, 1)",
  500: "hsla(28, 33%, 54%, 1)",
  600: "hsla(27, 28%, 43%, 1)",
  700: "hsla(28, 28%, 32%, 1)",
  800: "hsla(29, 28%, 21%, 1)",
  900: "hsla(28, 27%, 11%, 1)",
} as const;

/* ---------------------------- Secondary Colors ---------------------------- */
// The secondary color palette is used for backgrounds and instances

export const ORANGE = {
  0: "hsla(24, 100%, 90%, 1)",
  50: "hsla(26, 100%, 95%, 1)",
  100: "hsla(25, 100%, 85%, 1)",
  200: "hsla(24, 100%, 81%, 1)",
  300: "hsla(25, 100%, 76%, 1)",
  400: "hsla(25, 42%, 57%, 1)",
  500: "hsla(25, 32%, 38%, 1)",
  600: "hsla(25, 32%, 19%, 1)",
} as const;

export const TEAL = {
  0: "hsla(192, 22%, 91%, 1)",
  50: "hsla(198, 22%, 82%, 1)",
  100: "hsla(196, 22%, 73%, 1)",
  200: "hsla(198, 22%, 65%, 1)",
  300: "hsla(198, 22%, 65%, 1)",
  400: "hsla(196, 17%, 42%, 1)",
  500: "hsla(197, 17%, 28%, 1)",
  600: "hsla(198, 18%, 14%, 1)",
} as const;

export const PURPLE = {
  0: "hsla(245, 50%, 95%, 1)",
  50: "hsla(248, 50%, 91%, 1)",
  100: "hsla(246, 52%, 86%, 1)",
  200: "hsla(247, 52%, 81%, 1)",
  300: "hsla(247, 51%, 77%, 1)",
  400: "hsla(247, 21%, 58%, 1)",
  500: "hsla(246, 15%, 38%, 1)",
  600: "hsla(248, 16%, 19%, 1)",
} as const;

export const PINK = {
  0: "hsla(328, 62%, 96%, 1)",
  50: "hsla(328, 62%, 92%, 1)",
  100: "hsla(328, 59%, 88%, 1)",
  200: "hsla(328, 60%, 84%, 1)",
  300: "hsla(328, 60%, 79%, 1)",
  400: "hsla(328, 23%, 60%, 1)",
  500: "hsla(327, 15%, 40%, 1)",
  600: "hsla(328, 15%, 20%, 1)",
} as const;

export const PEACH = {
  0: "hsla(12, 91%, 96%, 1)",
  50: "hsla(11, 91%, 92%, 1)",
  100: "hsla(10, 91%, 87%, 1)",
  200: "hsla(10, 91%, 83%, 1)",
  300: "hsla(10, 91%, 79%, 1)",
  400: "hsla(11, 35%, 59%, 1)",
  500: "hsla(11, 24%, 39%, 1)",
  600: "hsla(10, 25%, 20%, 1)",
} as const;

/* ----------------------------- Stateful Colors ---------------------------- */

export const SUCCESS = {
  50: "hsla(125, 28%, 92%, 1)",
  100: "hsla(129, 30%, 82%, 1)",
  200: "hsla(129, 29%, 72%, 1)",
  300: "hsla(129, 30%, 63%, 1)",
  400: "hsla(129, 29%, 58%, 1)",
  500: "hsla(129, 29%, 54%, 1)",
  600: "hsla(129, 25%, 49%, 1)",
  700: "hsla(129, 25%, 43%, 1)",
  800: "hsla(129, 25%, 32%, 1)",
  900: "hsla(129, 25%, 22%, 1)",
} as const;

export const WARNING = {
  50: "hsla(41, 70%, 95%, 1)",
  100: "hsla(41, 69%, 87%, 1)",
  200: "hsla(42, 69%, 81%, 1)",
  300: "hsla(42, 69%, 75%, 1)",
  400: "hsla(42, 70%, 71%, 1)",
  500: "hsla(42, 69%, 68%, 1)",
  600: "hsla(42, 52%, 61%, 1)",
  700: "hsla(42, 39%, 55%, 1)",
  800: "hsla(42, 33%, 41%, 1)",
  900: "hsla(41, 32%, 27%, 1)",
} as const;

export const ERROR = {
  50: "hsla(11, 63%, 95%, 1)",
  100: "hsla(8, 61%, 93%, 1)",
  200: "hsla(11, 62%, 86%, 1)",
  300: "hsla(10, 63%, 79%, 1)",
  400: "hsla(11, 63%, 72%, 1)",
  500: "hsla(10, 62%, 68%, 1)",
  600: "hsla(10, 62%, 65%, 1)",
  700: "hsla(10, 48%, 58%, 1)",
  800: "hsla(11, 37%, 52%, 1)",
  900: "hsla(10, 34%, 39%, 1)",
} as const;

/* --------------------------------- Shades --------------------------------- */

export const SHADES = {
  WHITE: "hsla(0, 0%, 100%, 1)",
  BLACK: "hsla(0, 0%, 0%, 1)",
} as const;

export const BACKGROUND = {
  PAPER: "hsla(30, 100%, 98%, 1)",
  DEFAULT: "hsla(30, 100%, 98%, 1)",
} as const;

export const PALETTE: ThemeOptions["palette"] = {
  background: {
    paper: BACKGROUND.PAPER,
    default: BACKGROUND.DEFAULT,
  },
  primary: {
    ...PRIMARY_COLOR,
    main: PRIMARY_COLOR[400],
    light: PRIMARY_COLOR[100],
    dark: PRIMARY_COLOR[500],
    contrastText: SHADES.WHITE,
  },
  neutral: {
    black: NEUTRAL_BLACK,
    brown: NEUTRAL_BROWN,
  },
  brandSecondary: {
    orange: ORANGE,
    teal: TEAL,
    purple: PURPLE,
    pink: PINK,
    peach: PEACH,
  },
  shades: {
    black: SHADES.BLACK,
    white: SHADES.WHITE,
  },
  text: {
    primary: TEXT_DARK,
    disabled: NEUTRAL_BLACK[400],
  },
  error: {
    main: ERROR[500],
    light: ERROR[100],
    dark: ERROR[900],
    ...ERROR,
  },
  warning: {
    main: WARNING[500],
    light: WARNING[100],
    dark: WARNING[900],
    ...WARNING,
  },
  success: {
    main: SUCCESS[500],
    light: SUCCESS[100],
    dark: SUCCESS[900],
    ...SUCCESS,
  },
} as const;

// #endregion

/* -------------------------------------------------------------------------- */
/*                                 Typography                                 */
/* -------------------------------------------------------------------------- */

// #region Typography

const ROBOTO_STYLES = {
  fontFamily: roboto.style.fontFamily,
  fontWeight: 400,
  color: NEUTRAL_BROWN[900],
};

const MACKINAC_STYLES = {
  fontFamily: mackinac.style.fontFamily,
  fontWeight: 700,
  color: NEUTRAL_BROWN[900],
};

// We use the base theme to extend the default typography styles
const BASE_THEME = createTheme();

export const TYPOGRAPHY: ThemeOptions["typography"] = {
  fontFamily: "Roboto",
  display1: {
    ...MACKINAC_STYLES,
    fontSize: "6rem",
    lineHeight: "7.125rem",
  },
  display2: {
    ...MACKINAC_STYLES,
    fontSize: "4.5rem",
    lineHeight: "5.375rem",
  },
  display3: {
    ...MACKINAC_STYLES,
    fontSize: "4rem",
    lineHeight: "4.75rem",
  },
  subhead1: {
    ...BASE_THEME.typography.h1,
    ...ROBOTO_STYLES,
    fontSize: "2.25rem",
    lineHeight: "2.875rem",
  },
  subhead2: {
    ...BASE_THEME.typography.h2,
    ...ROBOTO_STYLES,
    fontSize: "1.875rem",
    lineHeight: "2.5rem",
  },
  subhead3: {
    ...BASE_THEME.typography.h3,
    ...ROBOTO_STYLES,
    fontSize: "1.625rem",
    lineHeight: "2.25rem",
  },
  subhead4: {
    ...BASE_THEME.typography.h4,
    ...ROBOTO_STYLES,
    fontSize: "1.375rem",
    lineHeight: "2rem",
  },
  caption1: {
    ...BASE_THEME.typography.body1,
    ...ROBOTO_STYLES,
    fontSize: "0.875rem",
    lineHeight: "1rem",
    fontStyle: "italic",
  },
  caption2: {
    ...BASE_THEME.typography.body1,
    ...ROBOTO_STYLES,
    fontSize: "0.75rem",
  },
  overline1: {
    ...BASE_THEME.typography.h6,
    ...ROBOTO_STYLES,
    fontSize: "1rem",
    lineHeight: "2rem",
    letterSpacing: ".1rem",
  },
  overline2: {
    ...BASE_THEME.typography.h6,
    ...ROBOTO_STYLES,
    fontSize: "0.875rem",
    lineHeight: "2rem",
    letterSpacing: ".0875rem",
  },
  overline3: {
    ...BASE_THEME.typography.h6,
    ...ROBOTO_STYLES,
    fontSize: "0.875rem",
    lineHeight: "2rem",
    letterSpacing: ".0875rem",
  },
  body3: {
    ...BASE_THEME.typography.body2,
    fontSize: "1rem",
    lineHeight: "1.625rem",
  },
};

export function applyTypography(theme: Theme) {
  // Body 1
  theme.typography.body1 = {
    ...theme.typography.body1,
    ...ROBOTO_STYLES,
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  };
  // Body 2
  theme.typography.body2 = {
    ...theme.typography.body1,
    ...ROBOTO_STYLES,
    fontSize: "1rem",
    lineHeight: "1.625rem",
  };
  // H1
  theme.typography.h1 = {
    ...theme.typography.h1,
    ...MACKINAC_STYLES,
    fontSize: "2.25rem",
    lineHeight: "2.68rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
      lineHeight: "3.5rem",
    },
  };
  // H2
  theme.typography.h2 = {
    ...theme.typography.h2,
    ...MACKINAC_STYLES,
    fontSize: "2rem",
    lineHeight: "2.375rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.25rem",
      lineHeight: "2.68rem",
    },
  };
  // H3
  theme.typography.h3 = {
    ...theme.typography.h3,
    ...MACKINAC_STYLES,
    fontSize: "1.75rem",
    lineHeight: "2.0625rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
      lineHeight: "1.78rem",
    },
  };
  // H4
  theme.typography.h4 = {
    ...theme.typography.h4,
    ...MACKINAC_STYLES,
    fontSize: "1.5rem",
    lineHeight: "1.8125rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.75rem",
      lineHeight: "2.0625rem",
    },
  };
  // H5
  theme.typography.h5 = {
    ...theme.typography.h5,
    ...MACKINAC_STYLES,
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.625rem",
      lineHeight: "1.94rem",
    },
  };
  // H6
  theme.typography.h6 = {
    ...theme.typography.h6,
    ...MACKINAC_STYLES,
    fontSize: "1.125rem",
    lineHeight: "1.3125rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.875rem",
      lineHeight: "1.03rem",
    },
  };
}

// #endregion

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */

// #region Components

export const MUI_INPUT_LABEL: Components["MuiInputLabel"] = {
  defaultProps: {
    disableAnimation: true,
    shrink: true,
  },
  styleOverrides: {
    asterisk: {
      color: ERROR[500],
    },
  },
};

export const MUI_INPUT: Components["MuiInput"] = {
  defaultProps: {
    disableUnderline: true,
  },
  styleOverrides: {
    root: {
      padding: "0.8125rem 0.9375rem",
      borderRadius: "0.25rem",
      border: `1px solid ${NEUTRAL_BLACK[200]}`,
      background: NEUTRAL_BROWN[50],
      boxShadow: "none",
    },
  },
};

export const MUI_TYPOGRAPHY_COMPONENT: Components["MuiTypography"] = {
  defaultProps: {
    variant: "body3",
  },
};

export const MUI_CARD_COMPONENT: Components["MuiCard"] = {
  defaultProps: {
    raised: false,
    elevation: 0,
  },
};

export const MUI_BUTTON_BASE_COMPONENT: Components["MuiButtonBase"] = {
  defaultProps: {
    disableRipple: true,
  },
};
export const MUI_BUTTON_COMPONENT: Components["MuiButton"] = {
  defaultProps: {
    variant: "contained",
    color: "primary",
    disableElevation: true,
  },
};

export const MUI_AVATAR_COMPONENT: Components["MuiAvatar"] = {
  defaultProps: {
    sx: {
      bgcolor: PRIMARY_COLOR[50],
      color: PRIMARY_COLOR[500],
    },
  },
};

export const COMPONENTS: ThemeOptions["components"] = {
  MuiAvatar: MUI_AVATAR_COMPONENT,
  MuiCard: MUI_CARD_COMPONENT,
  MuiInput: MUI_INPUT,
  MuiInputLabel: MUI_INPUT_LABEL,
  MuiTypography: MUI_TYPOGRAPHY_COMPONENT,
  MuiButtonBase: MUI_BUTTON_BASE_COMPONENT,
  MuiButton: MUI_BUTTON_COMPONENT,
};

// #endregion

export const theme = createTheme({
  palette: PALETTE,
  typography: TYPOGRAPHY,
  components: {
    ...COMPONENTS,
  },
});

export type TherifyDesignSystem = typeof theme;

applyTypography(theme);

import {
  PaletteOptions,
  SimplePaletteColorOptions,
} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface Color {
    0?: string;
    900?: string;
  }

  export interface PaletteOptions {
    neutral: {
      black: PaletteColorOptions;
      brown: PaletteColorOptions;
    };
    brandSecondary: {
      orange: PaletteColorOptions;
      teal: PaletteColorOptions;
      purple: PaletteColorOptions;
      pink: PaletteColorOptions;
      peach: PaletteColorOptions;
    };
    shades: {
      black: string;
      white: string;
    };
  }
}
declare module "@mui/material/styles/createTypography" {
  export interface TypographyOptions {
    display1: TypographyStyleOptions;
    display2: TypographyStyleOptions;
    display3: TypographyStyleOptions;
    subhead1: TypographyStyleOptions;
    subhead2: TypographyStyleOptions;
    subhead3: TypographyStyleOptions;
    subhead4: TypographyStyleOptions;
    caption1: TypographyStyleOptions;
    caption2: TypographyStyleOptions;
    overline1: TypographyStyleOptions;
    overline2: TypographyStyleOptions;
    overline3: TypographyStyleOptions;
    body3: TypographyStyleOptions;
  }
}
declare module "@mui/material/styles" {
  export interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    display3: React.CSSProperties;
    subhead1: React.CSSProperties;
    subhead2: React.CSSProperties;
    subhead3: React.CSSProperties;
    subhead4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    overline1: React.CSSProperties;
    overline2: React.CSSProperties;
    overline3: React.CSSProperties;
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    display3?: React.CSSProperties;
    subhead1?: React.CSSProperties;
    subhead2?: React.CSSProperties;
    subhead3?: React.CSSProperties;
    subhead4?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    overline1?: React.CSSProperties;
    overline2?: React.CSSProperties;
    overline3?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    display3: true;
    subhead1: true;
    subhead2: true;
    subhead3: true;
    subhead4: true;
    caption1: true;
    caption2: true;
    overline1: true;
    overline2: true;
    overline3: true;
    body3: true;
  }
}

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    palette: PaletteOptions;
  }
}

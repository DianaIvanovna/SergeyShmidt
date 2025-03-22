// ** Theme Type Import
import { Theme, ThemeOptions } from "@mui/material/styles";


declare module "@mui/material" {
  interface TypographyPropsVariantOverrides {
    p0: true,
    p1: true;
    p2: true
  }

  interface TypographyClasses {

    p0: string,
    p1: string;
    p2: string
  }
}
declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {

    p0: React.CSSProperties;
    p1: React.CSSProperties;
    p2: React.CSSProperties;
  }

  interface TypographyVariants {

    p0: React.CSSProperties;
    p1: React.CSSProperties;
    p2: React.CSSProperties;
  }

}


export const muiTypography = (theme: Theme): ThemeOptions["typography"] => {
  return {
    fontFamily: "var(--font-hedvig-letters-serif)",
    fontSize: 16,
    h1: {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "19.92px",
      letterSpacing: ".09em",
      [theme.breakpoints.up("md")]: {
        fontSize: "36px",
        lineHeight: "83%"
      }
    },
    h2: {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "83%",
      letterSpacing: "0.02em",
      [theme.breakpoints.up("md")]: {
        fontSize: "32px",
        lineHeight: "83%"
      }
    },
    h3: {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "120%",
      letterSpacing: ".23em",
      textDecoration: "underline",

      textDecorationThickness: "1px",
      textUnderlineOffset: "3px",


      [theme.breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: "120%"
      }
    },
    h4: {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "17.42px",
      letterSpacing: "3%",
      [theme.breakpoints.up("md")]: {
        fontSize: "20px",
        lineHeight: "25.08px"
      }

    },
    h5: {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "14.74px",
      letterSpacing: "6%",
      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
        lineHeight: "21.44px"
      }
    },
    h6: {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "9px",
      lineHeight: "100%",
      letterSpacing: "0.06em",
      [theme.breakpoints.up("md")]: {
        fontSize: "13px",
        letterSpacing: "0.02em",
        lineHeight: "100%"
      }
    },
    "p0": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "100%",
      letterSpacing: "0.08em",


      [theme.breakpoints.up("md")]: {
        fontSize: "48px",
        lineHeight: "100%"
      }
    },

    "p1": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "17px",
      lineHeight: "120%",
      letterSpacing: "0em",


      [theme.breakpoints.up("md")]: {
        fontSize: "36px",
        lineHeight: "100%",
        letterSpacing: "0.08em"
      }

    },
    "p2": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "17px",
      lineHeight: "120%",
      letterSpacing: "0em",


      [theme.breakpoints.up("md")]: {
        fontSize: "32px"
      }
    }
  };
};



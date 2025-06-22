// ** Theme Type Import
import { Theme, ThemeOptions } from "@mui/material/styles";


declare module "@mui/material" {
  interface TypographyPropsVariantOverrides {
    "p_48/32": true,
    "p_36/24": true,
    "p_32/20": true,
    "p_32/17": true,
    "p_24/11": true,
    "p_24/13": true,
    "p_20/12": true,
    "p_16/13": true,
    "p_16/12": true,
    "p_16/9": true,
    "p_13/11": true,
  }

  interface TypographyClasses {
    "p_48/32": string,
    "p_36/24": string,
    "p_32/20": string,
    "p_32/17": string,
    "p_24/11": string,
    "p_24/13": string,
    "p_20/12": string,
    "p_16/13": string,
    "p_16/12": string,
    "p_16/9": string,
    "p_13/11": string
  }
}
declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    "p_48/32": React.CSSProperties;
    "p_36/24": React.CSSProperties;
    "p_32/20": React.CSSProperties;
    "p_32/17": React.CSSProperties;
    "p_24/11": React.CSSProperties;
    "p_24/13": React.CSSProperties;
    "p_20/12": React.CSSProperties;
    "p_16/13": React.CSSProperties;
    "p_16/12": React.CSSProperties;
    "p_16/9": React.CSSProperties;
    "p_13/11": React.CSSProperties;
  }

  interface TypographyVariants {
    "p_48/32": React.CSSProperties;
    "p_36/24": React.CSSProperties;
    "p_32/20": React.CSSProperties;
    "p_32/17": React.CSSProperties;
    "p_24/11": React.CSSProperties;
    "p_24/13": React.CSSProperties;
    "p_20/12": React.CSSProperties;
    "p_16/13": React.CSSProperties;
    "p_16/12": React.CSSProperties;
    "p_16/9": React.CSSProperties;
    "p_13/11": React.CSSProperties;
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


    "p_48/32": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "100%",
      letterSpacing: "0.08em",
      [theme.breakpoints.up("md")]: {
        fontSize: "48px"
      }
    },
    "p_36/24": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "100%",
      letterSpacing: "0.08em",
      [theme.breakpoints.up("md")]: {
        fontSize: "36px"

      }
    },
    "p_32/20": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "0.02em",

      [theme.breakpoints.up("md")]: {
        fontSize: "32px",
        lineHeight: "83%"
      }
    },
    "p_32/17": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "17px",
      lineHeight: "120%",
      letterSpacing: "0.0em",
      [theme.breakpoints.up("md")]: {
        fontSize: "32px"
      }
    },
    "p_24/11": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "100%",
      letterSpacing: "0.06em",


      [theme.breakpoints.up("md")]: {
        fontSize: "24px"
      }
    },
    "p_24/13": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "100%",
      letterSpacing: "0.06em",


      [theme.breakpoints.up("md")]: {
        letterSpacing: "0.02em",
        fontSize: "24px"
      }
    },
    "p_20/12": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "0.02em",
      [theme.breakpoints.up("md")]: {
        fontSize: "20px",
        letterSpacing: "0.02em"
      }
    },
    "p_16/12": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "0.02em",


      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
        letterSpacing: "0.06em"
      }
    },
    "p_16/13": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "100%",
      letterSpacing: "0.06em",


      [theme.breakpoints.up("md")]: {
        fontSize: "16px"
      }
    },
    "p_16/9": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "9px",
      lineHeight: "100%",
      letterSpacing: "0.06em",


      [theme.breakpoints.up("md")]: {
        fontSize: "16px"
      }
    },
    "p_13/11": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "120%",
      letterSpacing: "0.02em",


      [theme.breakpoints.up("md")]: {
        fontSize: "13px"
      }
    }
  };
};



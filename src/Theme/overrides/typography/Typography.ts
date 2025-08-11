// ** Theme Type Import
import { Theme, ThemeOptions } from "@mui/material/styles";


declare module "@mui/material" {
  interface TypographyPropsVariantOverrides {
    "arsenal_48/32": true,
    "arsenal_36/24": true,
    "arsenal_32/17": true,
    "arsenal_20/14/12": true,

    "hedvig_32/24/20": true,
    "hedvig_24/11": true,
    "hedvig_24/13": true,
    "hedvig_24/18/13": true,
    "hedvig_20/13": true,
    "hedvig_16/14/13": true,
    "hedvig_16/14/12": true,
    "hedvig_16/14/9": true,
    "hedvig_13/11": true,
  }

  interface TypographyClasses {
    "arsenal_48/32": string,
    "arsenal_36/24": string,
    "arsenal_32/17": string,
    "arsenal_20/14/12": string,

    "hedvig_32/24/20": string,
    "hedvig_24/11": string,
    "hedvig_24/13": string,
    "hedvig_24/18/13": string,
    "hedvig_20/13": string,
    "hedvig_16/14/13": string,
    "hedvig_16/14/12": string,
    "hedvig_16/14/9": string,
    "hedvig_13/11": string
  }
}
declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    "arsenal_48/32": React.CSSProperties;
    "arsenal_36/24": React.CSSProperties;
    "arsenal_32/17": React.CSSProperties;
    "arsenal_20/14/12": React.CSSProperties;

    "hedvig_32/24/20": React.CSSProperties;
    "hedvig_24/11": React.CSSProperties;
    "hedvig_24/13": React.CSSProperties;
    "hedvig_24/18/13": React.CSSProperties;
    "hedvig_20/13": React.CSSProperties;
    "hedvig_16/14/13": React.CSSProperties;
    "hedvig_16/14/12": React.CSSProperties;
    "hedvig_16/14/9": React.CSSProperties;
    "hedvig_13/11": React.CSSProperties;
  }

  interface TypographyVariants {
    "arsenal_48/32": React.CSSProperties;
    "arsenal_36/24": React.CSSProperties;
    "arsenal_32/17": React.CSSProperties;
    "arsenal_20/14/12": React.CSSProperties;

    "hedvig_32/24/20": React.CSSProperties;
    "hedvig_24/11": React.CSSProperties;
    "hedvig_24/13": React.CSSProperties;
    "hedvig_24/18/13": React.CSSProperties;
    "hedvig_20/13": React.CSSProperties;
    "hedvig_16/14/13": React.CSSProperties;
    "hedvig_16/14/12": React.CSSProperties;
    "hedvig_16/14/9": React.CSSProperties;
    "hedvig_13/11": React.CSSProperties;
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
      [theme.breakpoints.up("laptop")]: {
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
      [theme.breakpoints.up("laptop")]: {
        fontSize: "32px",
        lineHeight: "83%"
      }
    },


    "arsenal_48/32": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "100%",
      letterSpacing: "0.08em",
      [theme.breakpoints.up("laptop")]: {
        fontSize: "48px"
      }
    },
    "arsenal_36/24": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "100%",
      letterSpacing: "0.08em",
      [theme.breakpoints.up("md")]: {
        fontSize: "36px"

      }
    },
    "arsenal_32/17": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "17px",
      lineHeight: "120%",
      letterSpacing: "0.0em",
      [theme.breakpoints.up("md")]: {
        fontSize: "32px"
      }
    },
    "arsenal_20/14/12": {
      fontFamily: "var(--font-arsenal)",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "0.02em",
      [theme.breakpoints.up("md")]: {
        fontSize: "14px"
      },
      [theme.breakpoints.up("laptop")]: {
        fontSize: "20px",
        letterSpacing: "0.02em"
      }
    },

    "hedvig_32/24/20": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "0.02em",

      [theme.breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: "83%"
      },
      [theme.breakpoints.up("laptop")]: {
        fontSize: "32px",

      }
    },
    "hedvig_24/11": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "100%",
      letterSpacing: "0.06em",


      [theme.breakpoints.up("md")]: {
        fontSize: "24px"
      }
    },
    "hedvig_24/13": {
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
    "hedvig_24/18/13": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "100%",
      letterSpacing: "0.06em",


      [theme.breakpoints.up("md")]: {
        letterSpacing: "0.02em",
        fontSize: "18px"
      },
      [theme.breakpoints.up("laptop")]: {
        fontSize: "24px"
      }
    },

    "hedvig_20/13": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "100%",
      letterSpacing: "0.06em",


      [theme.breakpoints.up("md")]: {
        letterSpacing: "0.02em",
        fontSize: "20px"
      }
    },
    "hedvig_16/14/13": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "100%",
      letterSpacing: "0.06em",


      [theme.breakpoints.up("md")]: {
        fontSize: "14px"
      },
      [theme.breakpoints.up("laptop")]: {
        fontSize: "16px"
      }

    },
    "hedvig_16/14/12": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "0.02em",

      [theme.breakpoints.up("md")]: {
        fontSize: "14px"
      },

      [theme.breakpoints.up("laptop")]: {
        fontSize: "16px",
        letterSpacing: "0.06em"
      }
    },
    "hedvig_16/14/9": {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "9px",
      lineHeight: "100%",
      letterSpacing: "0.06em",

      [theme.breakpoints.up("md")]: {
        fontSize: "14px"
      },

      [theme.breakpoints.up("laptop")]: {
        fontSize: "16px"
      }
    },
    "hedvig_13/11": {
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



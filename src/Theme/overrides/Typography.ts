// ** Theme Type Import
import { Theme, ThemeOptions } from "@mui/material/styles";

export const muiTypography = (theme: Theme): ThemeOptions["typography"] => {
  return {
    fontFamily: "var(--font-hedvig-letters-serif)",
    fontSize: 16,
    h1: {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "19.92px",
      letterSpacing: "9%",
      [theme.breakpoints.up("md")]: {
        fontSize: "36px",
        lineHeight: "29.88px"
      }
    },
    h2: {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "19.84px",
      letterSpacing: "2%",
      [theme.breakpoints.up("md")]: {
        fontSize: "32px",
        lineHeight: "26.45px"
      }
    },
    h3: {
      fontFamily: "var(--font-hedvig-letters-serif)",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "20px",
      letterSpacing: "2%",
      [theme.breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: "32.16px"
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
      lineHeight: "12.06px",
      letterSpacing: "2%",
      [theme.breakpoints.up("md")]: {
        fontSize: "13px",
        lineHeight: "17.42px"
      }
    }
    // h2: {
    //   fontSize: "1.2857rem", // 18 = 14*1.2857
    //   fontWeight: 600,
    //   letterSpacing: 0,
    //   lineHeight: 22.5 / 16,
    //   color: theme.palette.text.primary
    // },
    // h3: {
    //   fontSize: "1.143rem", //16=14*1.143
    //   fontWeight: 600,
    //   letterSpacing: 0,
    //   lineHeight: 20 / 16,
    //   color: theme.palette.text.primary
    // },
    // h4: {
    //   fontSize: "1.07rem", //15=14*1.07
    //   fontWeight: 600,
    //   letterSpacing: 0,
    //   lineHeight: 18.75 / 15,
    //   color: theme.palette.text.primary
    // },
    //
    // p0: {
    //   fontSize: "1.2857rem", // 18 = 14*1.2857
    //   fontWeight: 400,
    //   letterSpacing: 0,
    //   lineHeight: "1.40625rem",
    //   color: theme.palette.text.primary
    // },
    // p1: {
    //   fontSize: "1rem", // 14 = 14*1
    //   fontWeight: 400,
    //   letterSpacing: 0,
    //   lineHeight: "1.09375rem",
    //   color: theme.palette.text.primary
    // },
    // p2: {
    //   fontSize: "0.9286rem", // 13 = 14*0.9286
    //   fontWeight: 400,
    //   letterSpacing: 0,
    //   lineHeight: "1.25rem",
    //   color: theme.palette.text.primary
    // },
    // p3: {
    //   fontSize: "0.8571rem", // 12 = 14*0.8571
    //   fontWeight: 400,
    //   letterSpacing: 0,
    //   lineHeight: "1rem",
    //   color: theme.palette.text.primary
    // },
    // p4: {
    //   fontSize: "0.7857rem", // 11 = 14*0.7857
    //   fontWeight: 400,
    //   letterSpacing: 0,
    //   lineHeight: "1rem",
    //   color: theme.palette.text.primary
    // },
    // label12: {
    //   fontSize: "0.8571rem", // 12 =  14*0.8571
    //   fontWeight: 600,
    //   letterSpacing: 0,
    //   lineHeight: "0.875rem",
    //   color: theme.palette.text.primary
    // },
    // label13: {
    //   fontSize: "0.9286rem", // 13 = 14*0.9286
    //   fontWeight: 600,
    //   letterSpacing: 0,
    //   lineHeight: "1rem",
    //   color: theme.palette.text.primary
    // },
    // label15: {
    //   fontSize: "1.07rem", // 15=14*1.07
    //   fontWeight: 600,
    //   letterSpacing: 0,
    //   lineHeight: "1.125rem",
    //   color: theme.palette.text.primary
    // },
    // label16: {
    //   fontSize: "1.143rem", //16=14*1.143
    //   fontWeight: 400,
    //   letterSpacing: 0,
    //   lineHeight: "1.125rem",
    //   color: theme.palette.text.primary
    // },
    //
    // title1: {
    //   fontSize: "0.9286rem", // 13 = 14*0.9286
    //   fontWeight: 600,
    //   letterSpacing: 0,
    //   lineHeight: "1rem",
    //   color: theme.palette.text.primary
    // },
    // title2: {
    //   fontSize: "0.8571rem", // 12 = 14*0.8571
    //   fontWeight: 600,
    //   letterSpacing: "1%",
    //   lineHeight: "0.75rem",
    //   color: theme.palette.text.primary
    // },
    // titleTag1: {
    //   fontSize: "0.8571rem", // 12 = 14*0.8571
    //   fontWeight: 700,
    //   letterSpacing: "1%",
    //   lineHeight: "1.25rem",
    //   color: theme.palette.text.primary
    // },
    // titleTag2: {
    //   fontSize: "0.7857rem", // 11 = 14*0.7857
    //   fontWeight: 700,
    //   letterSpacing: "2%",
    //   lineHeight: "1rem",
    //   color: theme.palette.text.primary
    // }
  };
};

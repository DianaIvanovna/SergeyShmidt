"use client";
import { createTheme } from "@mui/material/styles";
import { muiComponents } from "@/Theme/overrides";

let theme = createTheme({
  typography: {
    // fontFamily: "var(--font-geist-sans)"
    subtitle1: {
      // fontSize: 12,
    },
    body1: {
      // fontWeight: 500,
    },
    button: {
      // fontStyle: 'italic',
    }
  },
  components: {
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "0",
    //       color: "black",
    //       "&:hover": {
    //         // backgroundColor: "none"
    //         color: "green"
    //       },
    //       ":active": {
    //         color: "red"
    //       }
    //     }
    //   }
    // }
  }
});

theme = createTheme(theme, {
  components: { ...muiComponents(theme) }
});

export default theme;
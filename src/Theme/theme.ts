"use client";
import { createTheme } from "@mui/material/styles";
import { muiComponents } from "@/Theme/overrides";
import { muiTypography } from "@/Theme/overrides/Typography";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 380,
      md: 640,
      lg: 1024,
      xl: 1920
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
theme = createTheme(theme, {
  typography: { ...muiTypography(theme) }
});

export default theme;
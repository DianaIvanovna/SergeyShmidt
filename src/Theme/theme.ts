"use client";
import { createTheme } from "@mui/material/styles";
import { muiComponents } from "@/Theme/overrides";
import { muiTypography } from "@/Theme/overrides/Typography";
import { muiPalette } from "@/Theme/palette";

let theme = createTheme({
  palette: muiPalette(),
  breakpoints: {
    values: {
      xs: 0,
      sm: 380,
      md: 640,
      lg: 1024,
      xl: 1920
    }
  }
});

theme = createTheme(theme, {
  components: { ...muiComponents(theme) }
});
theme = createTheme(theme, {
  typography: { ...muiTypography(theme) }
});

export default theme;
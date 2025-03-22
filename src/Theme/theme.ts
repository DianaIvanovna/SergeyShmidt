"use client";
import { createTheme } from "@mui/material/styles";
import { muiComponents } from "@/theme/overrides";
import { muiPalette } from "@/theme/palette";
import { muiTypography } from "@/theme/overrides/Typography/Typography";


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
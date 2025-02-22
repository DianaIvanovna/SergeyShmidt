import { Components, PaletteMode, Theme } from "@mui/material";

export type ThemeColor = "primary" | "secondary" | "violet";

export type ContentWidth = "full" | "boxed";

export type OverrideComponentType<N extends keyof Components<Theme>> = {
  [key: string]: Components<Theme>[N];
};

export type Settings = {
  mode: PaletteMode;
  themeColor: ThemeColor;
};

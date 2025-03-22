// ** MUI Imports
import {
  ButtonProps,
  CheckboxProps,
  InputBaseProps,
  PaletteMode,
  RadioProps,
  SliderProps,
  SvgIconProps,
  SwitchProps
} from "@mui/material";
import { ContentWidth, ThemeColor } from "@/theme/type";

type ThemeConfig = {
  mode: PaletteMode;
  themeColor: ThemeColor;
  disableRipple: boolean;
  contentWidth: ContentWidth;
  responsiveFontSizes: boolean;
  borderRadius: number;
  defaultButtonSize: ButtonProps["size"];
  defaultInputSize: InputBaseProps["size"];
  defaultSwitchSize: SliderProps["size"];
  defaultSliderSize: SwitchProps["size"];
  defaultIconSize: SvgIconProps["fontSize"];
  defaultCheckboxSize: CheckboxProps["size"];
  defaultRadioSize: RadioProps["size"];
};

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  mode: "light" /* light | dark */,
  themeColor: "primary" /* "primary" | "secondary" | "violet" */,
  contentWidth: "boxed" /* full | boxed */,

  // ** Size Configs
  defaultButtonSize: "large" /* "small" | "medium" | "large" | king */,
  defaultInputSize: "small" /* "small" | "medium" */,
  defaultSliderSize: "medium" /* "small" | "medium" */,
  defaultSwitchSize: "small" /* "small" | "medium" */,

  defaultIconSize: "medium" /* "small" | "medium" | "large" | king */,
  defaultCheckboxSize: "medium" /* "small" | "medium" | "large" | king */, // The size is based on IconSize
  defaultRadioSize: "medium" /* "small" | "medium" | "large" | king */, // The size is based on IconSize

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: true /* true | false */,
  borderRadius: 0
};

export default themeConfig;

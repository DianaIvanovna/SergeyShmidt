import { SvgIconProps, Theme } from "@mui/material";

export const iconFontSizeHandler = (_theme: Theme, size: SvgIconProps["fontSize"]): object => {
  // 1rem – обычно 16px
  switch (size) {

    case "small":
      return {
        fontSize: "44px",
        [_theme.breakpoints.down("lg")]: {
          fontSize: "32px"
        }
      };
    case "medium":
      return {
        fontSize: "44px",
        [_theme.breakpoints.down("lg")]: {
          fontSize: "32px"
        }
      };
    case "large":
      return {
        fontSize: "80px",
        [_theme.breakpoints.down("lg")]: {
          fontSize: "44px"
        }
      };
    default:
      return {
        fontSize: "32px"
      };
  }
};

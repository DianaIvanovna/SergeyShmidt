import { Theme } from "@mui/material/styles";
import { OverrideComponentType } from "@/Theme/type";
import { iconFontSizeHandler } from "@/Theme/helpers/iconFontSizeHandler";
import themeConfig from "@/Theme/config";


export const SvgIcon = (theme: Theme): OverrideComponentType<"MuiSvgIcon"> => {

  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...iconFontSizeHandler(theme, ownerState.fontSize)
        })
      },
      defaultProps: {
        fontSize: themeConfig.defaultIconSize
      }
    }
  };
};

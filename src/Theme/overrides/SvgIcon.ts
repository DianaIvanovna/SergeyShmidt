import { Theme } from "@mui/material/styles";
import { OverrideComponentType } from "@/theme/type";
import { iconFontSizeHandler } from "@/theme/helpers/iconFontSizeHandler";
import themeConfig from "@/theme/config";


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

import { OverrideComponentType } from "@/Theme/type";
import "./IconButton.scss";


export const IconButton = (): OverrideComponentType<"MuiIconButton"> => {

  return {
    MuiIconButton: {
      styleOverrides: {
        root: () => ({
          padding: 0,
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "transparent"
          },
          "&:active": {
            backgroundColor: "transparent"
          },
          "&:focus-visible": {
            backgroundColor: "rgba(105, 105, 105,0.5)"
          }

        })
      },
      defaultProps: {
        disableRipple: true
      }
    }
  };
};

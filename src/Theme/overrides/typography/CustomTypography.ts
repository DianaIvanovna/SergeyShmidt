import { OverrideComponentType } from "@/Theme/type";


export const CustomTypography = (): OverrideComponentType<"MuiTypography"> => {

  return {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          "arsenal_48/32": "p",
          "arsenal_32/18": "p"
        }
      }
    }
  };
};

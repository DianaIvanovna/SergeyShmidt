import { OverrideComponentType } from "@/theme/type";


export const CustomTypography = (): OverrideComponentType<"MuiTypography"> => {

  return {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          "arsenal_48/32": "p",
          "arsenal_32/17": "p"
        }
      }
    }
  };
};

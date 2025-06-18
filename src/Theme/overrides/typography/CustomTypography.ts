import { OverrideComponentType } from "@/theme/type";


export const CustomTypography = (): OverrideComponentType<"MuiTypography"> => {

  return {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          "p_48/32": "p",
          "p_32/17": "p"
        }
      }
    }
  };
};

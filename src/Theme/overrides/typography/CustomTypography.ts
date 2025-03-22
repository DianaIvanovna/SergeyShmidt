import { OverrideComponentType } from "@/theme/type";


export const CustomTypography = (): OverrideComponentType<"MuiTypography"> => {

  return {
    MuiTypography: {

      defaultProps: {
        variantMapping: {
          "p0": "p",
          "p1": "p",
          "p2": "p"
        }
      }
    }
  };
};

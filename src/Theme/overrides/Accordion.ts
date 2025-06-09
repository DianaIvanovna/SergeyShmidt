import { OverrideComponentType } from "@/theme/type";

export const muiAccordion = (): OverrideComponentType<"MuiAccordion"> => {

  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "none",
          color: "#E5CFCF",
          boxShadow: "none",
          "& .MuiAccordionDetails-root": {
            padding: 0,
            marginTop: "5px"
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          // background: "red",
          minHeight: "auto",
          padding: 0,
          margin: 0,
          justifyContent: "left",
          "& .MuiSvgIcon-root": {
            fontSize: "30px"
          },

          "&.Mui-expanded": {
            minHeight: "auto",
            padding: 0,
            margin: 0
          },
          "& .MuiAccordionSummary-content": {
            margin: 0,
            flexGrow: 0,

            "&.Mui-expanded": {
              margin: 0
            }
          },

          "& .MuiAccordionSummary-expandIconWrapper": {
            marginLeft: "15px"
          }
        }
      }
    }


  };
};

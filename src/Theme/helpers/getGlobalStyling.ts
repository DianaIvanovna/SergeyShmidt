// ** MUI Imports

export const globalStyling = {
  "&.Mui-focusVisible": {
    "&::before": {
      content: "\"\"",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "calc(100% + 4px)",
      height: "calc(100% + 4px)",
      border: `1px solid transparent`,
      zIndex: 2
    }
  },
  "a": {
    "&:hover ": {
      color: "#ffcdcd",
      ".MuiTypography-root": {
        color: "#ffcdcd"
      }
    },

    "&:active": {
      color: "#454545",
      ".MuiTypography-root ": {
        color: "#454545"
      }
    }
  },
  "*::-webkit-scrollbar": {
    width: "2px" /* ширина для вертикального скролла */,
    height: "2px" /* высота для горизонтального скролла */,
    backgroundColor: "#D9D9D9"
  },

  "*::-webkit-scrollbar-track": {},

  /* ползунок скроллбара */
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "#DC4343",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#DC4343"
    }
  },

  "*::-webkit-scrollbar-button:hover": {
    cursor: "pointer"
  }
};
import { poemType } from "@/app/poems/poems";
import React, { FC } from "react";
import { Box, Button, IconButton, SvgIcon, Typography } from "@mui/material";
import arrowLeft from "@/shared/icons/double-arrow-left.svg";
import arrowRight from "@/shared/icons/double-arrow-right.svg";
import menuArrow from "@/shared/icons/menuArrow.svg";

interface PoemsActiveProps {
  poem: poemType;
  changePoem: (value: number | null) => void;
  poemLength: number;
  poemIndex: number | null;
}

const colorSx = {
  color: "#E5CFCF"
};

export const PoemsActive: FC<PoemsActiveProps> = ({ poem, changePoem, poemLength, poemIndex }) => {
  return (
    <Box className={"poems__active"}>
      <Box className={"poems__back-icon"}>
        <IconButton onClick={() => {
          changePoem(null);
        }}>
          <SvgIcon component={menuArrow} viewBox="0 0 52 52" />
        </IconButton>
      </Box>

      <Box className={"poems__text-block"}>
        <div className={"poems__back-image"} style={{ backgroundImage: `url(${poem.imageBack})` }} />
        <Typography variant={"p_48/32"} className={"poems__active-title"} color={"primary"}>{poem.title}</Typography>
        <Typography
          dangerouslySetInnerHTML={
            { __html: poem.text }
          }
          className={"poems__text"}
          variant={"p_32/17"}
          sx={colorSx}
        />
        {/*<picture className={"poems__back-image"}>*/}
        {/*  <source media="(min-width: 700px)" srcSet={poem.imageBackBig} />*/}
        {/*  <img src={poem.imageBack} alt={"alt"} />*/}
        {/*</picture>*/}

      </Box>

      <Box className={"poems__buttons"}>
        {
          poemIndex !== null && poemIndex !== 0 && (
            <Button onClick={() => {
              changePoem(poemIndex - 1);
            }}>
              <SvgIcon fontSize={"small"} component={arrowLeft} viewBox="0 0 44 44" sx={{ marginRight: "6px" }} />
              <Typography variant={"p_24/13"} sx={colorSx}>PREVIOUS</Typography>
            </Button>
          )
        }
        {
          poemIndex !== null && poemIndex !== poemLength && (
            <Button onClick={() => {
              changePoem(poemIndex + 1);
            }}
                    className={"poems__button-next"}
            >
              <Typography variant={"p_24/13"} sx={colorSx}>NEXT</Typography>
              <SvgIcon fontSize={"small"} component={arrowRight} viewBox="0 0 44 44" sx={{ marginLeft: "6px" }} />
            </Button>
          )
        }
      </Box>
    </Box>);
};
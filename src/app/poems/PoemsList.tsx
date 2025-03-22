import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { poemsArr } from "@/app/poems/poems";

interface PoemsListProps {
  changePoem: (value: number) => void;
  poemIndex: number | null;
}

export const PoemsList: FC<PoemsListProps> = ({ changePoem, poemIndex }) => {

  function poemClick(index: number) {
    changePoem(index);
  }


  return (
    <Box className={"poems__list"}>
      {
        poemsArr.map((item, index) => (
          <Box
            key={index}
            className="poems__item"
            onClick={() => poemClick(index)}
            sx={{
              backgroundImage: `url(${item.image.src})`,
              border: (theme) => poemIndex === index ? `1px solid ${theme.palette.primary.main}` : ""
            }}
          >
            <Typography variant={"p1"}>{item.title}</Typography>
          </Box>
        ))
      }
    </Box>
  );
};
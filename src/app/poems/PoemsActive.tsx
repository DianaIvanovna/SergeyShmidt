import { poemType } from "@/app/poems/poems";
import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface PoemsActiveProps {
  poem: poemType;
}

export const PoemsActive: FC<PoemsActiveProps> = ({ poem }) => {
  return (
    <Box className={"poems__active"}
         sx={{
           // backgroundImage: `url(${poem.imageBack.src})`
         }}
    >
      <Typography variant={"p0"} className={"poems__active-title"} color={"primary"}>{poem.title}</Typography>
      <Typography
        dangerouslySetInnerHTML={
          { __html: poem.text }
        }
        variant={"p2"}
      />
    </Box>);
};
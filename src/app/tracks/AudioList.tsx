import React from "react";
import { songsArr } from "@/app/tracks/constants";
import { AudioItem } from "@/app/tracks/AudioItem";
import { Grid } from "@mui/material";
import { useHasScroll } from "@/shared/hooks/useHasScroll";

export const AudioList = () => {
  const { ref, hasScroll } = useHasScroll<HTMLDivElement>();
  return (
    <Grid
      container
      flexDirection={"column"}
      ref={ref}
      sx={{
        flexGrow: 2,
        justifyContent: hasScroll ? "flex-start" : "center",
        overflowY: "auto",
        flexWrap: "nowrap",
        direction: "rtl",
        "& > *": {
          direction: "ltr"
        }
      }}
    >
      {
        songsArr.map((song) => (
          <AudioItem
            song={song}
            key={song.title}
          />
        ))
      }
    </Grid>
  );
};
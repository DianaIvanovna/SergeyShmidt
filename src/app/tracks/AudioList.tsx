"use client";
import React from "react";
import { songsArr } from "@/app/tracks/constants";
import { AudioItem } from "@/app/tracks/AudioItem";
import { Grid } from "@mui/material";

export const AudioList = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      sx={{
        flexGrow: 2,
        margin: "auto 0",
        overflowY: "auto",
        flexWrap: "nowrap",
        direction: "rtl",
        "& > *": {
          direction: "ltr"
        }
      }}
    >
      <Grid
        container
        flexDirection={"column"}

        sx={{
          margin: "auto 0"
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
    </Grid>
  );
};
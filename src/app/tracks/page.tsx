"use client";
import "./index.scss";
import { BackgroundImage } from "@/components/BackgroundImage";
import back3 from "@/shared/images/back480.jpg";
import back1 from "@/shared/images/songs1920.jpg";
import back2 from "@/shared/images/songs1024.jpg";
import React from "react";
import { Grid } from "@mui/material";
import AudioPlayer from "./AudioPlayer";
import { usePlayerContext } from "@/providers/player-store-provider";
import { AudioList } from "@/app/tracks/AudioList";

export default function Tracks() {
  const sources = [
    {
      srcSet: back1.src,
      // media: "(min-width: 1024px)"
      media: "(min-width: 1400px)"
    },
    {
      srcSet: back2.src,
      media: "(min-width: 640px)"
    }
  ];
  const context = usePlayerContext();

  return (
    <Grid container flexDirection={"column"} className={"tracks"} flexWrap={"nowrap"}>
      <AudioList />
      <AudioPlayer context={context} />
      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} className={"tracks__back"} />
    </Grid>
  );
}

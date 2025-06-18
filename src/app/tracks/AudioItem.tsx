"use client";

import React, { FC } from "react";
import { songsArr } from "@/app/tracks/constants";
import { Accordion, AccordionDetails, AccordionSummary, Grid, IconButton, SvgIcon, Typography } from "@mui/material";
import expandIcon from "@/shared/icons/expand.svg";
import pauseIcon from "@/shared/icons/pause.svg";
import playIcon from "@/shared/icons/play.svg";
import { usePlayerStore } from "@/providers/player-store-provider";


interface AudioItemProps {
  song: typeof songsArr[number];
}

export const AudioItem: FC<AudioItemProps> = ({ song }) => {
  const {
    isPlay,
    activeSong,
    setActiveSong,
    changeIsPlay,
    openAboutSongId,
    setOpenAboutSongId
  } = usePlayerStore((state) => state);


  const isPlaySong = song.id === activeSong?.id && isPlay;
  return (
    <Grid container wrap={"nowrap"} className={"tracks-item"}>
      <Grid sx={{ marginRight: "15px" }}>
        <IconButton onClick={() => {
          if (activeSong === song) {
            changeIsPlay(!isPlay);
          } else {
            setActiveSong(song);
            changeIsPlay(true);
          }
        }}>

          {isPlaySong ?
            <SvgIcon fontSize={"large"} component={pauseIcon} viewBox="0 0 80 80" /> :
            <SvgIcon fontSize={"large"} component={playIcon} viewBox="0 0 44 44" />
          }
        </IconButton>
        {/*<button onClick={() => {*/}
        {/*  setActiveSong(null);*/}
        {/*  changeIsPlay(false);*/}
        {/*}}>x*/}
        {/*</button>*/}
      </Grid>

      <Grid sx={{ maxWidth: "450px" }}>
        <Typography variant={"p_48/32"} sx={{ fontWeight: 400 }}>{song.title}</Typography>
        <Accordion
          expanded={song.id === openAboutSongId}
          onChange={() => {
            setOpenAboutSongId(song.id === openAboutSongId ? null : song.id);
          }}
        >
          <AccordionSummary
            expandIcon={<SvgIcon fontSize={"small"} component={expandIcon} viewBox="0 0 30 30" />}
            aria-controls="panel1-content"
            id="panel1-header"

          >
            <Typography variant={"p_16/12"}> About track</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {
                song.about.map((item, key) => (
                  <Grid
                    container
                    wrap={"nowrap"}
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "16px",

                      "& a": {
                        textDecoration: "underline"
                      }
                    }}
                    key={key}
                  >
                    <Typography variant={"p_13/11"}>{item.title}</Typography>
                    <Typography variant={"p_13/11"}
                                dangerouslySetInnerHTML={{
                                  __html: item.value
                                }}
                                sx={{ textAlign: "right" }}
                    />
                  </Grid>
                ))
              }

            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};
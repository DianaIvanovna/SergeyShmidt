import { BackgroundImage } from "@/components/BackgroundImage";
import back3 from "@/shared/images/back480.jpg";
import back1 from "@/shared/images/back1920.jpg";
import back2 from "@/shared/images/back1024.jpg";
import { Grid, Typography } from "@mui/material";
import { PersonCard } from "./PersonCard";
import React from "react";

const persons = [
  {
    work: "Web-Design",
    name: "MAXIM PALVAL",
    link: "https://t.me/mopsermax"
  },

  {
    work: "Web-Development",
    name: "DIANA GARBUZ",
    link: "https://t.me/gdi_99"
  },
  {
    work: "Photo and edit",
    name: "EKATERINA ZEHNER",
    link: "https://www.ekaterinazehner.com/"
  },
  {
    work: "Poems artwork",
    name: "MARIE BAKANOVA",
    link: "https://vk.com/mariel_vision"
  }];

export default function Website() {

  const sources = [
    {
      srcSet: back1.src,
      media: "(min-width: 1024px)"
    },
    {
      srcSet: back2.src,
      media: "(min-width: 640px)"
    }
  ];
  return (
    <Grid container flexWrap={"nowrap"} direction={"column"}
          sx={{ alignItems: "center", margin: "auto 0" }}>

      {
        persons.map((person, index) => (
          <PersonCard key={index} {...person} />
        ))
      }
      <Typography variant={"hedvig_20/13"}>PRIVATE WEBSITE</Typography>


      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </Grid>
  );
}

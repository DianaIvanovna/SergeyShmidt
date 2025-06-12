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
    link: "https://yandex.ru/search/?text=не+забудь+поменять+ссылки&clid=2270455&banerid=6301000000%3A63c55f88e393b0548bf5b8f4&win=577&lr=120420"
  },

  {
    work: "Web-Development",
    name: "DIANA GARBUZ",
    link: "https://yandex.ru/search/?text=не+забудь+поменять+ссылки&clid=2270455&banerid=6301000000%3A63c55f88e393b0548bf5b8f4&win=577&lr=120420"
  },
  {
    work: "Photo and edit",
    name: "EKATERINA ZEHNER",
    link: "https://yandex.ru/search/?text=не+забудь+поменять+ссылки&clid=2270455&banerid=6301000000%3A63c55f88e393b0548bf5b8f4&win=577&lr=120420"
  },
  {
    work: "Poems artwork",
    name: "MARIE BAKANOVA",
    link: "https://yandex.ru/search/?text=не+забудь+поменять+ссылки&clid=2270455&banerid=6301000000%3A63c55f88e393b0548bf5b8f4&win=577&lr=120420"
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
      <Typography variant={"p_24/13"}>PRIVATE WEBSITE</Typography>


      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </Grid>
  );
}

import back1 from "@/shared/images/home1920.jpg";
import back2 from "@/shared/images/home1024.jpg";
import back3 from "@/shared/images/home480.jpg";
import { BackgroundImage } from "@/components/BackgroundImage";
import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { Routes } from "@/shared/constants/Routes";


export default function Home() {

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
    <Box className={"home"}>
      <Link href={Routes.TRACKS}>
        <Typography variant={"h3"} className={"home__title"}>
          YOU’RE SURE TO <br />FIND SOMETHING <br />FOR YOU IN MY <br />TRACKS
        </Typography>
      </Link>
      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </Box>
  );
}


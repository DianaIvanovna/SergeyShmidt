import back1 from "@/shared/images/home1920.jpg";
import back2 from "@/shared/images/home1024.jpg";
import back3 from "@/shared/images/home480.jpg";

import { BackgroundImage } from "@/components/BackgroundImage";
import { Box } from "@mui/material";
import React from "react";
import { PageContent } from "@/app/PageContent";


export default function Home() {

  const sources = [
    {
      srcSet: back1.src,
      media: "(min-width: 1200px)"
    },
    {
      srcSet: back2.src,
      media: "(min-width: 640px)"
    }
  ];


  return (
    <Box className={"home"}>
      {/*<animated.div*/}
      {/*  style={{*/}
      {/*    position: "relative",*/}
      {/*    ...springs*/}
      {/*  }}*/}
      {/*>*/}

      {/*  <Link href={Routes.TRACKS}>*/}
      {/*    <Typography variant={"p_24/13"} className={"home__title"}>*/}
      {/*      YOU’RE SURE TO <br />FIND SOMETHING <br />FOR YOU IN MY <br />TRACKS*/}
      {/*    </Typography>*/}
      {/*  </Link>*/}
      {/*</animated.div>*/}
      <PageContent />
      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </Box>
  );
}


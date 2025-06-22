import { BackgroundImage } from "@/components/BackgroundImage";
import back3 from "@/shared/images/back480.jpg";
import back1 from "@/shared/images/back1920.jpg";
import back2 from "@/shared/images/back1024.jpg";
import { useMemo } from "react";
import "./poems.scss";
import { Box } from "@mui/material";
import { PoemsContent, WindowOnLoad } from "@/app/poems/PoemsContent";


export default function Poems() {
  const sources = useMemo(() => {
    return [
      {
        srcSet: back1.src,
        media: "(min-width: 1024px)"
      },
      {
        srcSet: back2.src,
        media: "(min-width: 640px)"
      }
    ];
  }, []);


  return (
    <Box className={"poems"}>
      <WindowOnLoad>
        <PoemsContent />
      </WindowOnLoad>

      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </Box>
  );
}


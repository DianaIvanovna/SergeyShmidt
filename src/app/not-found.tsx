import { BackgroundImage } from "@/components/BackgroundImage";
import back3 from "@/shared/images/back480.jpg";
import back1 from "@/shared/images/back1920.jpg";
import back2 from "@/shared/images/back1024.jpg";
import { Grid, Typography } from "@mui/material";

export default function NotFound() {
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
    <Grid container direction={"column"} sx={{ alignItems: "center", justifyContent: "center" }}>
      <Typography variant={"h1"} className={"header-404"}>404</Typography>
      <Typography variant={"p_24/13"}>Sorry, there was a problem, please come back later</Typography>
      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </Grid>
  );
}
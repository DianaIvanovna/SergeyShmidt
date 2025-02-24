import { BackgroundImage } from "@/components/BackgroundImage";
import back3 from "@/shared/images/back480.jpg";
import back1 from "@/shared/images/songs1920.jpg";
import back2 from "@/shared/images/songs1024.jpg";

export default function Tracks() {

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
    <div style={{ height: "200vh" }}>
      Tracks

      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />

    </div>
  );
}

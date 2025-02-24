import back1 from "@/shared/images/home1920.jpg";
import back2 from "@/shared/images/home1024.jpg";
import back3 from "@/shared/images/home480.jpg";
import { BackgroundImage } from "@/components/BackgroundImage";


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
    <div>
      Home
      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </div>
  );
}


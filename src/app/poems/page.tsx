"use client";
import { BackgroundImage } from "@/components/BackgroundImage";
import back3 from "@/shared/images/back480.jpg";
import back1 from "@/shared/images/back1920.jpg";
import back2 from "@/shared/images/back1024.jpg";
import { useEffect, useMemo, useState } from "react";
import { poemsArr } from "@/app/poems/poems";
import "./poems.scss";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";


export default function Poems() {
  const searchParams = useSearchParams();
  const [poemIndex, setPoemIndex] = useState<number | null>(() => {
    return checkSearchParams();
  });
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


  useEffect(() => {
    setPoemIndex(checkSearchParams());
  }, [searchParams]);


  function changePoem(poem: number) {
    setPoemIndex(poem);
  }

  function checkSearchParams() {
    if (window.innerWidth <= 1024) {
      return null;
    }

    const index = searchParams.get("id") as number | null;
    if (index && poemsArr[index] !== undefined) {
      return +index;
    } else {
      return 0;
    }
  }


  const showPoem = poemIndex !== null && !!poemsArr[poemIndex];
  return (
    <Box className={"poems"}>
      {/*<PoemsList changePoem={changePoem} poemIndex={poemIndex} />*/}
      {/*{showPoem && <PoemsActive poem={poemsArr[poemIndex]} />}*/}


      <Box className={"poems__block-1"}>
        1
      </Box>
      <Box className={"poems__block-2"}>2</Box>

      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </Box>
  );
}

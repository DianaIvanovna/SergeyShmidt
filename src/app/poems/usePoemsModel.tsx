import { useSpring } from "@react-spring/web";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { poemsArr } from "@/app/poems/poems";
import { useSearchParams } from "next/navigation";

const windowWidth = 1024;

export const usePoemsModel = () => {
  const isFullPage = useMediaQuery(`(min-width:${windowWidth}px)`);
  const searchParams = useSearchParams();
  const [poemIndex, setPoemIndex] = useState<number | null>(() => {
    return checkSearchParams();
  });

  const [poemsListSpring, poemsListApi] = useSpring(() => ({
    from: { opacity: 0, display: "block" },
    to: { opacity: 1, display: "block" }
  }));
  const [activePoemSpring, activePoemApi] = useSpring(() => ({
    from: { display: window.innerWidth > windowWidth ? "block" : "none", opacity: 0 }
  }));

  useEffect(() => {
    if (isFullPage && poemIndex === null) {
      setPoemIndex(0);
    }

    const showBlock = poemIndex !== null;
    // console.log("!!!");
    // console.log("setActivePoemAnim", showBlock);
    // console.log("setPoemListAnim", isFullPage ? true : !showBlock);
    setActivePoemAnim(showBlock);
    setPoemListAnim(isFullPage ? true : !showBlock);
  }, [poemIndex, isFullPage]);

  function setActivePoemAnim(showBlock: boolean) {
    if (showBlock) {

      activePoemApi.start({
        from: {
          display: "block",
          opacity: 0
        },
        to: {
          opacity: 1,
          display: "block"
        }
      });
    } else {
      activePoemApi.start({
        from: {
          opacity: 1,
          display: "block"
        },
        to: {
          opacity: 0,
          display: "none"
        }
      });
    }
  }

  function setPoemListAnim(showBlock: boolean) {
    if (isFullPage) {
      poemsListApi.start({
        from: {
          opacity: 1,
          display: "block"
        },
        to: {
          opacity: 1,
          display: "block"
        }
      });
      return;
    }

    if (showBlock) {
      poemsListApi.start({
        from: {
          opacity: 0,
          display: "block"
        },
        to: {
          opacity: 1,
          display: "block"
        }
      });
    } else {
      poemsListApi.start({
        from: {
          opacity: 1,
          display: "block"
        },
        to: {
          opacity: 0,
          display: "none"
        }
      });
    }
  }

  function checkSearchParams() {
    if (window.innerWidth <= windowWidth) {
      return null;
    }


    const index = searchParams.get("id") as number | null;

    if (index && poemsArr[index] !== undefined) {
      return +index;
    } else {
      return 0;
    }
  }

  function changePoem(poem: number | null) {
    setPoemIndex(poem);
    let paramsString = "";

    if (poem !== null) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("poem", poemsArr[poem].url);
      params.set("id", poem.toString());
      paramsString = "?" + params.toString();
    }


    window.history.pushState(null, "", paramsString);
  }

  return {
    poemIndex,
    changePoem,
    poemsListSpring,
    activePoemSpring
  };
};
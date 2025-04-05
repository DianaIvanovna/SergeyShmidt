"use client";
import { BackgroundImage } from "@/components/BackgroundImage";
import back3 from "@/shared/images/back480.jpg";
import back1 from "@/shared/images/back1920.jpg";
import back2 from "@/shared/images/back1024.jpg";
import { useMemo } from "react";
import "./poems.scss";
import { Box } from "@mui/material";
import { animated } from "@react-spring/web";
import { usePoemsModel } from "@/app/poems/usePoemsModel";
import { PoemsList } from "@/app/poems/PoemsList";
import { PoemsActive } from "@/app/poems/PoemsActive";
import { poemsArr } from "@/app/poems/poems";


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

  const {
    poemIndex,
    changePoem,
    poemsListSpring,
    activePoemSpring
  } = usePoemsModel();

  return (
    <Box className={"poems"}>
      <animated.div className={"poems__block"} style={poemsListSpring}>
        <PoemsList changePoem={changePoem} poemIndex={poemIndex} />
      </animated.div>
      <animated.div className={"poems__block"} style={activePoemSpring}>
        <PoemsActive
          poem={poemsArr[poemIndex ?? 0]}
          changePoem={changePoem}
          poemLength={poemsArr.length - 1}
          poemIndex={poemIndex}
        />
      </animated.div>

      <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
    </Box>
  );
}


// "use client";
// import { BackgroundImage } from "@/components/BackgroundImage";
// import back3 from "@/shared/images/back480.jpg";
// import back1 from "@/shared/images/back1920.jpg";
// import back2 from "@/shared/images/back1024.jpg";
// import { useEffect, useMemo, useState } from "react";
// import { poemsArr } from "@/app/poems/poems";
// import "./poems.scss";
// import { Box, Button, useMediaQuery } from "@mui/material";
// import { useSearchParams } from "next/navigation";
// import { animated, useSpring } from "@react-spring/web";
//
//
// export default function Poems() {
//   const sources = useMemo(() => {
//     return [
//       {
//         srcSet: back1.src,
//         media: "(min-width: 1024px)"
//       },
//       {
//         srcSet: back2.src,
//         media: "(min-width: 640px)"
//       }
//     ];
//   }, []);
//
//
//   const searchParams = useSearchParams();
//   const isFullPage = useMediaQuery("(min-width:1024px)");
//
//
//   const [poemIndex, setPoemIndex] = useState<number | null>(() => {
//     return checkSearchParams();
//   });
//
//
//   useEffect(() => {
//     showPoemAnim(poemIndex);
//     showPoemsListAnim(poemIndex, isFullPage);
//   }, [poemIndex, isFullPage]);
//
//
//   function changePoem(poem: number | null) {
//     setPoemIndex(poem);
//     let paramsstring = "";
//
//     if (poem !== null) {
//       const params = new URLSearchParams(searchParams.toString());
//       params.set("poem", poemsArr[poem].url);
//       params.set("id", poem.toString());
//       paramsstring = "?" + params.toString();
//     }
//
//
//     window.history.pushState(null, "", paramsstring);
//   }
//
//   function checkSearchParams() {
//     if (window.innerWidth <= 1024) {
//       return null;
//     }
//
//
//     const index = searchParams.get("id") as number | null;
//
//     if (index && poemsArr[index] !== undefined) {
//       return +index;
//     } else {
//       return 0;
//     }
//   }
//
//
//   const showPoem = poemIndex !== null && !!poemsArr[poemIndex];
//
//   // const [transitions, api] = useTransition(data, () => ({
//   //   from: { opacity: 0 },
//   //   enter: { opacity: 1 },
//   //   leave: { opacity: 1 }
//   // }));
//
//   const [state, setState] = useState(true);
//   const [springs, api] = useSpring(() => ({
//     from: { opacity: 0, display: "block" },
//     to: { opacity: 1, display: "block" }
//   }));
//   const [springs2, api2] = useSpring(() => ({
//     from: { display: isFullPage ? "block" : "none", opacity: 0 }
//   }));
//
//   function showPoemAnim(poem: number | null) {
//     console.log("showPoemAnim", poem);
//
//     if (poem === null) {
//       api2.start({
//         from: {
//           opacity: 1,
//           display: "block"
//         },
//         to: {
//           opacity: 0,
//           display: "none"
//         }
//       });
//     } else {
//       api2.start({
//         from: {
//           display: "block",
//           opacity: 0
//         },
//         to: {
//           opacity: 1,
//           display: "block"
//         }
//       });
//     }
//
//
//   }
//
//   function showPoemsListAnim(poem: null | number, isFullPage: boolean) {
//     console.log("showPoemsListAnim", poem, isFullPage);
//     if (isFullPage) {
//       // api.start({
//       //   from: {
//       //     opacity: 0,
//       //     display: "block"
//       //   },
//       //   to: {
//       //     opacity: 1,
//       //     display: "block"
//       //   }
//       // });
//       return;
//     }
//
//     if (poem === null) {
//       api.start({
//         from: {
//           opacity: 0,
//           display: "block"
//         },
//         to: {
//           opacity: 1,
//           display: "block"
//         }
//       });
//     } else {
//       api.start({
//         from: {
//           opacity: 1,
//           display: "block"
//         },
//         to: {
//           opacity: 0,
//           display: "none"
//         }
//       });
//     }
//   }
//
//   return (
//     <Box className={"poems"}>
//       {/*<PoemsList changePoem={changePoem} poemIndex={poemIndex} />*/}
//       {/*{showPoem && <PoemsActive poem={poemsArr[poemIndex]} />}*/}
//
//
//       <animated.div className={"poems__block-1"} style={springs}>
//         {
//           [0, 1, 2].map((item) => (
//             <Box key={item} sx={{ padding: "20px", border: "1px solid red" }} onClick={() => {
//               changePoem(item);
//             }}>{item}</Box>
//           ))
//         }
//       </animated.div>
//       <animated.div className={"poems__block-2"} style={springs2}>
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <Button onClick={() => {
//             changePoem(null);
//           }}>
//             menu
//           </Button>
//           {poemIndex}
//           <Button>prev</Button>
//           <Button>next</Button>
//         </Box>
//       </animated.div>
//
//       <BackgroundImage mainImageSrc={back3.src} alt={"background image"} sources={sources} />
//     </Box>
//   );
// }

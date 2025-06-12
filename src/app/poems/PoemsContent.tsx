"use client";
import { animated } from "@react-spring/web";
import { PoemsList } from "@/app/poems/PoemsList";
import { PoemsActive } from "@/app/poems/PoemsActive";
import { poemsArr } from "@/app/poems/poems";
import { usePoemsModel } from "@/app/poems/usePoemsModel";
import "./poems.scss";
import { PropsWithChildren, useEffect, useState } from "react";

export function WindowOnLoad({ children }: PropsWithChildren) {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setShowComponent(true);
  }, []);

  if (showComponent) {
    return children;
  }

  return null;
}


export const PoemsContent = () => {
  const {
    poemIndex,
    changePoem,
    poemsListSpring,
    activePoemSpring
  } = usePoemsModel();

  return (
    <>
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
    </>
  );
};

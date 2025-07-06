"use client";

import Link from "next/link";
import { Routes } from "@/shared/constants/Routes";
import { Typography } from "@mui/material";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

export const PageContent = () => {
  const springs = useSpring({
    from: { bottom: "-100px", opacity: 0 },
    to: { bottom: "0px", opacity: 1 },
    delay: 300
  });

  return (
    <animated.div
      style={{
        position: "relative",
        ...springs
      }}
    >

      <Link href={Routes.TRACKS}>
        <Typography variant={"hedvig_24/13"} className={"home__title"}>
          YOU’RE SURE TO <br />FIND SOMETHING <br />FOR YOU IN MY <br />TRACKS
        </Typography>
      </Link>
    </animated.div>
  );
};
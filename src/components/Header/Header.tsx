"use client";
import "./Header.scss";
import React from "react";
import { Menu } from "@/components/Menu";
import { Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";


export const Header = () => {
  const springs = useSpring({
    from: { top: "-100px", opacity: 0 },
    to: { top: "0px", opacity: 1 },
    delay: 300
  });

  return (
    <animated.div
      className={"header"}
      style={{
        position: "relative",
        ...springs
      }}
    >
      <Menu />
      <Typography variant={"h2"}>SERGEY
        <br />SHMIDT</Typography>
    </animated.div>
  );
};
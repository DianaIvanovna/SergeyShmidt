"use client";
import "./Header.scss";
import React from "react";
import { Menu } from "@/components/Menu";
import { Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import { Routes } from "@/shared/constants/Routes";
import Link from "next/link";


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
      <Link href={Routes.HOME}>
        <Typography variant={"h2"}>SERGEY
          <br />SHMIDT(v7)</Typography>
      </Link>


    </animated.div>
  );
};
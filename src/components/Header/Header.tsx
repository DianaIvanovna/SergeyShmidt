"use client";
import "./Header.scss";
import React from "react";
import { Menu } from "@/components/Menu";
import { Typography } from "@mui/material";


export const Header = () => {
  return (
    <div
      className={"header"}
    >
      <Menu />
      <Typography variant={"h2"}>SERGEY
        <br />SHMIDT</Typography>
    </div>
  );
};